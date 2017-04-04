describe('skeletor', function() {

  var skeletor, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    skeletor = new Skeletor(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(skeletor.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(skeletor.$node, 'toggle');
    skeletor.step();
    expect(skeletor.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(skeletor, 'step');
      expect(skeletor.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(skeletor.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(skeletor.step.callCount).to.be.equal(2);
    });
  });
});