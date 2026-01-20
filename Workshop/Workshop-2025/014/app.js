function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const btnRoll = document.querySelector(".roll");

const kauliukas = [
    "&#9856;",
    "&#9857;",
    "&#9858;",
    "&#9859;",
    "&#9860;",
    "&#9861;"
];
function jeronimo() {
    const skaicius = rand(1, 6);
    document.querySelector(".image").innerHTML = kauliukas[skaicius - 1];
    document.querySelector("span").innerText = skaicius;
}

btnRoll.addEventListener("click", jeronimo);
