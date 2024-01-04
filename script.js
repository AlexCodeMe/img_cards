const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ/.,';\\][=-`!@#$%^&*()_+`]'"

let interval = null;

document.querySelector("#btn-one").onmouseover = scramble
document.querySelector("#btn-two").onmouseover = scramble

function scramble(event) {  
    let iteration = 0;
    
    clearInterval(interval);
    
    event.target.dataset.value = "BUTTON"
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * letters.length)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 50);
  }

  document.getElementById('red').addEventListener('click', function() {
    changeColor('red');
  });

  document.getElementById('orange').addEventListener('click', function() {
    changeColor('orange');
  });
  
  document.getElementById('yellow').addEventListener('click', function() {
    changeColor('yellow');
  });
  
  document.getElementById('green').addEventListener('click', function() {
    changeColor('green');
  });
  
  document.getElementById('blue').addEventListener('click', function() {
    changeColor('blue');
  });
  
  document.getElementById('indigo').addEventListener('click', function() {
    changeColor('indigo');
  });
  
  document.getElementById('violet').addEventListener('click', function() {
    changeColor('violet');
  });
  
  document.getElementById('random').addEventListener('click', function() {
    changeColor(randColor());
  });
  
  function changeColor(color) {
    document.body.style.backgroundColor = color;
  }

  function randColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
   