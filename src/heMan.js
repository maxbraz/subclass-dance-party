var HeMan = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
};

HeMan.prototype = Object.create(Dancer.prototype);
HeMan.prototype.constructor = HeMan;

HeMan.prototype.step = function() {
  Dancer.prototype.step.call(this);
  
  this.$node.addClass('HeMan')
  // this.$node.toggle();
};