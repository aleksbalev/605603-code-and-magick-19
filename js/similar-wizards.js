'use strict';
(function () {
  var EYES_COLORS = window.utils.EYES_COLORS;
  var COAT_COLORS = window.utils.COAT_COLORS;

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZRD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var getRandom = window.utils.getRandom;

  /* Активация темплейта похожих магов */
  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document
    .querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');
  /* Активация темплейта похожих магов */

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
})();
