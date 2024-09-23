const display = document.querySelector('.display');
const increase = document.querySelector('.inc');
const decrease = document.querySelector('.dec');
const resetVal = document.querySelector('.res');
const diffVal = document.querySelector('input');


let count = 0;

function update() {
    display.innerText = count;
}

function addition() {
    const space = diffVal.value;
    count = count + Number(space);
    update();
    // console.log(count, space);
}

// console.log(space);

function subtraction() {
    const space = diffVal.value;
    count = count - Number(space);
    update();
    // console.log(count);
}

increase.addEventListener('click', addition)
decrease.addEventListener('click', subtraction)

resetVal.addEventListener('click', () => {
    count = 0;
    diffVal.value = "";
    update();
})