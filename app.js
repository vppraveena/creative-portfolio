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
