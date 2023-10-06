const form = document.querySelector('.form')
const inputs = document.getElementsByTagName('input');
const btn = document.querySelector('.btn');
const value = inputs.value;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(value);
})