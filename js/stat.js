'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var GAP = 10;
var TEXT_HEIGHT = 20;
var barHeight = 150;

function renderCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

function getMaxElement(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + (GAP * 2), CLOUD_Y + GAP * 3);
  ctx.fillText('Список результатов:', CLOUD_X + (GAP * 2), CLOUD_Y + GAP * 5);

  var maxTime = getMaxElement(times);
  var myIndex = players.indexOf('Вы');

  players.unshift(players.splice(myIndex, 1)[0]);

  for (var i = 0; i < players.length; i++) {
    if (i === 0) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + GAP * 4 + ((BAR_WIDTH + BAR_GAP) * i), CLOUD_Y + CLOUD_HEIGHT - GAP - GAP - TEXT_HEIGHT - (barHeight * times[i]) / maxTime, BAR_WIDTH, (barHeight * times[i]) / maxTime);
      ctx.fillStyle = '#000';
      ctx.fillText(players[i], CLOUD_X + GAP * 4 + ((BAR_WIDTH + BAR_GAP) * i), CLOUD_Y + CLOUD_HEIGHT - GAP);
      ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_GAP + ((BAR_WIDTH + BAR_GAP) * i), CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT - (barHeight * times[i]) / maxTime - (GAP * 3), BAR_WIDTH, (barHeight * times[i]) / maxTime);
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random() * (1 - 0.1) + 0.1).toFixed(1) + ')';
      ctx.fillRect(CLOUD_X + GAP * 4 + ((BAR_WIDTH + BAR_GAP) * i), CLOUD_Y + CLOUD_HEIGHT - GAP - GAP - TEXT_HEIGHT - (barHeight * times[i]) / maxTime, BAR_WIDTH, (barHeight * times[i]) / maxTime);
      ctx.fillStyle = '#000';
      ctx.fillText(players[i], CLOUD_X + GAP * 4 + ((BAR_WIDTH + BAR_GAP) * i), CLOUD_Y + CLOUD_HEIGHT - GAP);
      ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_GAP + ((BAR_WIDTH + BAR_GAP) * i), CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT - (barHeight * times[i]) / maxTime - (GAP * 3), BAR_WIDTH, (barHeight * times[i]) / maxTime);
    }
  }

};
