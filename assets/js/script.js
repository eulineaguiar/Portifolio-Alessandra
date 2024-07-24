const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

const navLinks = document.querySelectorAll('[data-nav-link]');

const articles = document.querySelectorAll('article[data-page]');

const sidebarInfoMore = document.querySelector(".sidebar-info_more");
const infoMoreBtn = document.querySelector('[data-sidebar-btn]');

const contactsList = document.querySelector('.contacts-list');

function toggleContacts() {
  console.log('toggleContacts called');
  if (window.innerWidth <= 768) {
    contactsList.style.display = contactsList.style.display === 'none' ? 'block' : 'none';
  } else {
    contactsList.style.display = 'block';
  }
  console.log(`Contacts list display: ${contactsList.style.display}`);
}

function initializeContactsDisplay() {
  console.log('initializeContactsDisplay called');
  if (window.innerWidth <= 768) {
    contactsList.style.display = 'none';
  } else {
    contactsList.style.display = 'block';
  }
  console.log(`Contacts list display on load: ${contactsList.style.display}`);
}

function setActivePage(page) {
  articles.forEach((article) => {
    if (article.getAttribute('data-page').toLowerCase() === page) {
      article.classList.add('active');
    } else {
      article.classList.remove('active');
    }
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const page = link.textContent.trim().toLowerCase();

    navLinks.forEach((btn) => btn.classList.remove('active'));
    link.classList.add('active');

    setActivePage(page);
  });
});

infoMoreBtn.addEventListener('click', toggleContacts);

initializeContactsDisplay();
setActivePage('sobre');

window.addEventListener('resize', initializeContactsDisplay);
