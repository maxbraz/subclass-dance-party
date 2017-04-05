var killCount = 0;

var Skeletor = function(top, left, timeBetweenSteps) {
  $('.HeMan').animate({
    left: left, 
    top: top
  }, 6000);
  Dancer.apply(this, arguments);
};

Skeletor.prototype = Object.create(Dancer.prototype);
Skeletor.prototype.constructor = Skeletor;

Skeletor.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.addClass('Skeletor');
  this.$node.fadeOut({duration: 5000});
  var rotation = 0;

  jQuery.fn.rotate = function(degrees) {
    $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
  };

  $('.Skeletor').on('click', function(event) {
    $(this).rotate(800);
    killCount = 1;
    $('.killCount').text(killCount);
  });
};