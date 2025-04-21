let prodCost = document.querySelector('.cost');
let finalCost = document.querySelector('.finalCost');
let btn = document.querySelector('.js-subscribe');
let clicked = JSON.parse(localStorage.getItem('clicked')) || false;

function keyUp(event) {
    let name = document.querySelector('.hi').value;
    document.querySelector('.msg').innerText = `Welcome  ${name} `;
}
function nameWelcome(event) {

    if (event.key === 'Enter') {
        let name = document.querySelector('.hi').value;
        document.querySelector('.msg').innerHTML = `Welcome ${name} `;
    }
}

console.log(btn);
console.log(clicked);
if (clicked) {
    btn.innerText = 'Subscribed';
    btn.classList.add('is-subscribed');
}
function subscribeBtn() {
    clicked === false ? clicked = true : clicked = false;
    if (clicked) {
        btn.innerText = 'Subscribed';
        btn.classList.add('is-subscribed');
    }
    else {
        btn.innerText = 'Subscribe';
        btn.classList.remove('is-subscribed');
    }
    console.log(btn);
    console.log(clicked);
    // localStorage.setItem('btn', JSON.stringify(btn));
    localStorage.setItem('clicked', JSON.stringify(clicked));
}
function handleCostKey(event) {
    // console.log(event.key);
    if (event.key === 'Enter') {
        calculateCost();
    }
}
function calculateCost() {
    let c = Number(prodCost.value);
    console.log(finalCost);
    c <= 40 ? finalCost.innerHTML = `$ ${c + 10}` : finalCost.innerHTML = `$ ${c}`;
    console.log(c);
}
