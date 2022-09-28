const check = document.querySelector('.circle');
const icon = document.querySelector('.fa-check');

check.addEventListener('click', () => {
   icon.classList.toggle('display-check');
});

icon.addEventListener('click', () => {
   icon.classList.toggle('display-check');
});
