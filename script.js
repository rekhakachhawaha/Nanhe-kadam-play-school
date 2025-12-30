let started = false;

function startCounter() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = Math.ceil(target / 80);

    const update = () => {
      if (count < target) {
        count += increment;
        counter.innerText = count;
        setTimeout(update, 30);
      } else {
        counter.innerText = target + "+";
      }
    };

    update();
  });
}

window.addEventListener('scroll', () => {
  const section = document.getElementById('counterSection');
  const sectionTop = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight && !started) {
    startCounter();
    started = true;
  }
});



