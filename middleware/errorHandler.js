const {logEvents} = require('./logger');
const errHandler = (err,req,res,next) =>{
    logEvents(`${err.name}:${err.message}\t ${req.method}\t ${req.url}\t ${req.headers.origin}`,'errorLogMiddleware.txt');
    console.log(err.stack);

    // const status = res.statusCode ? res.statuscCode : 500 //server Error
    // res.status(status);
    // res.json({message : err.message});
    res.status(500).send(err.message);
}

module.exports = errHandler;