var Skeletor = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
};

Skeletor.prototype = Object.create(Dancer.prototype);
Skeletor.prototype.constructor = Skeletor;

Skeletor.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};