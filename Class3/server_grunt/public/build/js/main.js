'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = (function () {
  function Animal() {
    _classCallCheck(this, Animal);

    console.log('I\'m alive');
  }

  _createClass(Animal, [{
    key: 'move',
    value: function move(direction) {
      console.log('moved ' + direction);
    }
  }]);

  return Animal;
})();

var animal = new Animal();
animal.move('right');
//# sourceMappingURL=main.js.map
