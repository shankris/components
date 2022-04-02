function showNotifications() {

  var x = document.getElementById('notiAlert');
  var bg = document.getElementById('notiBg');

  if (window.getComputedStyle(x, null).getPropertyValue("display") === 'none') {
    x.style.display = 'block';
    bg.style.display = 'block';
  } else {
    x.style.display = 'none';
    bg.style.display = 'none';
  }
}
