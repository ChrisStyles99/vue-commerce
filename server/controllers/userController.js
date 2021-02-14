const userController = {}
const dbConnection = require('../database/dbConnection');
const connection = dbConnection();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

userController.login = (req, res) => {
  const {email, password} = req.body;
  connection.query('SELECT * FROM users WHERE email = ?', [email], async(error, result) => {
    if(error) throw error;

    if(result.length < 1) {
      return res.json({error: true, msg: 'Email does not exists'});
    }

    const validPassword = await bcrypt.compare(password, result[0].password);

    if(!validPassword) {
      return res.json({error: true, msg: 'Passwords does not match'});
    }

    const payload = {
      id: result[0].id
    }

    const token = jwt.sign(payload, process.env.SECRET, {
      expiresIn: '1h'
    });

    res.cookie('token', token, {
      maxAge: 3600000,
      httpOnly: true
    });
    res.cookie('isLoggedIn', true, {maxAge: 3600000});

    res.json({error: false, msg: 'You are now logged in'});
  })
}

userController.register = (req, res) => {
  const {name, email, password} = req.body;
  connection.query('SELECT email FROM users WHERE email = ?', [email], async(error, result) => {
    if(error) throw error;

    if(result.length > 0) {
      return res.json({error: true, msg: 'Email is already in use'});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], (error) => {
      if(error) throw error;

      res.json({error: false, msg: 'New user created :D'});
    })
  });
}

module.exports = userController;