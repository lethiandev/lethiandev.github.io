'use strict';

$(window).one('load', showPanelDelayed(300));
$(initHover3DPanel);

function showPanelDelayed(ms) {
  return function () {
    setTimeout(showPanel, ms);
  }
}

function showPanel() {
  $('#profile').addClass('animated').css({
    visibility: 'visible'
  });
}

function initHover3DPanel() {
  console.log('3d binded');
  $('#profile').hover3d({
    selector: '.panel-3d'
  });
}
