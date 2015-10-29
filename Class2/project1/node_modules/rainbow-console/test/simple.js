
var test = require('tape');
var rainbowConsole = require('../');

test('console.log', function(t) {
  console.log('test');
  t.end();
})

test('console.info', function(t) {
  console.info('test');
  t.end();
})

test('console.warn', function(t) {
  console.warn('test');
  t.end();
})

test('console.error', function(t) {
  console.error('test');
  t.end();
})
