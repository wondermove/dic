const carpoolReq = require('./carpoolReq');
const driverReg = require('./driverReg');
const myCarpoolGroup = require('./myCarpoolGroup');

module.exports = {
  ...carpoolReq,
  ...driverReg,
  ...myCarpoolGroup
}

