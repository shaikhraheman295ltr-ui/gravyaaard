var priceData = [
  { category: 'Cremation (Hindu)', items: [
    { name: 'Electric Crematorium', price: 500 },
    { name: 'Traditional Pyre (Wood)', price: 300 },
    { name: 'Wood Bundle (Full ~300 kg)', price: 2500 },
    { name: 'Wood Bundle (Half ~150 kg)', price: 1500 },
    { name: 'Waiting Hall Booking (per hr)', price: 200 },
    { name: 'Puja Samagri Kit', price: 1000 },
    { name: 'Priest Services', price: 1100 }
  ]},
  { category: 'Burial (Muslim)', items: [
    { name: 'Grave Digging', price: 800 },
    { name: 'Kafan (Shroud) Basic', price: 500 },
    { name: 'Kafan (Shroud) Premium', price: 1200 },
    { name: 'Grave Stone (Basic)', price: 1500 },
    { name: 'Grave Stone (Premium)', price: 3500 },
    { name: 'Janaza Prayers Hall', price: 300 },
    { name: 'Flowers & Attar', price: 400 }
  ]},
  { category: 'Transportation', items: [
    { name: 'Basic Ambulance (Within City)', price: 1500 },
    { name: 'Premium Ambulance (AC)', price: 2500 },
    { name: 'Mortuary Van (AC, Long Distance)', price: 5000 }
  ]},
  { category: 'Documentation', items: [
    { name: 'Death Certificate (Normal)', price: 50 },
    { name: 'Death Certificate (Urgent)', price: 200 },
    { name: 'Certificate Attestation', price: 100 },
    { name: 'Document Assistance Service', price: 500 }
  ]},
  { category: 'Facility Amenities', items: [
    { name: 'Prayer Hall (per hour)', price: 200 },
    { name: 'Parking (per vehicle)', price: 50 },
    { name: 'Chair Rental (per 10)', price: 100 },
    { name: 'Tent/Shamiana (Small 20x20)', price: 1000 },
    { name: 'Tent/Shamiana (Large 40x40)', price: 2500 }
  ]}
];

var selectedItems = {};

function initCalculator() {
  var container = document.getElementById('calculatorItems');
  if (!container) return;

  container.innerHTML = '';
  priceData.forEach(function (cat) {
    var section = document.createElement('div');
    section.style.marginBottom = '1rem';

    var header = document.createElement('p');
    header.style.cssText = 'font-size:0.8rem;font-weight:600;color:var(--accent-gold);margin-bottom:0.5rem;';
    header.textContent = cat.category;
    section.appendChild(header);

    cat.items.forEach(function (item) {
      var key = item.name.replace(/\s+/g, '_');
      selectedItems[key] = false;

      var label = document.createElement('label');
      label.style.cssText = 'display:flex;align-items:center;gap:0.5rem;padding:0.4rem 0;cursor:pointer;font-size:0.85rem;color:var(--text-secondary);';

      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.style.cssText = 'accent-color:var(--accent-gold);';
      checkbox.dataset.key = key;
      checkbox.dataset.price = item.price;
      checkbox.addEventListener('change', function () {
        selectedItems[this.dataset.key] = this.checked;
        updateTotal();
      });

      var text = document.createElement('span');
      text.textContent = item.name + ' - ₹' + item.price.toLocaleString();

      label.appendChild(checkbox);
      label.appendChild(text);
      section.appendChild(label);
    });

    container.appendChild(section);
  });
}

function updateTotal() {
  var total = 0;
  var allCheckboxes = document.querySelectorAll('#calculatorItems input[type="checkbox"]');
  allCheckboxes.forEach(function (cb) {
    if (cb.checked) {
      total += parseInt(cb.dataset.price);
    }
  });
  document.getElementById('grandTotal').textContent = '₹ ' + total.toLocaleString();
}

function downloadQuotation() {
  var selected = [];
  document.querySelectorAll('#calculatorItems input[type="checkbox"]').forEach(function (cb) {
    if (cb.checked) {
      selected.push({ name: cb.parentElement.textContent.trim(), price: parseInt(cb.dataset.price) });
    }
  });

  if (selected.length === 0) {
    alert('Please select at least one service to download quotation.');
    return;
  }

  var total = selected.reduce(function (sum, item) { return sum + item.price; }, 0);
  var date = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  var ref = 'GRV-QTN-' + Date.now().toString(36).toUpperCase();

  var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Quotation - Gravyaaard</title>' +
    '<style>body{font-family:Inter,sans-serif;padding:40px;color:#111;max-width:700px;margin:0 auto;}' +
    '.header{text-align:center;border-bottom:2px solid #c9a84c;padding-bottom:20px;margin-bottom:30px;}' +
    '.header h1{font-family:Playfair Display,serif;margin:0;color:#0a0a0a;}' +
    '.header p{color:#666;margin:5px 0 0;}' +
    'table{width:100%;border-collapse:collapse;margin:20px 0;}' +
    'th{background:#0a0a0a;color:#c9a84c;padding:10px 12px;text-align:left;font-size:13px;}' +
    'td{padding:8px 12px;border-bottom:1px solid #eee;font-size:14px;}' +
    '.total{text-align:right;font-size:18px;font-weight:700;color:#0a0a0a;margin-top:20px;}' +
    '.total span{color:#c9a84c;}' +
    '.footer{text-align:center;color:#999;font-size:12px;margin-top:40px;border-top:1px solid #eee;padding-top:20px;}' +
    '.ref{font-size:12px;color:#999;}' +
    '</style></head><body>' +
    '<div class="header"><h1>Gravyaaard</h1><p>Service Quotation &mdash; Latur, Maharashtra</p></div>' +
    '<p><strong>Reference:</strong> ' + ref + '</p>' +
    '<p><strong>Date:</strong> ' + date + '</p>' +
    '<table><thead><tr><th>Service</th><th style="text-align:right;">Amount (₹)</th></tr></thead><tbody>';

  selected.forEach(function (item) {
    html += '<tr><td>' + item.name + '</td><td style="text-align:right;">₹ ' + item.price.toLocaleString() + '</td></tr>';
  });

  html += '</tbody></table>' +
    '<div class="total">Total: <span>₹ ' + total.toLocaleString() + '</span></div>' +
    '<p style="font-size:13px;color:#666;">* This is a tentative quotation. Final charges may vary based on actual services availed.</p>' +
    '<div class="footer"><p>Gravyaaard &bull; Serving Latur with compassion</p>' +
    '<p class="ref">Emergency: +91 98765 43210 &bull; info@gravyaaard.in</p></div></body></html>';

  var blob = new Blob([html], { type: 'text/html' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'Gravyaaard-Quotation-' + ref + '.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

initCalculator();
