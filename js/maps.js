var locations = [
  {
    name: 'Kabristaan - Peer Haji',
    address: 'Peer Haji Road, Latur',
    type: 'Muslim',
    lat: 18.4025,
    lng: 76.5550,
    info: 'Historic Muslim burial ground near Peer Haji Dargah. Active since 1950.'
  },
  {
    name: 'Kabristaan - Barshi Road',
    address: 'Barshi Road, Latur',
    type: 'Muslim',
    lat: 18.4180,
    lng: 76.5700,
    info: 'Largest Muslim burial ground in Latur. Well-maintained with separate sections.'
  },
  {
    name: 'Shamshan Ghat - Main',
    address: 'Old City, Latur',
    type: 'Hindu',
    lat: 18.3950,
    lng: 76.5600,
    info: 'Primary Hindu cremation ground with electric crematorium and traditional pyre.'
  },
  {
    name: 'Shamshan Ghat - Ausa Road',
    address: 'Ausa Road, Latur',
    type: 'Hindu',
    lat: 18.3800,
    lng: 76.5300,
    info: 'Secondary cremation ground with all basic amenities and ample parking.'
  }
];

var map;
var markers = [];
var infoWindow;

function initMap() {
  if (typeof google === 'undefined' || !google.maps) {
    document.getElementById('map').innerHTML =
      '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--text-muted);padding:2rem;text-align:center;">' +
      '<div style="font-size:3rem;margin-bottom:1rem;">&#x1F5FA;&#xFE0F;</div>' +
      '<h3 style="font-family:Playfair Display,serif;color:var(--text-primary);margin-bottom:0.5rem;">Map Loading</h3>' +
      '<p style="font-size:0.85rem;max-width:400px;">Add your Google Maps API key in maps.html to see interactive locations. Replace <code style="background:var(--bg-card);padding:2px 6px;border-radius:4px;">YOUR_API_KEY</code> with your actual key.</p>' +
      '</div>';
    return;
  }
  var laturCenter = { lat: 18.4045, lng: 76.5550 };

  map = new google.maps.Map(document.getElementById('map'), {
    center: laturCenter,
    zoom: 13,
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#0a0a0a' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#111111' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#a0a0a0' }] },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#1a1a1a' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#666666' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#0d1b2a' }]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ color: '#1a1a1a' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#666666' }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#222222' }]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [{ color: '#111111' }]
      },
      {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#a0a0a0' }]
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'geometry',
        stylers: [{ color: '#0a0a0a' }]
      }
    ],
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  });

  infoWindow = new google.maps.InfoWindow({
    content: '',
    maxWidth: 280
  });

  locations.forEach(function (loc, index) {
    var iconColor = loc.type === 'Muslim' ? '#22c55e' : '#f97316';
    var icon = {
      url: 'data:image/svg+xml,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="48" viewBox="0 0 40 48">' +
        '<path d="M20 0C9 0 0 9 0 20c0 15 20 28 20 28s20-13 20-28C40 9 31 0 20 0z" fill="' + iconColor + '" opacity="0.9"/>' +
        '<circle cx="20" cy="18" r="10" fill="#0a0a0a"/>' +
        '<circle cx="20" cy="18" r="7" fill="' + iconColor + '"/>' +
        '</svg>'
      ),
      scaledSize: new google.maps.Size(36, 44),
      anchor: new google.maps.Point(18, 44)
    };

    var marker = new google.maps.Marker({
      position: { lat: loc.lat, lng: loc.lng },
      map: map,
      title: loc.name,
      icon: icon,
      animation: google.maps.Animation.DROP
    });

    var content = '<div style="background:#1a1a1a;color:#f5f5f5;padding:12px 16px;font-family:Inter,sans-serif;border-radius:8px;border:1px solid rgba(255,255,255,0.06);min-width:200px;">' +
      '<h4 style="margin:0 0 4px;font-size:14px;font-family:Playfair Display,serif;">' + loc.name + '</h4>' +
      '<p style="margin:0 0 4px;font-size:12px;color:#a0a0a0;">' + loc.address + '</p>' +
      '<p style="margin:0 0 6px;font-size:11px;color:#666;">' + loc.info + '</p>' +
      '<span style="display:inline-block;padding:2px 8px;border-radius:50px;font-size:10px;font-weight:500;background:' +
      (loc.type === 'Muslim' ? 'rgba(34,197,94,0.15);color:#22c55e' : 'rgba(249,115,22,0.15);color:#f97316') +
      ';">' + loc.type + '</span>' +
      '<br><a href="https://www.google.com/maps/dir/?api=1&destination=' + loc.lat + ',' + loc.lng +
      '" target="_blank" style="display:inline-block;margin-top:8px;font-size:11px;color:#c9a84c;text-decoration:none;">Get Directions &rarr;</a>' +
      '</div>';

    marker.addListener('click', function () {
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
      highlightLocation(index);
    });

    markers.push(marker);
  });

  // Sidebar click handlers
  document.querySelectorAll('.location-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var id = parseInt(this.dataset.id);
      google.maps.event.trigger(markers[id], 'click');
      map.panTo({ lat: locations[id].lat, lng: locations[id].lng });
      map.setZoom(16);
    });
  });
}

function highlightLocation(index) {
  document.querySelectorAll('.location-item').forEach(function (item) {
    item.classList.remove('active');
  });
  var target = document.querySelector('.location-item[data-id="' + index + '"]');
  if (target) target.classList.add('active');
}
