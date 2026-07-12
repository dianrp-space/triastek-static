(function() {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim();
    return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
    const els = select(el, all);
    if (els) {
      (all ? els : [els]).forEach(e => e.addEventListener(type, listener));
    }
  };

  const onscroll = (el, listener) => el.addEventListener('scroll', listener);

  let navbarlinks = select('#navbar .scrollto', true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      section.offsetTop <= position && position <= section.offsetTop + section.offsetHeight
        ? navbarlink.classList.add('active')
        : navbarlink.classList.remove('active');
    });
  };
  window.addEventListener('load', navbarlinksActive);
  onscroll(window, navbarlinksActive);

  const scrollto = (el) => {
    let target = select(el);
    if (!target) return;
    let header = select('#header');
    let offset = header ? header.offsetHeight : 70;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  };

  let selectHeader = select('#header');
  if (selectHeader) {
    const headerScrolled = () => {
      window.scrollY > 100
        ? selectHeader.classList.add('header-scrolled')
        : selectHeader.classList.remove('header-scrolled');
    };
    window.addEventListener('load', headerScrolled);
    onscroll(window, headerScrolled);
  }

  let backtotop = select('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      window.scrollY > 100
        ? backtotop.classList.add('active')
        : backtotop.classList.remove('active');
    };
    window.addEventListener('load', toggleBacktotop);
    onscroll(window, toggleBacktotop);
  }

  on('click', '.mobile-nav-toggle', function() {
    select('#navbar').classList.toggle('navbar-mobile');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault();
      this.nextElementSibling.classList.toggle('dropdown-active');
    }
  }, true);

  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault();
      let navbar = select('#navbar');
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile');
        let toggle = select('.mobile-nav-toggle');
        toggle.classList.add('bi-list');
        toggle.classList.remove('bi-x');
      }
      scrollto(this.hash);
    }
  }, true);

  window.addEventListener('load', () => {
    if (window.location.hash && select(window.location.hash)) {
      scrollto(window.location.hash);
    }
  });

  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => preloader.remove());
  }

  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox' });
    GLightbox({ selector: '.portfolio-lightbox' });
  }

  if (typeof Swiper !== 'undefined') {
    new Swiper('.portfolio-details-slider', {
      speed: 400, loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true }
    });
    new Swiper('.milestone-slider', {
      speed: 500, loop: false,
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: { el: '.milestone-pagination', type: 'bullets', clickable: true },
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 24 },
        480: { slidesPerView: 1, spaceBetween: 20 }
      }
    });
  }

  window.addEventListener('load', () => {
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 1000, easing: "ease-in-out", once: true, mirror: false });
    }
  });

})();
