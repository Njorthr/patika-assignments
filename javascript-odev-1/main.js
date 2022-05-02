const inputDiv = document.querySelector(".input"),
    inputName = document.querySelector("#name-input"),
    button = document.querySelector(".btn"),
    greeting = document.querySelector(".greeting"),
    time = document.querySelector(".time"),
    text = document.querySelector(".text"),
    hiddenDiv = document.querySelector(".hidden");

button.addEventListener("click", mainFunc);

if (inputName) {
    window.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            mainFunc()
        }
    })
}
function mainFunc() {
    if(inputName.value == "") return
    const name = inputName.value;
    inputDiv.style.display = "none";
    greeting.innerHTML = `Merhaba, <strong>${name}!</strong> Hoşgeldin!`
    showTime()
    time.innerHTML
    hiddenDiv.style.display = "block";
}
const haftagunleri = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
const showTime = () => {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
        day = today.getDay();

    // Output Time

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} <span>${haftagunleri[day]}</span>`;

    setTimeout(showTime, 1000);
}
const addZero = n => (parseInt(n, 10) < 10 ? "0" : "") + n;
