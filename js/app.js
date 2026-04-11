// Data e ora
function updateDateTime() {
  const data = new Date().toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
  const ora = new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
  document.getElementById('currentDate').innerText = data;
  document.getElementById('currentUpdate').innerText = 'Aggiornato alle '+ora;
}
updateDateTime();

// Scroll logo
const logo = document.getElementById('mainLogo');
const originalHeight = 60;
const smallHeight = 40;
function handleScroll() {
  if (window.scrollY > 100) {
    logo.style.height = smallHeight + 'px';
  } else if (window.scrollY < 30) {
    logo.style.height = originalHeight + 'px';
  }
}
window.addEventListener('scroll', handleScroll);

// Sidebar
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebarMenu');
const overlay = document.getElementById('overlay');
const closeSidebar = document.getElementById('closeSidebar');

function openSidebar() {
  sidebar.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeSidebarFunc() {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}
if (hamburgerBtn) hamburgerBtn.addEventListener('click', openSidebar);
if (closeSidebar) closeSidebar.addEventListener('click', closeSidebarFunc);
if (overlay) overlay.addEventListener('click', closeSidebarFunc);
