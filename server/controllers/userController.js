const userController = {}
const dbConnection = require('../database/dbConnection');
const connection = dbConnection();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

userController.login = (req, res) => {
  const {email, password} = req.body;
  connection.query('SELECT email FROM users WHERE email = ?', [email], async(error, result) => {
    if(error) throw error;

    if(result.length < 1) {
      return res.json({error: true, msg: 'Email does not exists'});
    }

    const validPassword = await bcrypt.compare(password, user[0].password);

    if(!validPassword) {
      return res.json({error: true, msg: 'Passwords does not match'});
    }

    const payload = {
      id: user[0].id
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