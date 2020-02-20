'use strict';

(function () {
  var EYES_COLORS = window.utils.EYES_COLORS;
  var COAT_COLORS = window.utils.COAT_COLORS;
  var setupDialogElement = window.utils.setupDialogElement;
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandom = window.utils.getRandom;

  /* Селекторы для настройки цветов по нажатию на волшебника */
  var setupPlayer = document.querySelector('.setup-player');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var attributeCoat = setupPlayer.querySelector('[name=\'coat-color\']');
  var attributeEyes = setupPlayer.querySelector('[name=\'eyes-color\']');
  var attributeFireball = wizardFireball.querySelector('[name=\'fireball-color\']');
  /* Селекторы для настройки цветов по нажатию на волшебника */

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

  var form = setupDialogElement.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setupDialogElement.classList.add('hidden');
    });

    evt.preventDefault();
  });
})();
