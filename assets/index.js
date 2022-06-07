var counter = 1;
setInterval(function() {
  document.getElementById('slide' + counter).className = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);