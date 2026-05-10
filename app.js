// Navigation with browser history
function navigateTo(sectionId) {
  document.querySelectorAll('.page').forEach(function(page) {
    page.classList.remove('active');
  });
  var target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
    history.pushState({ section: sectionId }, '', '#' + sectionId);
  }
}

function goBack() {
  history.back();
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(e) {
  document.querySelectorAll('.page').forEach(function(page) {
    page.classList.remove('active');
  });
  if (e.state && e.state.section) {
    document.getElementById(e.state.section).classList.add('active');
  } else {
    document.getElementById('landing').classList.add('active');
  }
  window.scrollTo(0, 0);
});

// Handle direct URL with hash on load
window.addEventListener('DOMContentLoaded', function() {
  var hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    document.querySelectorAll('.page').forEach(function(page) {
      page.classList.remove('active');
    });
    document.getElementById(hash).classList.add('active');
    history.replaceState({ section: hash }, '', '#' + hash);
  } else {
    history.replaceState({ section: 'landing' }, '', window.location.pathname);
  }
});

// Open external links in new tab
function openLink(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

// Play YouTube video inline
function playYouTube(el, videoId) {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0';
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allowfullscreen', 'true');
  iframe.setAttribute('allow', 'autoplay; encrypted-media');
  iframe.style.position = 'absolute';
  iframe.style.inset = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.borderRadius = '12px';
  el.innerHTML = '';
  el.style.backgroundImage = 'none';
  el.appendChild(iframe);
  el.onclick = null;
}
