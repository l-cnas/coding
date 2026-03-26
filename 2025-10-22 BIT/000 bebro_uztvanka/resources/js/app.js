import '../scss/app.scss';

const applySavedTheme = () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
};

document.addEventListener('DOMContentLoaded', function () {
    applySavedTheme();

    const themeButton = document.getElementById('theme-toggle');

    if (themeButton) {
        themeButton.addEventListener('click', function () {
            document.body.classList.toggle('light-mode');

            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    const navButtons = document.querySelectorAll('.nav-toggle');

    navButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const target = document.getElementById(targetId);

            if (target) {
                target.classList.toggle('nav-open');
            }
        });
    });
});