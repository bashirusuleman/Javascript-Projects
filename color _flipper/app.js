const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//Add EventListener
btn.addEventListener('click', ()=>{
    document.body.style.backgroundColor = colors[getRandom()];
    color.textContent = colors[getRandom()];
})

//Generate a random number between 0 and length of colors
function getRandom(){
    return Math.floor(Math.random() * colors.length);
}