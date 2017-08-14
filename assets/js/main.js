'use strict';

window.addEventListener('load', showPanelDelayed(300));

function showPanelDelayed(ms) {
  return function () {
    setTimeout(showPanel, ms);
  }
}

function showPanel() {
  var profile = document.getElementById('profile');
  profile.style.visibility = 'visible';
  profile.classList.add('animated');
}
