let iniciar = document.getElementById("iniciar");
        iniciar.addEventListener("click",function(){
            console.log("foi")
            document.getElementById("page2").style.display="block";
            document.getElementById("page1").style.display="none";
        });

let timeInSeconds = 30;
const timerElement = document.getElementById("timer");

function updateTimer () {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    timerElement.textContent =
      `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeInSeconds > 0) {
        timeInSeconds--;
        setTimeout(updateTimer, 1000);
    } else {
        alert("Tempo esgotado");
    }
}

window.onload = updateTimer;

let acertos = 0;
const limeteAcertos = 3;
const contador = document.getElementById("acertos");
const bandeiras = document.querySelectorAll("#flags img");

bandeiras.forEach(bandeira => {
    bandeira.addEventListener("click", () => {
        if (bandeira.classList.contains("clicado")) return;

        bandeira.classList.add("clicado");

        const correta = bandeira.getAttribute("data-correct") === "true";

        if (correta) {
            acertos++;
            contador.textContent = `${acertos}/${limiteAcertos}`;
        }

        if (acertos === limeteAcertos) {
            alert("Você acertou 3 bandeiras!");
        }
    })
})