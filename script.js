const intro = document.getElementById('intro');
const portfolio = document.getElementById('portfolio');
const enterButton = document.getElementById('enterButton');
const skipIntro = document.getElementById('skipIntro');
let entered = false;

function enterPortfolio() {
  if (entered) return;
  entered = true;
  intro.classList.add('opening');
  window.setTimeout(() => {
    intro.classList.add('leaving');
    portfolio.classList.add('visible');
    portfolio.setAttribute('aria-hidden', 'false');
    window.setTimeout(() => {
      intro.style.display = 'none';
      portfolio.classList.add('revealed');
      document.getElementById('home').setAttribute('tabindex', '-1');
    }, 750);
  }, 950);
}
enterButton.addEventListener('click', enterPortfolio);
skipIntro.addEventListener('click', () => {
  if (entered) return;
  entered = true;
  intro.style.display = 'none';
  portfolio.classList.add('visible', 'revealed');
  portfolio.setAttribute('aria-hidden', 'false');
});
