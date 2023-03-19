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

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  question.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    let display = answer.style.display;
    if (display === 'none') {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  });
});

