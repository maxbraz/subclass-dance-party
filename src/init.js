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
    console.log(newHeight);
    for (var i = 0; i < window.dancers.length; i++) {
      console.log(window.dancers[i]);
      window.dancers[i].animate({top: newHeight}, 1000);
    }
    // $(this).toggle();
    console.log('clicked');
  });

  console.log(window.dancers)
});

