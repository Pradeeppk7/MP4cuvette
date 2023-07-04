let inputSlider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let uppercase = document.getElementById("Uppercase");
let lowercase = document.getElementById("Lowercase");
let numbers = document.getElementById("Numbers");
let symbols = document.getElementById("Symbols");
let generator = document.getElementById("generator");
let copyid = document.querySelector("#copyit");
let box1 = document.querySelector('.one');
let box2 = document.querySelector('.two');
let box3 = document.querySelector('.three');
let box4 = document.querySelector('.four');

slidervalue.innerText = inputSlider.value;
inputSlider.addEventListener('input', () => {
    slidervalue.innerText = inputSlider.value;
});

function strengthgen() {
    let val=0;
    val += lowercase.checked? 1: 0;
    val += uppercase.checked? 1: 0;
    val += numbers.checked? 1: 0;
    val += symbols.checked ? 1 : 0;
    if (inputSlider.value < 4) {
        
    }
    else if (inputSlider.value > 3 && inputSlider.value < 7) {
        val += 1;
    }
    else if (inputSlider.value > 6 && inputSlider.value < 10) {
        val += 3;
    }
    else if (inputSlider.value == 10) {
        val += 4;
    }
    if (val < 2) {
        
    }
    else if (val == 2) {
        box1.style.backgroundColor = "#A4FFAF";
        
    }
    else if (val > 2 && val < 6) {
        box1.style.backgroundColor = "#A4FFAF";
        box2.style.backgroundColor = "#A4FFAF";
    }
    else if (val > 5 && val < 8) {
        box1.style.backgroundColor = "#A4FFAF";
        box2.style.backgroundColor = "#A4FFAF";
        box3.style.backgroundColor = "#A4FFAF";
    }
    else if (val ==8) {
        box1.style.backgroundColor = "#A4FFAF";
        box2.style.backgroundColor = "#A4FFAF";
        box3.style.backgroundColor = "#A4FFAF";
        box4.style.backgroundColor = "#A4FFAF";
    }
    
}

function strengthreset() {
    box1.style.backgroundColor = "";
    box2.style.backgroundColor = "";
    box3.style.backgroundColor = "";
    box4.style.backgroundColor = "";
    
}

generator.addEventListener('click', () => {
    strengthgen();
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