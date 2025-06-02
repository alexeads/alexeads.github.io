// Switch between exercises
document.getElementById('exercise1Btn').addEventListener('click', function() {
    document.getElementById('speeding').style.display = 'block';
    document.getElementById('pictureChooser').style.display = 'none';
});

document.getElementById('exercise2Btn').addEventListener('click', function() {
    document.getElementById('pictureChooser').style.display = 'block';
    document.getElementById('speeding').style.display = 'none';
});

// Exercise 1: Speeding
let animationId;
const bike = document.getElementById('biker');
const goBtn = document.getElementById('goBtn');
const stopBtn = document.getElementById('stopBtn');
const speedRange = document.getElementById('speedRange');

goBtn.addEventListener('click', function() {
    let speed = 1000 - (speedRange.value * 100);
    let position = 0;
    clearInterval(animationId);

    animationId = setInterval(() => {
        if (position >= 100) {
            position = 0;
        } else {
            position++;
        }
        bike.style.left = position + '%';
    }, speed / 10);
});

stopBtn.addEventListener('click', function() {
    clearInterval(animationId);
});

// Exercise 2: CSS Art
const artDisplay = document.getElementById('artDisplay');
const artButtons = document.querySelectorAll('.artBtn');

artButtons.forEach(button => {
    button.addEventListener('click', function() {
        const artType = this.getAttribute('data-art');
        artDisplay.className = 'artDisplay';
        if (artType === 'moon') {
            artDisplay.classList.add('moon');
        } else if (artType === 'star') {
            artDisplay.classList.add('star');
        } else if (artType === 'cloud') {
            artDisplay.classList.add('cloud');
        }
    });
});