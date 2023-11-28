// script.js

document.getElementById('menuIcon').addEventListener('click', function() {
    var mobileMenu = document.getElementsByClassName('ds-button');
    for (var i = 0; i < mobileMenu.length; i++) {
        if (mobileMenu[i].style.display === 'block') {
            mobileMenu[i].style.display = 'none';
        } else {
            mobileMenu[i].style.display = 'block';
        }
    }
});
