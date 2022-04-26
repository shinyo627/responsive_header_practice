const toggleBtn = document.querySelector('.nav-toggleBtn');
const menuContainer = document.querySelector('.nav-menu');
const iconsContainer = document.querySelector('.nav-icons-container');

toggleBtn.addEventListener('click', () => {
  menuContainer.classList.toggle('active');
  iconsContainer.classList.toggle('active');
});
