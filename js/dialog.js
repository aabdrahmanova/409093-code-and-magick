'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');

  function onPopupEscPress(evt) {
    window.util.isEscEvent(evt, closePopup);
  }

  function openPopup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);

    window.colorize(wizardCoat);
    window.colorize(wizardEyes);
    window.colorize(fireball);
  }

  function closePopup() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });
})();
