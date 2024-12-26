// Add interactivity for skill highlighting
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('main.cv-content ul li');

    skillItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.color = '#007acc';
            item.style.fontWeight = 'bold';
        });

        item.addEventListener('mouseout', () => {
            item.style.color = '#333';
            item.style.fontWeight = 'normal';
        });
    });
});
