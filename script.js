// hero js

const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('closeMenu');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-item');

 hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
});

 closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

 navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});







// FAQ js 

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        
         document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) item.classList.remove('active');
        });

         faqItem.classList.toggle('active');
    });
});