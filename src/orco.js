var Orco = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
};

Orco.prototype = Object.create(Dancer.prototype);
Orco.prototype.constructor = Orco;

Orco.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};