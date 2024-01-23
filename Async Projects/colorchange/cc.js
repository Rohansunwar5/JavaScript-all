//generate a random color 

const randomColor = () => {
  let hex = "0123456789ABCDEF"
  let color = "#";
  for(let i =0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)]
  }
  return color;
} 

let interval;
const changeColor = () => {
  if(!interval){

    interval = setInterval(bg,1000);
  }
  function bg (){
    document.body.style.backgroundColor = randomColor();
  }
}


document.querySelector('#start').addEventListener('click', changeColor);
document.querySelector('#stop').addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
});


