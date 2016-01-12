var showMenu = document.getElementById('show-menu');
showMenu.addEventListener('click', function (event) {
  if (this.checked) {
    swapDisplay('down', 'up');
  } else {
    swapDisplay('up', 'down');
  }
});

function swapDisplay(hide, show) {
  document.getElementById(hide).style.display = 'none';
  document.getElementById(show).style.display = 'inline';
}
