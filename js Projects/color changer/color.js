const buttons = document.querySelectorAll('.color');
const body = document.querySelector('body');

buttons.forEach(button => {
  console.log(button);
  button.addEventListener('mouseover', (e) => {
    console.log(e);
    console.log(e.target);
    if(e.target.id=== 'blue'){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id=== 'red'){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id=== 'pink'){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id=== 'purple'){
      body.style.backgroundColor= e.target.id;
    }
  })
});