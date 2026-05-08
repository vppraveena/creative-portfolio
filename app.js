// Navigation
function navigateTo(sectionId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
}

function goBack() {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById('landing').classList.add('active');
  window.scrollTo(0, 0);
}
