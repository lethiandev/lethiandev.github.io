'use strict';

window.addEventListener('load', showPanelDelayed(100));

function showPanelDelayed(ms) {
  return function () {
    setTimeout(showPanel, ms);
  }
}

function showPanel() {
  var profile = document.getElementById('profile');
  profile.style.display = '';
}
