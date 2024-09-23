let display = document.querySelector('.display');
let input = document.querySelector('input');
let form = document.querySelector('form');

let arr = [];


function populate(val) {

    display.innerHTML = "";
    arr.forEach((e, idx) => {
        const pack = document.createElement('div');
        pack.className = 'pack'
        const chip = document.createElement('p');
        chip.innerText = e;
        chip.className = "chip";
        const del = document.createElement('span');
        del.className = 'del';
        del.textContent = "X";
        pack.append(chip, del);
        display.append(pack)

        del.addEventListener('click', () => {
            arr.splice(idx, 1);
            populate(val);
        })

    })
    input.value = ""
    console.log(arr);

}


form.addEventListener('submit', (e) => {

    e.preventDefault();
    const data = input.value;
    data == "" ? null : arr.push(data);

    populate(arr);

})