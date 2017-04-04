var Skeletor = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
};

Skeletor.prototype = Object.create(Dancer.prototype);
Skeletor.prototype.constructor = Skeletor;

Skeletor.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.addClass('Skeletor');





  // this.$node.fadeOut();
	 // $('.Skeletor').on('click', function(event) {
  //   $(this).toggle();
  //   console.log('clicked');
  // });
  
  // $('.Skeletor').on('click', function(event) {
		// $(this).rotate(800);
		// console.log('clicked');
  // });
};


Skeletor.prototype.jqueryMethods = function() {
  var rotation = 0;

	jQuery.fn.rotate = function(degrees) {
    $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
	};

	$('.Skeletor').click(function() {
		console.log('skeletor click')


		
    // rotation += 1020;
    // $(this).rotate(rotation);
	});

};
