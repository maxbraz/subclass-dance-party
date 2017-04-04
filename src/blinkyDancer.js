var BlinkyDancer = function(top, left, timeBetweenSteps) {
  console.log('hi dere');
  Dancer.call(this, top, left, timeBetweenSteps);

  // this.step();
  // this.oldStep = this.step;
  //random change
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // console.log('before old step')
  // console.log('old step!', this.oldStep);
};


BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  console.log("blinkydance 22", this)
  // Daner.step();
  // this.step();
  console.log('how many times to we toggle')


  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // console.log("$node", this.$node)
  this.$node.toggle();
};