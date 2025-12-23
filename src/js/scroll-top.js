const top = document.querySelector('.top');

function showScrollUpButton() {
  top.classList.remove('hidden');
}

function hideScrollUpButton() {
  top.classList.add('hidden');
}

window.addEventListener('scroll', scroll);
export function scroll() {
  if (window.scrollY > 400) {
    showScrollUpButton();
  } else {
    hideScrollUpButton();
  }
}

top.addEventListener('click', scrollUp);
export function scrollUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
