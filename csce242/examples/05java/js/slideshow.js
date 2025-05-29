
setInterval(()=>{
    const currentSlide = document.querySelector("#slideshow :not(.hidden)");
    console.log(currentSlide);
    let nextSlide = currentSlide.nextElementSibling;

    if(nextSlide == null) {
        nextSlide = document.querySelector("#slideshow :first-child");
    }

    //make current one show hidden one
    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
}, 1000);

