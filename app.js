const navbarLinks = document.querySelectorAll('nav ul li a');
const dropdown = document.getElementById('dropdown');

navbarLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        dropdown.style.display = 'block';
    });

    link.addEventListener('mouseout', () => {
        dropdown.style.display = 'none';
    });
});

dropdown.addEventListener('click', (event) => {
    event.stopPropagation();
});
