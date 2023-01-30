let incrementBtn = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

count = 0;

function increment(){
    count += 1;
    incrementBtn.textContent = count;
}

function save(){
let countStr = count + " - "
    saveEl.textContent += countStr;
    count = 0;
    incrementBtn.textContent = 0;
}


