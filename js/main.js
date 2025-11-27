/* js/main.js */

document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------------------
    // 1. Dark Mode Toggle Logic
    // ------------------------------------------------
    const toggleButton = document.getElementById('theme-toggle');
    const html = document.documentElement; // The root element where the 'dark' class is applied

    // Check for theme in localStorage or system preference
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
        if (toggleButton) toggleButton.textContent = '☀️ Light Mode'; // Set initial text
    } else {
        if (toggleButton) toggleButton.textContent = '🌙 Dark Mode'; // Set initial text
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                toggleButton.textContent = '🌙 Dark Mode';
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                toggleButton.textContent = '☀️ Light Mode';
            }
        });
    }

    // ------------------------------------------------
    // 2. Scroll Reveal Animation (Intersection Observer)
    // ------------------------------------------------
    
    // Select elements that should fade in/slide up on scroll
    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove the 'opacity-0' and 'translate-y-10' classes
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                // Ensure the transition class is applied (it is already in HTML)
            } else {
                // Optional: Re-hide elements when they scroll out of view (for repeated viewing)
                // entry.target.classList.add('opacity-0', 'translate-y-10');
            }
        });
    }, {
        // Options: Trigger when 10% of the item is visible
        threshold: 0.1 
    });

    hiddenElements.forEach((el) => observer.observe(el));
});

// ------------------------------------------------
// 3. Smooth Scrolling (for internal links)
// ------------------------------------------------
// Tailwind utility for scroll-behavior: smooth is used on the <html> tag in the HTML files.
