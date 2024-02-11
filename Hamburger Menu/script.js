document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('check');
    const menu = document.querySelector('.menu');
  
    menu.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            checkbox.checked = false;
        }
    });
  });
  