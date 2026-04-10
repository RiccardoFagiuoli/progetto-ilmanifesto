const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebarMenu');
const overlay = document.getElementById('overlay');
const closeSidebar = document.getElementById('closeSidebar');
const logo = document.getElementById('mainLogo');
const originalHeight = 60;   // altezza originale in pixel
const smallHeight = 40;      // altezza ridotta durante lo scroll
let isSmall = false;  // tiene traccia dello stato attuale
const threshold = 100;  // soglia di scroll
const hysteresis = 10;  // zona morta per evitare tremolio (10px)

function handleScroll() {
  const scrollY = window.scrollY;
  if (scrollY > threshold + hysteresis && !isSmall) {
    logo.style.height = smallHeight + 'px';
    isSmall = true;
  } else if (scrollY < threshold - hysteresis && isSmall) {
    logo.style.height = originalHeight + 'px';
    isSmall = false;
  }
}
// Ascolta l'evento scroll
window.addEventListener('scroll', handleScroll);

function updateDateTime() {
  document.getElementById('currentDate').innerText = new Date().toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
  const ora = new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
  document.getElementById('currentUpdate').innerText = 'Aggiornato alle ' + ora;
}

updateDateTime();

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

hamburgerBtn.addEventListener('click', openSidebar);
closeSidebar.addEventListener('click', closeSidebarFunc);
overlay.addEventListener('click', closeSidebarFunc);
