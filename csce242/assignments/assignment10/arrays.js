document.addEventListener("DOMContentLoaded", function () {
    const images = {
        "Birthday": "images/birthday.jpg",
        "Clown": "images/clown.jpg",
        "It's Raining": "images/rain.jpg",
        "Read": "images/read.jpg",
        "Shovel": "images/shovel.jpg",
        "Work": "images/work.jpg"
    };

    const container = document.querySelector('.image-grid');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupImg = document.getElementById('popup-img');
    const closeBtn = document.getElementById('close');

    for (const [title, src] of Object.entries(images)) {
        const div = document.createElement('div');
        div.classList.add('image-container');

        const img = document.createElement('img');
        img.src = src;
        img.alt = title;

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.innerText = title;

        // Add click event to show popup
        div.addEventListener('click', function () {
            popupTitle.innerText = title;
            popupImg.src = src;
            popupImg.alt = title;
            popup.style.display = 'block';
        });

        div.appendChild(img);
        div.appendChild(overlay);
        container.appendChild(div);
    }

    // Close popup when clicking the close button
    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});