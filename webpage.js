const sections = document.querySelectorAll('section');

const navi = document.querySelectorAll('a.menu-item');
// Add an event listener listening for scroll
window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    if(scrollY >= (sectionTop)){
      current = section.getAttribute('id');
    }
    if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      current = section.getAttribute('id');
    }
  })
  
  navi.forEach( a => {
    a.classList.remove('highlight');
    if(a.classList.contains(current)){
      a.classList.add('highlight')
    }
  })
})

