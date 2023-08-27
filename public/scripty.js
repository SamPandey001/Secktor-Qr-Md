var cards = document.getElementsByClassName('card');

Array.prototype.forEach.call(cards, function(el, index, array){  
  el.addEventListener('click', function() {
    el.classList.toggle('flipped');
  });
});