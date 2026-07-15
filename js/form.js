var currentStep = 1;
var totalSteps = 4;

function nextStep(step) {
  if (!validateStep(currentStep)) return;
  document.querySelector('.form-step.active').classList.remove('active');
  document.querySelector('.form-step[data-step="' + step + '"]').classList.add('active');

  document.querySelectorAll('.form-progress .step').forEach(function (s) {
    var sNum = parseInt(s.dataset.step);
    s.classList.remove('active');
    if (sNum < step) s.classList.add('completed');
    if (sNum === step) s.classList.add('active');
  });

  currentStep = step;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (step === 4) populateReview();
}

function prevStep(step) {
  document.querySelector('.form-step.active').classList.remove('active');
  document.querySelector('.form-step[data-step="' + step + '"]').classList.add('active');

  document.querySelectorAll('.form-progress .step').forEach(function (s) {
    var sNum = parseInt(s.dataset.step);
    s.classList.remove('active');
    if (sNum <= step) s.classList.remove('completed');
    if (sNum === step) s.classList.add('active');
  });

  currentStep = step;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function validateStep(step) {
  var stepEl = document.querySelector('.form-step[data-step="' + step + '"]');
  var required = stepEl.querySelectorAll('[required]');
  var valid = true;

  required.forEach(function (field) {
    field.style.borderColor = '';
    if (!field.value || field.value.trim() === '') {
      field.style.borderColor = '#ef4444';
      valid = false;
    }
  });

  if (!valid) {
    alert('Please fill in all required fields marked with *');
  }

  return valid;
}

// File upload handling
(function () {
  var uploadArea = document.getElementById('fileUploadArea');
  var fileInput = document.getElementById('certificateFile');
  var preview = document.getElementById('filePreview');

  if (uploadArea && fileInput) {
    uploadArea.addEventListener('click', function () {
      fileInput.click();
    });

    uploadArea.addEventListener('dragover', function (e) {
      e.preventDefault();
      uploadArea.style.borderColor = '#c9a84c';
      uploadArea.style.background = 'rgba(201,168,76,0.05)';
    });

    uploadArea.addEventListener('dragleave', function () {
      uploadArea.style.borderColor = '';
      uploadArea.style.background = '';
    });

    uploadArea.addEventListener('drop', function (e) {
      e.preventDefault();
      uploadArea.style.borderColor = '';
      uploadArea.style.background = '';
      if (e.dataTransfer.files.length) {
        fileInput.files = e.dataTransfer.files;
        handleFile(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener('change', function () {
      if (this.files.length) {
        handleFile(this.files[0]);
      }
    });
  }

  function handleFile(file) {
    var maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      alert('File is too large. Maximum size is 5 MB.');
      return;
    }

    var validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload a JPG, PNG, or PDF file.');
      return;
    }

    preview.style.display = 'flex';
    preview.innerHTML = '<span style="font-size:1.2rem;">' + (file.type === 'application/pdf' ? '&#x1F4C4;' : '&#x1F5BC;') +
      '</span><span class="file-name">' + file.name + ' (' + (file.size / 1024).toFixed(1) + ' KB)</span>' +
      '<span class="file-remove" onclick="removeFile()">&times;</span>';

    uploadArea.style.display = 'none';
  }

  window.removeFile = function () {
    fileInput.value = '';
    preview.style.display = 'none';
    uploadArea.style.display = 'block';
  };
})();

function populateReview() {
  var container = document.getElementById('reviewDetails');
  if (!container) return;

  var data = {
    'Applicant': document.getElementById('fullName').value,
    'Phone': document.getElementById('phone').value,
    'Email': document.getElementById('email').value || 'Not provided',
    'Relation': document.getElementById('relation').value,
    'Deceased Name': document.getElementById('deceasedName').value,
    'Father/Spouse': document.getElementById('fatherName').value,
    'Age': document.getElementById('age').value,
    'Gender': document.getElementById('gender').value,
    'Religion': document.getElementById('religion').value,
    'Date of Death': document.getElementById('dateOfDeath').value,
    'Place of Death': document.getElementById('placeOfDeath').value,
    'Certificate No': document.getElementById('certificateNumber').value || 'Not provided'
  };

  var html = '';
  for (var key in data) {
    html += '<div class="detail-row"><span class="detail-label">' + key + '</span><span class="detail-value">' + data[key] + '</span></div>';
  }
  container.innerHTML = html;
}

// Form submission
document.getElementById('verificationForm').addEventListener('submit', function (e) {
  e.preventDefault();
  if (!validateStep(currentStep)) return;

  var agree = document.getElementById('agreeTerms');
  if (!agree.checked) {
    alert('Please confirm that the information is correct.');
    return;
  }

  var vid = 'GRV-' + new Date().getFullYear() + '-' + String(Math.floor(10000 + Math.random() * 90000));
  document.getElementById('verificationId').textContent = vid;

  this.style.display = 'none';
  document.getElementById('formProgress').style.display = 'none';
  document.getElementById('successMessage').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
