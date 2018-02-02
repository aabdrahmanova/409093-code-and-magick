'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)]'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomName() {
  return NAMES[Math.round(Math.random() * ((NAMES.length - 1) - 0) + 0)] + ' ' + LAST_NAMES[Math.round(Math.random() * ((LAST_NAMES.length - 1) - 0) + 0)];
}

function getRandomCoat() {
  return COAT_COLOR[Math.round(Math.random() * ((COAT_COLOR.length - 1) - 0) + 0)];
}

function getRandomEyes() {
  return EYES_COLOR[Math.round(Math.random() * ((EYES_COLOR.length - 1) - 0) + 0)];
}

var wizards = [
  {
    name: getRandomName(),
    coatColor: getRandomCoat(),
    eyesColor: getRandomEyes()
  },
  {
    name: getRandomName(),
    coatColor: getRandomCoat(),
    eyesColor: getRandomEyes()
  },
  {
    name: getRandomName(),
    coatColor: getRandomCoat(),
    eyesColor: getRandomEyes()
  },
  {
    name: getRandomName(),
    coatColor: getRandomCoat(),
    eyesColor: getRandomEyes()
  }
];

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}
