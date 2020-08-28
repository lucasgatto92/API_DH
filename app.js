const express = require('express');
const app = express();

const moviesRouter = require('./routes/moviesRouter');
const seriesRouter = require('./routes/seriesRouter');

const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/movies', moviesRouter);
app.use('/series', seriesRouter);

app.listen(3002, function() {
    console.log("==================================");
    console.log("http://localhost:3002");
    console.log("==================================");
})

module.exports = app;