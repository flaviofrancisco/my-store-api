require('dotenv').config();
const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const express = require('express');
const helmet = require('helmet');
const app = express();

const products = require('./routes/products/products');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(helmet());

if (app.get('env') === 'development') {
    app.use(morgan('tiny')); 
    debug('Morgan enabled...');    
}

app.use('/api/products', products);

app.get('/', (req, res) => {
    res.send(`Hello World @ ${process.env.NODE_ENV}`);
})

app.listen(process.env.SERVER_PORT || 3000, () => {
    debug(`Listening on port ${process.env.SERVER_PORT}`);
});