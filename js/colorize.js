'use strict';

(function () {
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)]'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  window.colorize = function (element) {
    element.addEventListener('click', function () {
      if (element === wizardCoat) {
        element.style.fill = COAT_COLOR[Math.round(Math.random() * ((COAT_COLOR.length - 1) - 0) + 0)];
      } else if (element === wizardEyes) {
        element.style.fill = EYES_COLOR[Math.round(Math.random() * ((EYES_COLOR.length - 1) - 0) + 0)];
      } else if (element === fireball) {
        element.style.background = FIREBALL_COLOR[Math.round(Math.random() * ((FIREBALL_COLOR.length - 1) - 0) + 0)];
      }
    });
  };
})();

