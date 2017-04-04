var HeMan = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
};

HeMan.prototype = Object.create(Dancer.prototype);
HeMan.prototype.constructor = HeMan;

HeMan.prototype.step = function() {
  Dancer.prototype.step.call(this);
  
  this.$node.addClass('HeMan')
  // var newLeft = typeof this.$node.css('left').slice(0, 1)//.slice(0, 8)) + 100;
  // console.log(newLeft);
  // console.log(this.$node.css('left'))
  // this.$node.css('left', 0);
  
};

HeMan.prototype.jqueryMethods = function() {
  $('.HeMan').click(function(event) {
    $(this).toggle();
    console.log('clicked');
  });
};