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

  connection.query('SELECT * FROM products WHERE id = ?', [id], (error, result) => {
    if(error) throw error;
    if(result.length < 1) {
      res.json({error: true, msg: 'No product with that id'});
    } else {
      res.json({error: false, product: result[0]});
    }
  });
}

productController.getProductsByCategory = (req, res) => {
  let {category} = req.params;
  category = category.replace(/-/g, ' ');
  connection.query('SELECT * FROM products WHERE category = ?', [category], (error, results) => {
    if(error) throw error;

    if(results.length < 1) {
      res.json({error: true, msg: 'No products with that category'});
    } else {
      res.json({error: false, products: results});
    }
  })
}

productController.getCategories = (req, res) => {
  connection.query('SELECT DISTINCT(category) FROM products', (error, results) => {
    if(error) throw error;
    if(results.length < 1) {
      return res.json({error: true, msg: 'No products or categories'});
    }

    res.json({error: false, categories: results});
  });
}

// productController.makeOrder = (req, res) => {
  
// }

module.exports = productController;