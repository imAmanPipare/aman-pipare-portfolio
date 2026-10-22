const PORTFOLIO_EMAIL = 'amanpiparex92@gmail.com';
const validThemes = ['editorial', 'signal', 'terminal', 'brutalist', 'grove', 'amber', 'mono'];
const themeButtons = document.querySelectorAll('[data-set-theme]');
const themeColor = document.querySelector('meta[name="theme-color"]');

function setTheme(theme, save = true) {
  const selected = validThemes.includes(theme) ? theme : 'editorial';
  document.body.dataset.theme = selected;
  themeButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.setTheme === selected));
  });
  if (themeColor) {
    themeColor.content = selected === 'signal' || selected === 'terminal' ? '#101a24' :
      selected === 'brutalist' ? '#f5c94f' : selected === 'grove' ? '#e7eee5' :
      selected === 'amber' ? '#f4e6d7' : selected === 'mono' ? '#e5e5e0' : '#f4f2ec';
  }
  if (save) {
    try { localStorage.setItem('aman-portfolio-theme', selected); } catch { /* Local preview still works when storage is blocked. */ }
  }
}

let savedTheme = 'editorial';
try { savedTheme = localStorage.getItem('aman-portfolio-theme') || 'editorial'; } catch { /* Use the default theme. */ }
setTheme(savedTheme, false);
themeButtons.forEach((button) => {
  button.addEventListener('click', () => setTheme(button.dataset.setTheme));
});

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const formData = new FormData(contactForm);
    const subject = encodeURIComponent(`Portfolio note from ${formData.get('name')}`);
    const body = encodeURIComponent(`Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`);
    document.querySelector('#form-note').textContent = 'Your email app is opening with your message ready.';
    window.location.href = `mailto:${PORTFOLIO_EMAIL}?subject=${subject}&body=${body}`;
  });
}
