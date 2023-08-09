const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}


const navLinks = document.querySelectorAll('.mainMenu li a');
const navMenu = document.querySelector('.mainMenu');

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    mainMenu.style.top = '-100%'
  });
}); 

var lastScrollTop;
navBar = document.getElementById('headerNav')
window.addEventListener('scroll', function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    navBar.style.top = '-90px';
  }
  else{
    navBar.style.top = '0';
  }
  lastScrollTop = scrollTop
}) 