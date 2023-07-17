document.getElementById("start").addEventListener("click", function () {
  addsound();
    const first = Math.floor(Math.random() * 6) + 1;
    const second = Math.floor(Math.random() * 6) + 1;
    document.getElementById("first").src = `image/${first}.png`;
    document.getElementById("second").src = `image/${second}.png`;
    if (first > second) {
      document.querySelector("h1").textContent = "👸🏻Player 1 wins👸🏻";
    } else if (first < second) {
      document.querySelector("h1").textContent = "🧚🏻‍♂️Player 2 wins🧚🏻‍♂️";
    } else {
      document.querySelector("h1").textContent = "🥺Oops! It's a DRAW🥺";
    }
})
function addsound(){
  let audio = new Audio("image/sound.mp3"); //for sound
  audio.play();
}


