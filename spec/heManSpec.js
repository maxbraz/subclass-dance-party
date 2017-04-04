describe('heMan', function() {

  var heMan, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    heMan = new HeMan(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(heMan.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(heMan.$node, 'toggle');
    heMan.step();
    expect(heMan.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(heMan, 'step');
      expect(heMan.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(heMan.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(heMan.step.callCount).to.be.equal(2);
    });
  });
});