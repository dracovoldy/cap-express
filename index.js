const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

//Require Routes
const home = require('./routes/home');
const estimate = require('./routes/estimate');
const data = require('./routes/data');
const createpdf = require('./routes/pdf');

// const jobs = require('./routes/jobs');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(helmet());
app.use(cors());
app.use(express.static('public'));
app.use(morgan('tiny'));

//use - routes
app.use('/', home);
app.use('/api/estimate', estimate);
app.use('/api/data', data);
app.use('/api/createpdf', createpdf);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));