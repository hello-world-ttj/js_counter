let count = document.getElementById('count');
let counter = 0;
let savedCount = document.getElementById('savedCount');
function countInc() {
    counter += 1;
    console.log(counter);
    count.textContent = counter;
}

function countDec() {
    counter -= 1;
    console.log(counter);
    count.textContent = counter;
}

function saveCount() {
    savedCount.textContent += counter +',';
}