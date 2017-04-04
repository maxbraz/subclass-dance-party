describe('orco', function() {

  var orco, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    orco = new Orco(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(orco.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(orco.$node, 'toggle');
    orco.step();
    expect(orco.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(orco, 'step');
      expect(orco.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(orco.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(orco.step.callCount).to.be.equal(2);
    });
  });
});