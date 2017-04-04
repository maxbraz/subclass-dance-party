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
  });

  $('#lineup').on('click', function(event) {
    $(this).toggle();
    console.log('clicked');
  });

  $('.HeMan').on('click', function(event) {
    $(this).toggle();
    console.log('clicked');
  });

  $('.dancer').on('click', function(event) {
    $(this).toggle();
    console.log('clicked');
  });


});

