'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = (function () {
  function Animal() {
    var name = arguments.length <= 0 || arguments[0] === undefined ? 'rai' : arguments[0];

    _classCallCheck(this, Animal);

    this.name = name;
  }

  _createClass(Animal, [{
    key: 'sayName',
    value: function sayName() {
      console.log('my name is ' + this.name);
    }
  }, {
    key: 'callHome',
    value: function callHome() {
      console.log('Calling home now');
    }
  }, {
    key: 'move',
    value: function move() {
      var dir = arguments.length <= 0 || arguments[0] === undefined ? "left" : arguments[0];

      console.log('moving ' + dir);
    }
  }]);

  return Animal;
})();

var a = new Animal('Bill');
a.sayName();
a.callHome();
a.move();