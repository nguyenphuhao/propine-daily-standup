const express = require('express');
const app = express();

app.use(express.json()) // for parsing application/json


const dailyPageRouter = require('./daily-page/router');
app.use('/daily-page', dailyPageRouter);

//An error handling middleware
app.use(function (err, req, res, next) {
    if (err) {
        res.send("Oops, something went wrong.")
    }
    return res.json();
});
app.listen(80, () => {
    console.log('Server has started at port 80');
});
