function inViewport(element, percent) {


  // Get the elements position relative to the viewport

  var bb = element.getBoundingClientRect();

  // Check if the element is outside the viewport
  // Then invert the returned value because you want to know the opposite

  return !(bb.top > innerHeight * percent || bb.bottom < 0);

}

(
  () => {
    const ipad = window.matchMedia('screen and (max-width: 767px)');


    var myElement = document.querySelector('.hero');
    var myElement2 = document.querySelector('.hero-right');
    var portfolioContainer = document.querySelector('.portfolio-container');

    if (!ipad.matches) {
      // Listen for the scroll event

      document.addEventListener('scroll', event => {

        // Check the viewport status

        if (inViewport(myElement, 0.9)) {
          myElement2.classList.remove("hide-content");

          //yElement.style.background = 'red';

        } else {
          // myElement2.classList.add("hide-content");
          //myElement.style.background = '';

        }


        if (inViewport(portfolioContainer, 0.7)) {
          portfolioContainer.classList.remove("hDisable");

          //yElement.style.background = 'red';

        } else {
          // myElement2.classList.add("hide-content");
          //myElement.style.background = '';

        }

      })
    }
    else {
      myElement2.classList.remove("hide-content");
      portfolioContainer.classList.remove("hDisable");
    }
  })()