// Deklarasi Variabel
const container = document.querySelector(".container");
const userInput = document.querySelector(".user-input");
const tombolGantiWarna = document.querySelector(".user-color");
const tombolWarnaAcak = document.querySelector(".random-color");

tombolGantiWarna.addEventListener("click", function () {
    let value = userInput.value;
    document.body.style.backgroundColor = value;
    userInput.value = ""
    userInput.setAttribute("placeholder", "Masukkan kode warna")
})

// warna acak

function warnaAcak() {
    let red = Math.floor(Math.random() * 255) + 1
    let green = Math.floor(Math.random() * 255) + 1
    let blue = Math.floor(Math.random() * 255) + 1

    document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`

    userInput.value = document.body.style.backgroundColor;
}

tombolWarnaAcak.addEventListener("click", function () {
    warnaAcak()
})

// slider
const slider = document.querySelectorAll(".slider");
const merah = document.querySelector("input[id=red-range");
const green = document.querySelector("input[id=green-range");
const blue = document.querySelector("input[id=blue-range");

merah.addEventListener("input", function (e) {
    r = e.target.value;
    g = green.value;
    b = blue.value;
    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b})`
    userInput.value = document.body.style.backgroundColor;

})

green.addEventListener("input", function (e) {
    r = merah.value;
    g = green.value;
    g = e.target.value;
    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b})`
    userInput.value = document.body.style.backgroundColor;
})

blue.addEventListener("input", function (e) {
    r = merah.value;
    g = green.value;
    b = e.target.value;
    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b})`
    userInput.value = document.body.style.backgroundColor;
})

// copied to clipboard