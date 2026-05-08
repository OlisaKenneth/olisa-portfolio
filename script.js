// === OK SCROLL INDICATOR ===
const scrollOK = document.createElement('div');
scrollOK.id = 'scroll-ok';

const bgText = document.createElement('div');
bgText.id = 'scroll-ok-bg';
bgText.textContent = 'OK';

const fillDiv = document.createElement('div');
fillDiv.id = 'scroll-ok-fill';

const fillText = document.createElement('span');
fillText.textContent = 'OK';
fillDiv.appendChild(fillText);

scrollOK.appendChild(bgText);
scrollOK.appendChild(fillDiv);
document.body.appendChild(scrollOK);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    fillDiv.style.height = progress + '%';
});