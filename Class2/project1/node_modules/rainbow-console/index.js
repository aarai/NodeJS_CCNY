
var util = require('util');
var defaultCode = 36;

var LEVEL = {
  LOG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3
}

var LevelMap = [
  'log',
  'info',
  'warn',
  'error'
]

function prettyPrint(level, message) {
  var fmt = '  \033[%dm%s\033[0m : \033[90m%s\033[0m\n';
  switch (level) {
    case LEVEL.INFO:
      process.stdout.write(util.format(fmt, 36, LevelMap[level], message));
      break;
    case LEVEL.WARN:
      process.stderr.write(util.format(fmt, 33, LevelMap[level], message));
      break;
    case LEVEL.ERROR:
      process.stderr.write(util.format(fmt, 31, LevelMap[level], message));
      break;
    case LEVEL.LOG:
    default:
      process.stdout.write(util.format(fmt, 30, LevelMap[level], message));
      break;
  }
}

console.log = function() {
  var message = util.format.apply(this, arguments);
  prettyPrint(LEVEL.LOG, message);
}

console.info = function() {
  var message = util.format.apply(this, arguments);
  prettyPrint(LEVEL.INFO, message);
}

console.warn = function() {
  var message = util.format.apply(this, arguments);
  prettyPrint(LEVEL.WARN, message);
}

console.error = function() {
  var message = util.format.apply(this, arguments);
  prettyPrint(LEVEL.ERROR, message);
}
