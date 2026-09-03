document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.getElementById('menuBtn');
  var nav = document.getElementById('mainNav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu after clicking a link (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Add a subtle shadow to the header once the page is scrolled
  var header = document.getElementById('siteHeader');
  window.addEventListener('scroll', function () {
    if (header) {
      header.style.boxShadow = window.scrollY > 10 ? '0 4px 14px rgba(0,0,0,.08)' : 'none';
    }
  });
});
