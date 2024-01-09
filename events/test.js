// Get all the navigation links and the red box element
const navLinks = document.querySelectorAll('nav a');
const redBox = document.querySelector('nav span');

// Add click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Remove 'active' class from all links
    navLinks.forEach(item => item.classList.remove('active'));

    // Add 'active' class to the clicked link
    link.classList.add('active');

    // Calculate the left position for the red box based on the clicked link's position
    const leftPos = link.offsetLeft;
    const width = link.offsetWidth;
    
    // Set the left position and width for the red box
    redBox.style.left = leftPos + 'px';
    redBox.style.width = width + 'px';
  });
});
