'use strict';

$(window).on('load', showPanelDelayed(300));

function showPanelDelayed(ms) {
  return function () {
    setTimeout(showPanel, ms);
  }
}

function showPanel() {
  $('#profile').addClass('animated').css({
    visibility: 'visible'
  })
}
