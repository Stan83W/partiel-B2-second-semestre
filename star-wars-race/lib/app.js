// Implémentez votre code ci-dessous :
let p1 = 0;
let p2 = 0;

function victory() {
  if (p1 == 12) {
    alert("Rebels Wins");
    location.reload();
  } if (p2 == 12) {
    alert("Empire Wins");
    location.reload();
  }
};

document.addEventListener("keyup", (e) => {
  if (e.key == "a") {
    p1 += 1;
    victory();
    const player1 = document.querySelector("#player1_race td.active");
    player1.nextElementSibling.classList.add("active");
    player1.classList.remove("active");
  } if (e.key == "p") {
    p2 += 1;
    victory();
    const player2 = document.querySelector("#player2_race td.active");
    player2.nextElementSibling.classList.add("active");
    player2.classList.remove("active");
  }
});

const restart = document.getElementById("button-restart");
restart.addEventListener("click", (e) => {
  location.reload();
});




