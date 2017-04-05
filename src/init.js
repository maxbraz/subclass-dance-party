$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random() *.8,
      $("body").width() * Math.random() *.8,
      Math.random() * 1000
    );
    // dancer.$node.addClass(dancerMakerFunctionName);
    dancer.$node.addClass('dancer');
    dancer.$node.attr('src', dancerMakerFunctionName + '.gif')
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });

  $('#lineup').on('click', function(event) {
    var newHeight = $("body").height()/2 -100;
    var hSpace = ($("body").width()/ (window.dancers.length+1));
    var currentX = 50;
    // console.log($("body").width())
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].animate({left: currentX}, 1000);
      console.log(currentX);
      currentX += hSpace;
      window.dancers[i].animate({top: newHeight}, 1000);
    }



    // $(this).toggle();
    // console.log('clicked');
  });

  // console.log(window.dancers)
});

