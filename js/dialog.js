'use strict';

(function () {
  var ESC_KEY = window.utils.ESC_KEY;
  var ENTER_KEY = window.utils.ENTER_KEY;

  /* Селекторы для открытия и закрытия настроек персонажа */
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  /* Селекторы для открытия и закрытия настроек персонажа */

  var setupWizardName = setup.querySelector('.setup-user-name');

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
    if (setupWizardName !== document.activeElement) {
      setup.classList.add('hidden');
      document.removeEventListener('keydown', onPopupEscPress);
    }
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
})();
