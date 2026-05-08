// Navigation
function navigateTo(sectionId) {
  document.querySelectorAll('.page').forEach(function(page) {
    page.classList.remove('active');
  });
  var target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
}

function goBack() {
  document.querySelectorAll('.page').forEach(function(page) {
    page.classList.remove('active');
  });
  document.getElementById('landing').classList.add('active');
  window.scrollTo(0, 0);
}

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
