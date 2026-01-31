const generateBtn = document.getElementById('generate-btn');
const lottoNumbersContainer = document.getElementById('lotto-numbers');
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Function to set the theme
function setTheme(theme) {
  htmlElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  // Update button text based on theme
  themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Set initial theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Default to light theme if no preference is saved
    setTheme('light');
  }
});

// Theme toggle button event listener
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
});


generateBtn.addEventListener('click', () => {
  lottoNumbersContainer.innerHTML = '';
  const numbers = new Set();
  while (numbers.size < 10) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }

  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

  sortedNumbers.forEach(number => {
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('lotto-number');
    numberDiv.textContent = number;
    lottoNumbersContainer.appendChild(numberDiv);
  });
});