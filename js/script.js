window.addEventListener('DOMContentLoaded', function () {
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

  const grid = document.getElementById('concernGrid');
  if (!grid) return;

  healthConcerns.forEach((item, index) => {
    const col = document.createElement('div');
    col.className = 'col';
    col.innerHTML = `
    <div class="category-card" style="cursor: pointer;">
      <img src="${item.icon}" alt="${item.name} icon" class="category-icon" onerror="this.style.display='none'" />
      <p>${item.name}</p>
    </div>
  `;

    // 👉 Update to use index
    col.querySelector('.category-card').addEventListener('click', () => {
      openConcernModal(index); // instead of showConcernModal
    });

    grid.appendChild(col);
  });



  const subTestsMap = {
    "FEVER": [
      { name: "Complete Blood Count (CBC)", price: "Rs. 300", reportTime: "30 Minutes" },
      { name: "Widal Test (Typhoid)", price: "Rs. 150", reportTime: "20 Minutes" },
      { name: "Dengue (NS1,IgM,IgG)", price: "Rs. 500", reportTime: "30 Minutes" },
      { name: "Rapid Malaria", price: "Rs. 300", reportTime: "30 Minutes" },
      { name: "Chikungunya", price: "Rs. 700", reportTime: "30 Minutes" },
      { name: "Weil-Felix", price: "Rs. 900", reportTime: "30 Minutes" }
    ],
    "DIABETES": [
      { name: "HbA1c", price: "Rs. 600", reportTime: "1 hour" },
      { name: "FBS/PPBS", price: "Rs. 100", reportTime: "1 hour" },
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
      { name: "Total Protiens", price: "Rs. 120", reportTime: "30 Minutes" },
      { name: "Albumin", price: "Rs. 120", reportTime: "30 Minutes" },
      { name: "Globulins", price: "Rs. 100", reportTime: "30 Minutes" },
      { name: "Albumin Globulin Ratio", price: "Rs. 100", reportTime: "30 Minutes" },
      { name: "S.G.O.T", price: "Rs. 100", reportTime: "30 Minutes" },
      { name: "S.G.P.T", price: "Rs. 100", reportTime: "30 Minutes" },
      { name: "Alkaline Phosahatase (ALP)", price: "Rs. 100", reportTime: "30 Minutes" },
      { name: "Gamma-Glutamyl Transferase (GGT)", price: "Rs. 500", reportTime: "1 hour" }
    ],
    "THYROID": [
      { name: "TSH/T3/T4", price: "Rs. 450", reportTime: "2 hours" },
      { name: "FP3/FP4/PSH", price: "Rs. 1200", reportTime: "3 hours" },
      { name: "TSH", price: "Rs. 300", reportTime: "2 hours" }
    ],
    "HEART CHECK": [
      { name: "ECG", price: "Rs. 250", reportTime: "10 Minutes" },
      { name: "Troponin I", price: "Rs. 800", reportTime: "2 hours" },
      { name: "Troponin P", price: "Rs. 1200", reportTime: "1 day" },
      { name: "Serum CK-NAC", price: "Rs. 800", reportTime: "same day" },
      { name: "Serum CK-MB", price: "Rs. 800", reportTime: "same day" },
      { name: "Lipid Profile", price: "Rs. 450", reportTime: "1 hour" },
    ],//done
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
      { name: "HIV 1&2", price: "Rs. 400", reportTime: "24 hours" },
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

  document.querySelector('#viewAllDetailsBtn').addEventListener('click', () => {
    // Hide all other sections
    document.querySelectorAll('section:not(#allDetailsContainer)').forEach(section => {
      section.classList.add('d-none');
    });

    // Show the allDetails section
    const container = document.getElementById('allDetailsContainer');
    container.classList.remove('d-none');
    container.scrollIntoView({ behavior: 'smooth' });

    // Reset UI areas
    const sidebar = document.getElementById('concernSidebar');
    const subTestsList = document.getElementById('subTestsList');
    const title = document.getElementById('selectedCategoryTitle');

    sidebar.innerHTML = '';
    subTestsList.innerHTML = '';
    title.innerText = 'Select a test';

    // Build sidebar list
    healthConcerns.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'category-card2 text-center cursor-pointer';
      card.style.cursor = 'pointer';
      card.innerHTML = `
      <img src="${item.icon}" alt="${item.name}" onerror="this.style.display='none'" />
      <p class="mb-0 fw-semibold">${item.name}</p>
    `;

      // Click handler for each health concern
      card.addEventListener('click', () => {
        // Remove active class from all
        document.querySelectorAll('#concernSidebar .category-card2').forEach(c => {
          c.classList.remove('active');
        });

        // Activate the clicked one
        card.classList.add('active');

        // Load sub-tests
        const tests = subTestsMap[item.name] || [];
        subTestsList.innerHTML = '';
        title.innerText = `Tests related to ${item.name}`;

        if (tests.length === 0) {
          subTestsList.innerHTML = `<p class="text-muted">No sub-tests available for ${item.name}.</p>`;
        } else {
          tests.forEach(test => {
            const testCard = document.createElement('div');
            testCard.className = 'test-card p-3 border rounded bg-white shadow-sm';
            testCard.innerHTML = `
            <h6 class="fw-semibold text-purple">${test.name}</h6>
            <p class="mb-1"><strong>Price:</strong> ${test.price}</p>
            <p class="mb-0"><strong>Report in:</strong> ${test.reportTime}</p>
          `;
            subTestsList.appendChild(testCard);
          });
        }
      });

      sidebar.appendChild(card);

      // Auto-select first
      if (index === 0) card.click();
    });
  });

  // Back button
  document.getElementById('backToGrid').addEventListener('click', () => {
    document.querySelectorAll('section').forEach(section => {
      if (section.id !== 'allDetailsContainer') {
        section.classList.remove('d-none');
      }
    });
    document.getElementById('allDetailsContainer').classList.add('d-none');
  });


  let currentConcernIndex = 0;
  const modal = new bootstrap.Modal(document.getElementById('testModal'));

  function openConcernModal(index) {
    currentConcernIndex = index;
    updateConcernModalContent(index);

    // Safe show + focus
    setTimeout(() => {
      modal.show();

      // Set focus to prevent aria-hidden warning
      setTimeout(() => {
        document.getElementById('modalName')?.focus();
      }, 300);
    }, 50);
  }


  function updateConcernModalContent(index) {
    const item = healthConcerns[index];
    const name = document.getElementById('modalName');
    const icon = document.getElementById('modalIcon');
    const list = document.getElementById('modalTestsList');
    const title = document.getElementById('modalTitle');

    title.innerText = `Tests for ${item.name}`;
    name.innerText = item.name;
    icon.src = item.icon;

    list.innerHTML = '';
    const tests = subTestsMap[item.name] || [];

    if (tests.length === 0) {
      list.innerHTML = '<p class="text-muted">No tests available.</p>';
    } else {
      tests.forEach(test => {
        const div = document.createElement('div');
        div.className = 'border rounded shadow-sm p-3 bg-light mb-2';
        div.innerHTML = `
        <h6 class="fw-semibold text-purple">${test.name}</h6>
        <p class="mb-1"><strong>Price:</strong> ${test.price}</p>
        <p class="mb-0"><strong>Report in</strong> ${test.reportTime}</p>
      `;
        list.appendChild(div);
      });
    }

    // Toggle arrows
    document.getElementById('prevConcernBtn').style.display = (index > 0) ? 'block' : 'none';
    document.getElementById('nextConcernBtn').style.display = (index < healthConcerns.length - 1) ? 'block' : 'none';
  }
  document.getElementById('prevConcernBtn').addEventListener('click', () => {
    if (currentConcernIndex > 0) {
      currentConcernIndex--;
      updateConcernModalContent(currentConcernIndex);
    }
  });

  document.getElementById('nextConcernBtn').addEventListener('click', () => {
    if (currentConcernIndex < healthConcerns.length - 1) {
      currentConcernIndex++;
      updateConcernModalContent(currentConcernIndex);
    }
  });


  document.querySelectorAll('.navbar a.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');

      if (targetId && targetId.startsWith('#')) {
        e.preventDefault(); // Prevent default jump

        // ✅ Hide #allDetailsContainer only if visible
        const allDetails = document.getElementById('allDetailsContainer');
        if (allDetails && !allDetails.classList.contains('d-none')) {
          allDetails.classList.add('d-none');
        }

        // ✅ Show all other sections
        document.querySelectorAll('section').forEach(section => {
          section.classList.remove('d-none');
        });

        // ✅ Smooth scroll to the target section
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        // ✅ Collapse navbar if open (for mobile)
        const navbarCollapse = document.getElementById('mainNavbar');
        if (navbarCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navbarCollapse).toggle();
        }
      }
    });
  });
});

