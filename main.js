//Step 1...

$(window).on('scroll', function (event){
  var scrollDistance = $(window).scrollTop();

  if (scrollDistance > 50){
    console.log(scrollDistance)
    $('#mainNav').addClass('affix')
  } else {
    $('#mainNav').removeClass('affix')};
});

//Step 2...
$(document).ready(function(){
  $('nav a').on('click', function(event){
    event.preventDefault();
    var target = $(this).attr('href');
    var targetOffset = $(target).offset().top;
    console.log(targetOffset);

    $('html,body').animate({
                 scrollTop: targetOffset
            }, 600);
    });
  });

//Step 3...
$('body').scrollspy({
  target: '#mainNav'
});

//Step 4...


//Step 5

new WOW().init();
