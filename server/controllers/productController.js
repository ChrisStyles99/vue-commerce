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

productController.makeOrder = (req, res) => {
  const {products, totalPrice, totalItems} = req.body;

  let values = [];
  connection.query('INSERT INTO orders (user_id, total_price, total_items) VALUES (?, ?, ?)', [req.user, totalPrice, totalItems], (error, result) => {
    if(error) throw error;
    products.forEach(product => {
      values.push([result.insertId, product.id, product.quantity]);
    });
    connection.query('INSERT INTO orders_products (order_id, product_id, quantity) VALUES ?', [values], (error) => {
      if(error) throw error;

      res.json({error: false, msg: 'Order made :D'});
    })
  });
}

productController.getProfileOrders = (req, res) => {
  connection.query('SELECT o.id AS order_id, o.total_price, o.total_items, op.quantity, p.id AS product_id, p.name, p.price, p.category, p.image_url FROM orders AS o LEFT JOIN orders_products AS op ON o.id = op.order_id LEFT JOIN products AS p ON op.product_id = p.id WHERE user_id = ?', [req.user], (error, result) => {
    if(error) throw error;
    if(result.length < 1) {
      return res.json({error: true, msg: 'No orders made with this profile'});
    }
    res.json({error: false, orders: result});
  });
}

module.exports = productController;