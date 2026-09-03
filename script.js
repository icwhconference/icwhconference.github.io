(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links a');

  function setNavOpen(open) {
    document.documentElement.classList.toggle('nav-open', open);

    if (navToggle) {
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    if (nav) {
      nav.setAttribute('aria-hidden', open ? 'false' : 'true');
    }
  }

  // Start with the mobile menu closed
  setNavOpen(false);

  // Hamburger button
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      const isOpen = document.documentElement.classList.contains('nav-open');
      setNavOpen(!isOpen);
    });
  }

  // Close menu after clicking a navigation link
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      setNavOpen(false);
    });
  });

  // Close menu with Escape
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      setNavOpen(false);
    }
  });

  // Close menu when clicking outside it
  document.addEventListener('click', function (event) {
    if (
      document.documentElement.classList.contains('nav-open') &&
      nav &&
      navToggle &&
      !nav.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      setNavOpen(false);
    }
  });

  // Smooth focus for anchor links
  document.addEventListener('click', function (event) {
    const link = event.target.closest('a');

    if (!link || !link.hash) return;

    const id = link.hash.slice(1);
    const target = document.getElementById(id);

    if (target) {
      target.tabIndex = -1;

      setTimeout(function () {
        target.focus();
      }, 300);
    }
  });
})();
