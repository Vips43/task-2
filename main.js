const p = document.querySelector('.p')
const button = document.querySelector('.button')
const btn = document.querySelector('.btn')
const date = document.querySelector('.date')

function changeColor(){
  p.classList.toggle('black')
  button.classList.toggle('black')
}

button.addEventListener('click',()=>{
  changeColor();
})
 btn.addEventListener('click',()=>{
   dateTime();
 })
 
function dateTime() {
    const now = new Date();
    const currentDate = now.toLocaleDateString();
    const currentTime = now.toLocaleTimeString();
    const value = `Thanks for clicking me <br/><br/> Current date: ${currentDate} <br/>
    Current time: ${currentTime}`
    date.innerHTML = value
}





function sum(){
  let fnum = document.getElementById('fnum').value;
  let snum = document.getElementById('snum').value;
  let sum = document.querySelector('.sum')
  let total = parseInt(fnum) + parseInt(snum)
  
  sum.innerText = total
  
}