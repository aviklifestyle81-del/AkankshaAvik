
const slides = document.querySelectorAll(".slide");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const pageNumber = document.getElementById("pageNumber");

let currentSlide = 0;

// Show selected screen

function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

    currentSlide = index;

    pageNumber.textContent =
        `0${currentSlide + 1} / 06`;

    prevBtn.disabled = currentSlide === 0;

    if (currentSlide === slides.length - 1) {
        nextBtn.textContent = "Read Again ↺";
    } else {
        nextBtn.textContent = "Continue →";
    }
}

// Next button

nextBtn.addEventListener("click", () => {

    if (currentSlide === slides.length - 1) {

        showSlide(0);

    } else {

        showSlide(currentSlide + 1);

    }

});

// Back button

prevBtn.addEventListener("click", () => {

    if (currentSlide > 0) {

        showSlide(currentSlide - 1);

    }

});

// Swipe functionality

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (event) => {

    touchStartX = event.changedTouches[0].screenX;

});

document.addEventListener("touchend", (event) => {

    touchEndX = event.changedTouches[0].screenX;

    let difference = touchStartX - touchEndX;

    if (Math.abs(difference) > 60) {

        if (difference > 0) {

            if (currentSlide < slides.length - 1) {
                showSlide(currentSlide + 1);
            }

        } else {

            if (currentSlide > 0) {
                showSlide(currentSlide - 1);
            }

        }

    }

});

// Floating hearts animation

const heartContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("heart");

    heart.innerHTML = "♥";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (Math.random() * 15 + 10) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 6) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 11000);

}

setInterval(createHeart, 700);

// Initial screen

showSlide(0);
