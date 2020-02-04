'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

/* Селекторы для открытия и закрытия настроек персонажа */
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
/* Селекторы для открытия и закрытия настроек персонажа */

/* Селекторы для настройки цветов по нажатию на волшебника */
var setupPlayer = document.querySelector('.setup-player');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
/* Селекторы для настройки цветов по нажатию на волшебника */

/* Селекторы по аттрибутам для невидимых инпутов */
var attributeCoat = setupPlayer.querySelector('[name=\'coat-color\']');
var attributeEyes = setupPlayer.querySelector('[name=\'eyes-color\']');
var attributeFireball = wizardFireball.querySelector('[name=\'fireball-color\']');
/* Селекторы по аттрибутам для невидимых инпутов */

/* Массивы имен и цветов */
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZRD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
/* Массивы имен и цветов */

/* Активация темплейта похожих магов */
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
/* Активация темплейта похожих магов */

/* Функция рандомизации массивов */
var getRandom = function (list) {
  return list[Math.floor(Math.random() * list.length)];
};
/* Функция рандомизации массивов */

/* Функция создания массива магов */
var createWizards = function (wizardsCount) {
  var wizards = [];

  for (var i = 0; i < wizardsCount; i++) {
    wizards.push({
      name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZRD_SURNAMES),
      coatColor: getRandom(COAT_COLORS),
      eyesColor: getRandom(EYES_COLORS)
    });
  }

  return wizards;
};

var wizards = createWizards(4);
/* Функция создания массива магов */

/* Функция записи параметров созданных магов с массива сгенерированных магов */
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
/* Функция записи параметров созданных магов с массива сгенерированных магов */

/* Болк кода по открытию и закрытию окна настройки персонажа */
var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});
/* Болк кода по открытию и закрытию окна настройки персонажа */

/* Обработчики событий по изменению настроек мага (цвет - глаз, мантии, фаербола) */
wizardCoat.addEventListener('click', function () {
  var randomColor = getRandom(COAT_COLORS);
  wizardCoat.style.fill = randomColor;
  attributeCoat.value = randomColor;
});

wizardEyes.addEventListener('click', function () {
  var randomColor = getRandom(EYES_COLORS);
  wizardEyes.style.fill = randomColor;
  attributeEyes.value = randomColor;
});

wizardFireball.addEventListener('click', function () {
  var randomColor = getRandom(FIREBALL_COLORS);
  wizardFireball.style.backgroundColor = randomColor;
  attributeFireball.value = randomColor;
});
/* Обработчики событий по изменению настроек мага (цвет - глаз, мантии, фаербола) */
