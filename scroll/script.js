window.addEventListener('scroll', animateSkillBar);

function animateSkillBar() {
  var skillBar = document.querySelector('.skill-bar');
  var barPosition = skillBar.getBoundingClientRect().top;

  var windowHeight = window.innerHeight;

  if (barPosition < windowHeight) {
    skillBar.classList.add('animate');
  } else {
    skillBar.classList.remove('animate');
  }
}
