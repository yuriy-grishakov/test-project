const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.header-block');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})