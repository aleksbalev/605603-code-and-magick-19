'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var FONT_WIDTH = 40;
var FONT_Y = 260;
var BAR_WIDTH = 40;
var numberTen = 10;
var oneHundret = 100;
var barHeight = CLOUD_HEIGHT - oneHundret - numberTen * 2;
var calcAxisOrientationX = oneHundret + FONT_WIDTH;
var calCloudsMinus = oneHundret - numberTen;
var calcDobleCloudX = oneHundret * 2 + FONT_WIDTH;

var randomHsl = function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.font = '16px PT Mono';
  renderCloud(ctx, CLOUD_X + CLOUD_Y, CLOUD_Y + CLOUD_Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    var calcBarHeight = (barHeight * times[i]) / maxTime;

    if (i === 4) {
      break;
    }

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], calcAxisOrientationX + calCloudsMinus * i, FONT_Y);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle =
        'hsl(240, ' + randomHsl(1, 99) + '%, ' + '60%';
    }

    ctx.fillRect(
        calcAxisOrientationX + (BAR_WIDTH + FONT_WIDTH + numberTen) * i,
        calcDobleCloudX,
        BAR_WIDTH,
        -calcBarHeight
    );

    ctx.fillStyle = '#000';
    ctx.fillText(
        Math.round(times[i]),
        calcAxisOrientationX + calCloudsMinus * i,
        calcDobleCloudX - numberTen - calcBarHeight
    );
  }
};
