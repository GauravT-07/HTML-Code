const img = document.querySelector("img");

console.log(img)

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

img.addEventListener("click", () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
});