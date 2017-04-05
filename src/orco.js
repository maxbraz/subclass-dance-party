var Orco = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
};

Orco.prototype = Object.create(Dancer.prototype);
Orco.prototype.constructor = Orco;

Orco.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.addClass('Orco');
  this.$node.toggle();
  var rotation = 0;

  jQuery.fn.rotate = function(degrees) {
    $(this).css({
      '-webkit-transform': 'rotate('+ degrees + 'deg)',
      '-moz-transform': 'rotate('+ degrees + 'deg)',
      '-ms-transform': 'rotate('+ degrees + 'deg)',
      'transform': 'rotate('+ degrees +' deg)'});
    return $(this);
  };

  $('.Orco').on('mouseover', function() {
    rotation += 180;
    $(this).rotate(rotation);
  });
};