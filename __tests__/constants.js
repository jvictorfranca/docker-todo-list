const { resolve } = require('path');
const uuid = require('uuid').v4;
const evalId = process.env.EVAL_CONTAINER_NAME || `trybe-eval-${uuid()}`;

module.exports = {
  evalId,
  challengesFolder: resolve('docker'),
  containerWorkDir: `/${evalId}`,
  defaultDelay: 10000,
};
