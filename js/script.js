/* ============================================
   SINCHANA HI-TECH DIAGNOSTIC CENTER
   Premium Lab Website — Main Script
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ========================================
  // DATA: Health Concerns
  // ========================================
  const healthConcerns = [
    { name: "FEVER", icon: "assets/icons/fever.png" },
    { name: "DIABETES", icon: "assets/icons/diabetes.png" },
    { name: "KIDNEYS", icon: "assets/icons/kidneys.png" },
    { name: "LIVER", icon: "assets/icons/liver.png" },
    { name: "THYROID", icon: "assets/icons/thyroid.png" },
    { name: "HEART CHECK", icon: "assets/icons/heart.png" },
    { name: "VITAMIN PROFILE", icon: "assets/icons/vitamin.png" },
    { name: "ALLERGY", icon: "assets/icons/allergy.png" },
    { name: "HORMONES TEST", icon: "assets/icons/hormone.png" },
    { name: "CANCER TESTING", icon: "assets/icons/cancer.png" },
    { name: "URINE TEST", icon: "assets/icons/urine_test.png" },
    { name: "ARTHRITIS TESTING", icon: "assets/icons/arthritis.png" },
    { name: "COVID TESTING", icon: "assets/icons/covid.png" },
    { name: "SEROLOGY TESTING", icon: "assets/icons/serology_testing.png" },
    { name: "CULTURE AND SENSITIVITY TEST", icon: "assets/icons/sensitivity.png" },
    { name: "PREGNANCY TESTING", icon: "assets/icons/pregnancy_test.png" },
    { name: "STOOL TESTING", icon: "assets/icons/stool_testing.png" },
    { name: "TB TESTING", icon: "assets/icons/tb_testing.png" },
    { name: "MARKER TESTING", icon: "assets/icons/marker.png" },
    { name: "AROGYAM PROFILE", icon: "assets/icons/arogyam.png" },
    { name: "SPERM TESTING", icon: "assets/icons/sperm_testing.png" },
  ];

  // ========================================
  // DATA: Sub-tests Map (Name → Tests)
  // ========================================
  const subTestsMap = {
    "FEVER": [
      { name: "Complete Blood Count (CBC)", price: "Rs. 300", reportTime: "30 Minutes" },
      { name: "Widal Test (Typhoid)", price: "Rs. 150", reportTime: "20 Minutes" },
      { name: "Dengue (NS1, IgM, IgG)", price: "Rs. 500", reportTime: "30 Minutes" },
      { name: "Rapid Malaria", price: "Rs. 300", reportTime: "30 Minutes" },
      { name: "Chikungunya", price: "Rs. 700", reportTime: "30 Minutes" },
      { name: "Weil-Felix", price: "Rs. 900", reportTime: "30 Minutes" }
    ],
    "DIABETES": [
      { name: "HbA1c", price: "Rs. 600", reportTime: "1 hour" },
      { name: "FBS / PPBS", price: "Rs. 100", reportTime: "1 hour" },
      { name: "Random Blood Sugar (RBS)", price: "Rs. 50", reportTime: "30 Minutes" }
    ],
    "KIDNEYS": [
      { name: "Renal Function Test (RFT)", price: "Rs. 450", reportTime: "1 hour" },
      { name: "Serum Creatinine", price: "Rs. 150", reportTime: "30 Minutes" },
      { name: "Blood Urea", price: "Rs. 150", reportTime: "30 Minutes" },
      { name: "Serum Uric Acid", price: "Rs. 150", reportTime: "30 Minutes" }
    ],
    "LIVER": [
      { name: "Liver Function Test (LFT)", price: "Rs. 450", reportTime: "1 hour" },
      { name: "Total Bilirubin", price: "Rs. 120", reportTime: "30 Minutes" },
      { name: "Direct Bilirubin", price: "Rs. 100", reportTime: "30 Minutes" },
      { name: "Indirect Bilirubin", price: "Rs. 100", reportTime: "30 Minutes" },
      { name: "Total Proteins", price: "Rs. 120", reportTime: "30 Minutes" },
      { name: "Albumin", price: "Rs. 120", reportTime: "30 Minutes" },
      { name: "Globulins", price: "Rs. 100", reportTime: "30 Minutes" },
      { name: "Albumin Globulin Ratio", price: "Rs. 100", reportTime: "30 Minutes" },
      { name: "S.G.O.T", price: "Rs. 100", reportTime: "30 Minutes" },
      { name: "S.G.P.T", price: "Rs. 100", reportTime: "30 Minutes" },
      { name: "Alkaline Phosphatase (ALP)", price: "Rs. 100", reportTime: "30 Minutes" },
      { name: "Gamma-Glutamyl Transferase (GGT)", price: "Rs. 500", reportTime: "1 hour" }
    ],
    "THYROID": [
      { name: "TSH / T3 / T4", price: "Rs. 450", reportTime: "2 hours" },
      { name: "FP3 / FP4 / PSH", price: "Rs. 1200", reportTime: "3 hours" },
      { name: "TSH", price: "Rs. 300", reportTime: "2 hours" }
    ],
    "HEART CHECK": [
      { name: "ECG", price: "Rs. 250", reportTime: "10 Minutes" },
      { name: "Troponin I", price: "Rs. 800", reportTime: "2 hours" },
      { name: "Troponin P", price: "Rs. 1200", reportTime: "1 day" },
      { name: "Serum CK-NAC", price: "Rs. 800", reportTime: "Same day" },
      { name: "Serum CK-MB", price: "Rs. 800", reportTime: "Same day" },
      { name: "Lipid Profile", price: "Rs. 450", reportTime: "1 hour" }
    ],
    "VITAMIN PROFILE": [
      { name: "Vitamin D3", price: "Rs. 900", reportTime: "6 hours" },
      { name: "Vitamin B12", price: "Rs. 850", reportTime: "6 hours" }
    ],
    "ALLERGY": [
      { name: "Total IgE", price: "Rs. 750", reportTime: "8 hours" },
      { name: "Food Allergy Panel", price: "Rs. 1500", reportTime: "24 hours" }
    ],
    "HORMONES TEST": [
      { name: "LH", price: "Rs. 400", reportTime: "5 hours" },
      { name: "FSH", price: "Rs. 400", reportTime: "5 hours" },
      { name: "Prolactin", price: "Rs. 500", reportTime: "4 hours" }
    ],
    "CANCER TESTING": [
      { name: "CEA", price: "Rs. 1100", reportTime: "24 hours" },
      { name: "AFP", price: "Rs. 950", reportTime: "24 hours" },
      { name: "PSA", price: "Rs. 750", reportTime: "6 hours" }
    ],
    "URINE TEST": [
      { name: "Routine Urine Test", price: "Rs. 150", reportTime: "2 hours" },
      { name: "Urine Culture", price: "Rs. 500", reportTime: "48 hours" }
    ],
    "ARTHRITIS TESTING": [
      { name: "RA Factor", price: "Rs. 600", reportTime: "6 hours" },
      { name: "Anti-CCP", price: "Rs. 900", reportTime: "8 hours" }
    ],
    "COVID TESTING": [
      { name: "RT-PCR", price: "Rs. 700", reportTime: "12 hours" },
      { name: "Rapid Antigen Test", price: "Rs. 300", reportTime: "1 hour" }
    ],
    "SEROLOGY TESTING": [
      { name: "HIV 1 & 2", price: "Rs. 400", reportTime: "24 hours" },
      { name: "HCV", price: "Rs. 500", reportTime: "24 hours" }
    ],
    "CULTURE AND SENSITIVITY TEST": [
      { name: "Urine C&S", price: "Rs. 600", reportTime: "48 hours" },
      { name: "Throat Swab C&S", price: "Rs. 700", reportTime: "48 hours" }
    ],
    "PREGNANCY TESTING": [
      { name: "Beta HCG", price: "Rs. 500", reportTime: "3 hours" },
      { name: "Urine Pregnancy Test", price: "Rs. 250", reportTime: "1 hour" }
    ],
    "STOOL TESTING": [
      { name: "Routine Stool Test", price: "Rs. 200", reportTime: "4 hours" },
      { name: "Occult Blood Test", price: "Rs. 350", reportTime: "6 hours" }
    ],
    "TB TESTING": [
      { name: "Mantoux Test", price: "Rs. 300", reportTime: "48 hours" },
      { name: "TB PCR", price: "Rs. 1500", reportTime: "24 hours" }
    ],
    "MARKER TESTING": [
      { name: "CRP", price: "Rs. 450", reportTime: "4 hours" },
      { name: "D-Dimer", price: "Rs. 750", reportTime: "5 hours" }
    ],
    "AROGYAM PROFILE": [
      { name: "Aarogyam 1.1", price: "Rs. 799", reportTime: "24 hours" },
      { name: "Aarogyam 1.3", price: "Rs. 1499", reportTime: "24 hours" }
    ],
    "SPERM TESTING": [
      { name: "Semen Analysis", price: "Rs. 500", reportTime: "2 hours" },
      { name: "Motility Test", price: "Rs. 400", reportTime: "3 hours" }
    ]
  };

  // ========================================
  // NAVBAR: Scroll effect + Mobile toggle
  // ========================================
  const navbar = document.querySelector('.site-navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const mobileOverlay = document.querySelector('.mobile-overlay');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
      if (mobileOverlay) mobileOverlay.classList.toggle('active');
    });
  }

  // Close mobile nav on overlay click
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      mobileOverlay.classList.remove('active');
    });
  }

  // Nav link clicks: smooth scroll + close mobile
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');

      // Close mobile menu
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      if (mobileOverlay) mobileOverlay.classList.remove('active');

      // If we are in "all tests" view, go back first
      const allTestsSection = document.getElementById('allTestsSection');
      if (allTestsSection && !allTestsSection.classList.contains('hidden')) {
        allTestsSection.classList.add('hidden');
        document.querySelectorAll('section.main-section').forEach(s => s.classList.remove('hidden'));
      }

      // Smooth scroll
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }

      // Update active state
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // ========================================
  // SCROLL SPY: Highlight active nav link
  // ========================================
  const sections = document.querySelectorAll('section.main-section[id]');
  const navLinksList = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinksList.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);

  // ========================================
  // ANIMATED COUNTERS
  // ========================================
  function animateCounter(element, target, suffix = '') {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current).toLocaleString() + suffix;
    }, 25);
  }

  const statsSection = document.querySelector('.stats-section');
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        document.querySelectorAll('.stat-number').forEach(el => {
          const target = parseInt(el.dataset.target);
          const suffix = el.dataset.suffix || '';
          animateCounter(el, target, suffix);
        });
      }
    });
  }, { threshold: 0.3 });

  if (statsSection) statsObserver.observe(statsSection);

  // ========================================
  // FADE IN ON SCROLL (Intersection Observer)
  // ========================================
  const fadeElements = document.querySelectorAll('.fade-in-up');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  fadeElements.forEach(el => fadeObserver.observe(el));

  // ========================================
  // HEALTH CONCERNS GRID
  // ========================================
  const concernGrid = document.getElementById('concernGrid');
  if (concernGrid) {
    healthConcerns.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'concern-card';
      card.innerHTML = `
        <img src="${item.icon}" alt="${item.name}" onerror="this.style.display='none'" />
        <p>${item.name}</p>
      `;
      card.addEventListener('click', () => openModal(index));
      concernGrid.appendChild(card);
    });
  }

  // ========================================
  // MODAL SYSTEM
  // ========================================
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalContainer = document.getElementById('modalContainer');
  const modalIcon = document.getElementById('modalIcon');
  const modalName = document.getElementById('modalName');
  const modalTestsTitle = document.getElementById('modalTestsTitle');
  const modalTestsList = document.getElementById('modalTestsList');
  const modalClose = document.getElementById('modalClose');
  const prevBtn = document.getElementById('prevConcernBtn');
  const nextBtn = document.getElementById('nextConcernBtn');
  let currentIndex = 0;

  function openModal(index) {
    currentIndex = index;
    renderModal(index);
    modalBackdrop.classList.add('active');
    modalContainer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('active');
    modalContainer.classList.remove('active');
    document.body.style.overflow = '';
  }

  function renderModal(index) {
    const item = healthConcerns[index];
    const tests = subTestsMap[item.name] || [];

    modalIcon.src = item.icon;
    modalIcon.alt = item.name;
    modalName.textContent = item.name;
    modalTestsTitle.textContent = `Tests for ${item.name}`;

    modalTestsList.innerHTML = '';

    if (tests.length === 0) {
      modalTestsList.innerHTML = '<p style="color: #6c757d; padding: 1rem;">No tests available for this category.</p>';
    } else {
      tests.forEach(test => {
        const div = document.createElement('div');
        div.className = 'modal-test-item';
        div.innerHTML = `
          <h5>${test.name}</h5>
          <div class="modal-test-meta">
            <span class="price-tag">${test.price}</span>
            <span class="time-tag">⏱ ${test.reportTime}</span>
          </div>
        `;
        modalTestsList.appendChild(div);
      });
    }

    // Arrow visibility
    prevBtn.disabled = (index <= 0);
    nextBtn.disabled = (index >= healthConcerns.length - 1);
    prevBtn.style.visibility = (index <= 0) ? 'hidden' : 'visible';
    nextBtn.style.visibility = (index >= healthConcerns.length - 1) ? 'hidden' : 'visible';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        renderModal(currentIndex);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentIndex < healthConcerns.length - 1) {
        currentIndex++;
        renderModal(currentIndex);
      }
    });
  }

  // Close modal on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // ========================================
  // VIEW ALL TESTS: Sidebar + Detail Panel
  // ========================================
  const viewAllBtn = document.getElementById('viewAllBtn');
  const backBtn = document.getElementById('backBtn');
  const allTestsSection = document.getElementById('allTestsSection');
  const concernSidebar = document.getElementById('concernSidebar');
  const subTestsList = document.getElementById('subTestsList');
  const detailTitle = document.getElementById('detailTitle');

  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
      // Hide all main sections
      document.querySelectorAll('section.main-section').forEach(s => s.classList.add('hidden'));
      // Show all tests section
      allTestsSection.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Build sidebar
      concernSidebar.innerHTML = '';
      healthConcerns.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'sidebar-card';
        card.innerHTML = `
          <img src="${item.icon}" alt="${item.name}" onerror="this.style.display='none'" />
          <p>${item.name}</p>
        `;
        card.addEventListener('click', () => {
          document.querySelectorAll('.sidebar-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          renderDetailPanel(item.name);
        });
        concernSidebar.appendChild(card);

        // Auto-select first
        if (index === 0) {
          card.classList.add('active');
          renderDetailPanel(item.name);
        }
      });
    });
  }

  function renderDetailPanel(concernName) {
    const tests = subTestsMap[concernName] || [];
    detailTitle.textContent = `Tests for ${concernName}`;
    subTestsList.innerHTML = '';

    if (tests.length === 0) {
      subTestsList.innerHTML = '<p style="color: #6c757d;">No tests available.</p>';
      return;
    }

    tests.forEach(test => {
      const card = document.createElement('div');
      card.className = 'test-detail-card';
      card.innerHTML = `
        <h4>${test.name}</h4>
        <div class="test-meta">
          <span class="test-price">${test.price}</span>
          <span class="test-time">⏱ ${test.reportTime}</span>
        </div>
      `;
      subTestsList.appendChild(card);
    });
  }

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      allTestsSection.classList.add('hidden');
      document.querySelectorAll('section.main-section').forEach(s => s.classList.remove('hidden'));
      // Scroll back to tests section
      const testsSection = document.getElementById('tests');
      if (testsSection) testsSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ========================================
  // FOOTER YEAR
  // ========================================
  const footerYear = document.getElementById('footerYear');
  if (footerYear) footerYear.textContent = new Date().getFullYear();

});
