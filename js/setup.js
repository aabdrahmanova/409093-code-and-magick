'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)]'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireball = setup.querySelector('.setup-fireball-wrap');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var wizards = [];

document.querySelector('.setup-similar').classList.remove('hidden');

function getFullName() {
  return NAMES[Math.round(Math.random() * ((NAMES.length - 1) - 0) + 0)] + ' ' + LAST_NAMES[Math.round(Math.random() * ((LAST_NAMES.length - 1) - 0) + 0)];
}

function getRandomCoat() {
  return COAT_COLOR[Math.round(Math.random() * ((COAT_COLOR.length - 1) - 0) + 0)];
}

function getRandomEyes() {
  return EYES_COLOR[Math.round(Math.random() * ((EYES_COLOR.length - 1) - 0) + 0)];
}

function getRandomFireball() {
  return FIREBALL_COLOR[Math.round(Math.random() * ((FIREBALL_COLOR.length - 1) - 0) + 0)];
}

function createWizardArr(count, arr) {
  for (var i = 0; i < count; i++) {
    arr.push(
        {name: getFullName(),
          coatColor: getRandomCoat(),
          eyesColor: getRandomEyes()});
  }
}
createWizardArr(4, wizards);

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}

function onPopupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
}

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = getRandomCoat();
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = getRandomEyes();
  });

  fireball.addEventListener('click', function () {
    fireball.style.background = getRandomFireball();
  });
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
