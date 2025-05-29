document.getElementById('drawButton').onclick = function() {
    const housesContainer = document.getElementById('houses');
    housesContainer.innerHTML = ''; 

    for (let i = 0; i < 6; i++) {
        const house = document.createElement('div');
        house.className = 'house';

        const door = document.createElement('div');
        door.className = 'door';

        house.appendChild(door);
        housesContainer.appendChild(house);
    }

    document.getElementById('stickPerson').style.display = 'block';
};

  let exerciseInterval;

document.getElementById('exerciseButton').onclick = function() {
    const slides = document.querySelectorAll("#slides img");
    let currentIndex = 0;

    
    slides.forEach((img, index) => {
        img.classList.add("hidden");
    });
    slides[0].classList.remove("hidden");

   //start slideshow
    exerciseInterval = setInterval(() => {
        slides[currentIndex].classList.add("hidden");
        currentIndex++;

        if (currentIndex >= slides.length) {
            clearInterval(exerciseInterval);
            return;
        }

        slides[currentIndex].classList.remove("hidden");
    }, 1000); 
};