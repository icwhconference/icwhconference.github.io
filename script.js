// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.getElementById('primary-navigation');
const html = document.documentElement;

if (navToggle) {
  navToggle.addEventListener('click', function() {
    // Toggle the nav-open class on the html element
    html.classList.toggle('nav-open');
    
    // Update aria-expanded for accessibility
    const isExpanded = html.classList.contains('nav-open');
    navToggle.setAttribute('aria-expanded', isExpanded);
  });

  // Close menu when a link is clicked
  const navLinks = primaryNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      html.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', false);
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.nav') && html.classList.contains('nav-open')) {
      html.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', false);
    }
  });
}
