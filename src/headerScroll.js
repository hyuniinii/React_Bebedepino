export function headerScroll() {
    const scrollPosition = window.scrollY;
  
    const targetElement = document.querySelector('.header');
  
    if (scrollPosition > 0) {
      targetElement.classList.add('on');
    } else {
      targetElement.classList.remove('on');
    }
  }