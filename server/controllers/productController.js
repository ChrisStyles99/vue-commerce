const productController = {};
const dbConnection = require('../database/dbConnection');
const connection = dbConnection();

productController.getAll = (req, res) => {
  connection.query('SELECT * FROM products', (error, results) => {
    if(error) throw error;

    if(results.length < 1) {
      return res.json({error: true, msg: 'No products available :('})
    }

    res.json({error: false, products: results});
  });
}

productController.getSingle = (req, res) => {
  const {id} = req.params;

  connection.query('SELECT * FROM products WHERE id = ?', (error, result) => {
    if(error) throw error;
    if(result.length < 1) {
      res.json({error: true, msg: 'No product with that id'});
    } else {
      res.json({error: false, product: result[0]});
    }
  });
}

// productController.makeOrder = (req, res) => {
  
// }

module.exports = productController;