// Mobile navigation toggle + close on link click; progressive enhancement
(function(){
  const html = document.documentElement;
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav-links a');

  function setNavOpen(open){
    if(open){
      html.classList.add('nav-open');
      navToggle.setAttribute('aria-expanded','true');
    } else {
      html.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded','false');
    }
  }

  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      const isOpen = html.classList.contains('nav-open');
      setNavOpen(!isOpen);
    });
  }

  // Close menu when a nav link is clicked (mobile)
  navLinks.forEach(link=>{
    link.addEventListener('click', ()=>{
      setNavOpen(false);
    });
  });

  // Close menu on escape
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') setNavOpen(false);
  });

  // Smooth focus-visible for keyboard users
  document.addEventListener('click', (e)=>{
    if(e.target.tagName === 'A' && e.target.hash){
      // allow anchor default then focus target
      const id = e.target.hash.slice(1);
      const el = document.getElementById(id);
      if(el){
        el.tabIndex = -1;
        setTimeout(()=> el.focus(), 300);
      }
    }
  });

  // Basic HTML validity safety: log if missing main nav
  if(!document.querySelector('nav[aria-label="Main navigation"]')){
    console.warn('Main navigation not found. Ensure the header has correct markup.');
  }
})();
