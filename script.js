const text = "Happy Birthday My Piggy Pookie Bachi";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 80);
    } else {
        showCake();
    }
}

function showCake() {
    document.getElementById("cake").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("gift").classList.remove("hidden");
    }, 2000);
}

document.addEventListener("click", function () {
    document.getElementById("final").classList.remove("hidden");
});

typeEffect(); ";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 80);
    } else {
        showCake();
    }
}

function showCake() {
    document.getElementById("cake").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("gift").classList.remove("hidden");
    }, 2000);
}

document.addEventListener("click", function () {
    document.getElementById("final").classList.remove("hidden");
});

typeEffect();
