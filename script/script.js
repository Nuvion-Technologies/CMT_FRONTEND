/* Store the element in el */
let el = document.getElementById('tilt')

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
el.addEventListener('mousemove', handleMove)

/* Define function a */
function handleMove(e) {
  /*
    * Get position of mouse cursor
    * With respect to the element
    * On mouseover
    */
  /* Store the x position */
  const xVal = e.layerX
  /* Store the y position */
  const yVal = e.layerY
  const yRotation = 20 * ((xVal - width / 2) / width)

  /* Calculate the rotation along the X-axis */
  const xRotation = -20 * ((yVal - height / 2) / height)

  /* Generate string for CSS transform property */
  const string = 'perspective(500px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

  /* Apply the calculated transformation */
  el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function () {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function () {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function () {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})



// ADD A .scrolled CLASS TO THE HEADER WHEN THE PAGE IS SCROLLED
var yourElement = document.getElementById('nav'); // Change 'yourElementId' to the actual ID of your element

// Specify the scroll value at which you want to add the class
var scrollThreshold = 20; // Change this value as needed

// Function to handle the scroll event
function handleScroll() {
  // Check the scroll position
  var scrollPosition = window.scrollY || window.pageYOffset;

  // Add or remove the class based on the scroll position
  if (scrollPosition > scrollThreshold) {
    yourElement.classList.add('scrolled');
  } else {
    yourElement.classList.remove('scrolled');
  }
}

// Add the event listener to the window's scroll event
window.addEventListener('scroll', handleScroll);



window.addEventListener('scroll', function () {
  var value = window.scrollY;
  var about = document.getElementById('about_head');
  var contact = document.getElementById('contact_head');

  if (value > 400) {
    about.style.transform = 'translateX(0px)';
    about.style.opacity = '1';
  }
  if (value > 1300) {
    contact.style.transform = 'translateX(0px)';
    contact.style.opacity = '1';
  }

});



const login = document.getElementById('login');
login.addEventListener("click", function() {
  const loader = document.getElementById('loader');

  loader.style.display = 'block'; // Show the loader on page load

  // After 2 seconds, hide the loader with smooth fade-out
  setTimeout(function () {
      loader.style.opacity = '0';
          loader.style.display = 'none';
          window.location.href = 'shivam_login.html';
  }, 1200);
});
