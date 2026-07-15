(function () {
  // Splash Screen + Video
  var splash = document.getElementById('splashScreen');
  var videos = document.querySelectorAll('.hero-video');

  function startHero() {
    if (splash) {
      splash.classList.add('hidden');
      setTimeout(function () { splash.style.display = 'none'; }, 800);
    }
    videos.forEach(function (v) {
      v.play().catch(function () {});
      v.classList.add('visible');
    });
  }

  if (splash) {
    setTimeout(startHero, 2800);
  } else {
    videos.forEach(function (v) {
      v.play().catch(function () {});
      v.classList.add('visible');
    });
  }

  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  var currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  var heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    setTimeout(function () {
      heroContent.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 200);
  }

  // Gallery
  var galleryGrid = document.getElementById('galleryGrid');
  if (galleryGrid) {
    var images = [];
    for (var i = 1; i <= 8; i++) {
      images.push({ src: 'images/muslim/m' + i + '.jpg', type: 'muslim', label: 'Kabristaan ' + i });
    }
    for (var i = 1; i <= 8; i++) {
      images.push({ src: 'images/hindu/h' + i + '.jpg', type: 'hindu', label: 'Shamshan Ghat ' + i });
    }

    function makePlaceholder(label, type) {
      var c = type === 'muslim' ? '#1a2a1a' : '#2a1a1a';
      var icon = type === 'muslim' ? '\u{1F54A}' : '\u{26B2}';
      return 'data:image/svg+xml,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">' +
        '<rect width="400" height="400" fill="' + c + '"/>' +
        '<text x="200" y="180" text-anchor="middle" font-family="Inter,sans-serif" font-size="56" fill="rgba(255,255,255,0.15)">' + icon + '</text>' +
        '<text x="200" y="230" text-anchor="middle" font-family="Inter,sans-serif" font-size="16" fill="rgba(255,255,255,0.2)">' + label + '</text>' +
        '</svg>'
      );
    }

    var sizes = [
      'featured', 'tall', 'tall',
      'wide', 'wide',
      'square', 'square', 'square', 'square',
      'wide', 'square', 'square',
      'tall', 'square', 'square', 'square'
    ];

    images.forEach(function (img, i) {
      var div = document.createElement('div');
      var cls = 'gallery-item';
      if (sizes[i]) cls += ' ' + sizes[i];
      div.className = cls;
      div.style.background = img.type === 'muslim' ? '#1a2a1a' : '#2a1a1a';
      var fallback = makePlaceholder(img.label, img.type);
      div.innerHTML = '<img src="' + img.src + '" alt="' + img.label + '" loading="lazy" onerror="this.src=\'' + fallback + '\';this.style.opacity=\'0.7\'" style="width:100%;height:100%;object-fit:cover;">' +
        '<div class="gallery-overlay"><span class="gallery-label">' + img.label + '</span></div>';
      galleryGrid.appendChild(div);
    });
  }

  // Floating emergency button
  var emergencyBtn = document.createElement('a');
  emergencyBtn.href = 'tel:+919876543210';
  emergencyBtn.className = 'emergency-float';
  emergencyBtn.innerHTML = '&#x1F6A8;';
  emergencyBtn.title = 'Emergency: +91 98765 43210';
  emergencyBtn.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:999;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#ef4444,#dc2626);color:white;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 4px 20px rgba(239,68,68,0.4);cursor:pointer;transition:all 0.3s ease;border:none;text-decoration:none;';
  emergencyBtn.onmouseover = function () { this.style.transform = 'scale(1.1)'; };
  emergencyBtn.onmouseout = function () { this.style.transform = 'scale(1)'; };
  document.body.appendChild(emergencyBtn);

  // WhatsApp button
  var whatsappBtn = document.createElement('a');
  whatsappBtn.href = 'https://wa.me/919876543210?text=Hello%20Gravyaaard%2C%20I%20need%20assistance.';
  whatsappBtn.target = '_blank';
  whatsappBtn.className = 'whatsapp-float';
  whatsappBtn.innerHTML = '&#x1F4AC;';
  whatsappBtn.title = 'Chat on WhatsApp';
  whatsappBtn.style.cssText = 'position:fixed;bottom:92px;right:24px;z-index:999;width:56px;height:56px;border-radius:50%;background:#25D366;color:white;display:flex;align-items:center;justify-content:center;font-size:28px;box-shadow:0 4px 20px rgba(37,211,102,0.4);cursor:pointer;transition:all 0.3s ease;border:none;text-decoration:none;';
  whatsappBtn.onmouseover = function () { this.style.transform = 'scale(1.1)'; };
  whatsappBtn.onmouseout = function () { this.style.transform = 'scale(1)'; };
  document.body.appendChild(whatsappBtn);

  // Scroll animations
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .testimonial-card, .pricing-category').forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    observer.observe(el);
  });
})();
