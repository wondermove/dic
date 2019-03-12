const R = require('ramda');
const carpoolReq = require('./carpoolReq');
const driverReg = require('./driverReg');
const myCarpoolGroup = require('./myCarpoolGroup');

module.exports = R.mergeAll([carpoolReq, driverReg, myCarpoolGroup]);

