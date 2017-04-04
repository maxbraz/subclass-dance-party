var Dancer = function(top, left, timeBetweenSteps) {
  this.left = left;
  this.top = top;
  this.timeBetweeenSteps = timeBetweenSteps;
  this.$node = this.$node || $('<span class="dancer"></span>');

  this.step();

  this.setPosition(top, left);
};


Dancer.prototype.step = function() {

  setTimeout(() => {
    this.step()
  }, this.timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};
