function inViewport( element ){

  
    // Get the elements position relative to the viewport
  
    var bb = element.getBoundingClientRect();
    console.log('Top',bb.top)
    console.log('Bottom',bb.bottom)
    console.log('innerHeight',innerHeight)
    
    // Check if the element is outside the viewport
    // Then invert the returned value because you want to know the opposite
  
    return !(bb.top > innerHeight*0.7 || bb.bottom < 0);
    
  }
 
  (
  ()=>{
  var myElement = document.querySelector( '.hero' );
  var myElement2 = document.querySelector( '.hero-right' );
  
  // Listen for the scroll event
  
  document.addEventListener( 'scroll', event => {
   
    // Check the viewport status
  
    if( inViewport( myElement ) ){
        myElement2.classList.remove("hide-content");
      
      //yElement.style.background = 'red';
      
    } else {
       // myElement2.classList.add("hide-content");
      //myElement.style.background = '';
      
    }
    
  })
})()