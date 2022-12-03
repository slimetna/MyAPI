import { route as apiRoute } from './routes';

const express = require('express');
require('dotenv').config();

const app = express();
app.use('/', apiRoute);

app.listen(3000, () => console.log('App is running on port 3000: http://localhost:3000'));
