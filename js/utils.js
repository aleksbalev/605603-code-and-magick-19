'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var getRandom = function (list) {
    return list[Math.floor(Math.random() * list.length)];
  };

  var setupDialogElement = document.querySelector('.setup');

  window.utils = {
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY,
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS,
    getRandom: getRandom,
    setupDialogElement: setupDialogElement
  };
})();
