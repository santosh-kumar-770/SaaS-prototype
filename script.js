
// Smooth scroll for nav links
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
// Animated typing effect
document.addEventListener('DOMContentLoaded', function () {
    const el = document.getElementById('animated-words');
    if (!el) return;
    const words = ['Fast.', 'Secure.', 'Scalable.', 'Beautiful.'];
    let i = 0, j = 0, isDeleting = false;
    function type() {
        let word = words[i];
        if (isDeleting) {
            el.textContent = word.substring(0, j--);
        } else {
            el.textContent = word.substring(0, j++);
        }
        if (!isDeleting && j === word.length + 1) {
            isDeleting = true;
            setTimeout(type, 900);
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
            setTimeout(type, 400);
        } else {
            setTimeout(type, isDeleting ? 60 : 120);
        }
    }
    type();
});