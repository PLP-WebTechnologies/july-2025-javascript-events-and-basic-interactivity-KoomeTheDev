// ==== Light/Dark Mode Toggle ====
const modeToggleBtn = document.getElementById('mode-toggle');
modeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ==== Cart Counter for Menu Items ====
const menuItems = document.querySelectorAll('.menu-item');
const cartCountSpan = document.getElementById('cart-count');
let cartCount = 0;

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    cartCount++;
    cartCountSpan.textContent = cartCount;
    alert(`Added "${item.dataset.name}" to your cart!`);
  });
});

// ==== FAQ Collapsible ====
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    answer.classList.toggle('hidden');
  });
});

// ==== Contact Form Validation ====
const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  e.preventDefault(); // Prevent page reload

  clearErrors();
  document.getElementById('form-success').textContent = '';

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  let isValid = true;

  // Name: required, min 2 chars
  if (nameInput.value.trim().length < 2) {
    showError('name-error', 'Please enter your name (at least 2 characters).');
    isValid = false;
  }

  // Email: basic regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    showError('email-error', 'Please enter a valid email address.');
    isValid = false;
  }

  // Message: required, min 10 chars
  if (messageInput.value.trim().length < 10) {
    showError('message-error', 'Message should be at least 10 characters.');
    isValid = false;
  }

  if (isValid) {
    document.getElementById('form-success').textContent = 'Thank you for reaching out! We will get back to you soon.';
    form.reset();
  }
});

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
}
