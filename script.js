// hero js

const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('closeMenu');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-item');

// Open Menu
hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
});

// Close Menu via "X" Button
closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

// Close Menu when clicking any link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});







// FAQ js 

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        
        // Close other items (optional - remove if you want multiple open)
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) item.classList.remove('active');
        });

        // Toggle current item
        faqItem.classList.toggle('active');
    });
});