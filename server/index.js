const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.SECRET));
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}));

//Database
const dbConnection = require('./database/dbConnection');

const connection = dbConnection();

connection.connect(error => {
  if(error) throw error;
  console.log('Database connected');
});

//Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

//PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});