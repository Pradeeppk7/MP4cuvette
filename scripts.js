let inputSlider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let uppercase = document.getElementById("Uppercase");
let lowercase = document.getElementById("Lowercase");
let numbers = document.getElementById("Numbers");
let symbols = document.getElementById("Symbols");
let generator = document.getElementById("generator");
let copyid = document.querySelector("#copyit");

slidervalue.innerText = inputSlider.value;
inputSlider.addEventListener('input', () => {
    slidervalue.innerText = inputSlider.value;
});

generator.addEventListener('click', () => {
    passbox.value = generatPassword();
});


let UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LC = "abcdefghijklmnopqrstuvwxyz";
let num = "1234567890";
let sym="~!@#$%^&*?"
function generatPassword() {
    let password = "";
    let allChar = "";
    allChar += lowercase.checked?LC: "";
    allChar += uppercase.checked?UC: "";
    allChar +=numbers.checked?num: "";
    allChar += symbols.checked ? sym : "";
    for (let i = 1; i <= inputSlider.value; i++){
        password += allChar[(Math.floor(Math.random()*allChar.length))];
    }
    return password;
}

copyid.addEventListener('click', () => {
    navigator.clipboard.writeText(passbox.value);
    copyid.title = "Password Copied";
})