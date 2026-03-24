
const toggle = document.querySelector('.mobile-toggle');
const header = document.querySelector('header');
if(toggle && header){
  toggle.addEventListener('click', () => header.classList.toggle('mobile-open'));
}
