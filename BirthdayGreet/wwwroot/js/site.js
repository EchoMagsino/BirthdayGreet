// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

    let hasPlayed = false;


    function playOnce() {
    if (!hasPlayed) {
      const audio = document.getElementById('myAudio');
    audio.play();
    hasPlayed = true;
    }
}

//The fire will be gone after clicking the button, but it has 4 seconds timer.

document.getElementById("fire").addEventListener("click", function () {
    const flame = document.querySelector(".fire");
    setTimeout(function () {
        flame.style.display = "none";
    }, 7000); // 4000 milliseconds = 4 seconds
});


//script for the buttons connecting to text area

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("fire");
    const textArea = document.getElementById("text-area");

    button.addEventListener("click", function () {
        const wish = textArea.value;
        localStorage.setItem("userWish", wish);  // This saves it locally
        alert("Your wish has been saved! now blow me(I mean your candle) 🎉");
    });
});

//invisible button needs to click 3x to work

let clickCount = 0;
const button = document.getElementById("wishButton");

button.addEventListener("click", function () {
    clickCount++;
    if (clickCount >= 5) {
        alert(localStorage.getItem("userWish"));
    }
});
