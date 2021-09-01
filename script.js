  // Look for elements
  const menu = document.querySelector('.drop-down-menu')
  const hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    menu.classList.toggle('show')
  });
