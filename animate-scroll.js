//In your HTML, add <script src="js/script.js"></script>
//Insert 'data-anime="left, right, etc" in a html div or tag to call this function
// The direction you will insert must be left,right, bottom or top
/*Add this script to your css file.

=========================================================================

[data-anime]{
  opacity: 0;
  transition: .3s;
}
[data-anime="left"]{
  transform: translate3d(-50px, 0, 0);
}
[data-anime="right"]{
  transform: translate3d(50px, 0, 0);
}
[data-anime="top"]{
  transform: translate3d(0px, -50px, 0);
}
[data-anime="bottom"]{
  transform: translate3d(0px, 50px, 0);
}
[data-anime].animate{
  opacity:1;
  transform: translate3d(0px, 0, 0);
}

*/

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';
  
  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight)/ 2);
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    })
  }
  
  animeScroll();
  
  if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
    }, 200));
  }
