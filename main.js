const section1 = document.querySelector('.section-1')
const colorBtn = document.querySelector('.colorBtn')
const section = document.querySelector('.section') 
const result = document.querySelector('.result')
const dtBtn = document.querySelector('.DTbtn')
const showDateTime = document.querySelector('.showDateTime')

function changeColor(){
  section1.classList.toggle('black')
  

  document.querySelector('body').classList.toggle('black')
  document.querySelector('.section-2').classList.toggle('black')
  document.querySelector('.section-3').classList.toggle('black')
  document.querySelectorAll('button').forEach((e)=>{
    e.classList.toggle('black')
  })
  
}

colorBtn.addEventListener('click',()=>{
  changeColor();
})
 dtBtn.addEventListener('click',()=>{
   dateTime();
 })
 
function dateTime() {
    const now = new Date();
    const currentDate = now.toLocaleDateString();
    const currentTime = now.toLocaleTimeString();
    const value = `Thanks for clicking me <br/><br/> Current date: ${currentDate} <br/>
    Current time: ${currentTime}`
    showDateTime.innerHTML = value
}

function total(){
  let fnum = document.getElementById('fnum').value;
  let snum = document.getElementById('snum').value;
  let sum = document.querySelector('.sum')
  let total = parseInt(fnum) + parseInt(snum)
  
  sum.innerText = total
  
}