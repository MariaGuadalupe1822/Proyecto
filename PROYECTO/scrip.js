
document.addEventListener('DOMContentLoaded', function() {
  var app = document.getElementById('typewriter');

  var typewriter = new Typewriter(app, {
    loop: true
  });

  typewriter.typeString('Victor Hugo Bahena Guzman')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Un gran amigo y escritor')
    .pauseFor(2500)
    .start();
});





  
  
  