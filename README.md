# jQuery Landing Page

- For this project we will be using the attached front end to enhance it with jQuery.
- Step 1: Add the class "affix" to the nav element when the scroll distance reaches past 50 pixels.

USE .addClass() and .scrollTop()

var scrollDistance = $(window).scrollTop();

if scroll distance > 50 then addClass "affix"
  else removeClass "affix"

- Step 2: When the navbar links are clicked, animate a page scroll down to that anchor.

reference the previous lab, use .attr and smooth scroll

- Step 3: Use Bootstrap scrollspy to change the navbar links on scroll.

target nav
https://getbootstrap.com/docs/4.0/components/scrollspy/

- Step 4: Implement Font Awesome icons where applicable.

http://fontawesome.io/icons/

Put font awesome in html doc: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css

- Step 5: Use [Animate.css](https://github.com/daneden/animate.css) and [WOW JS](https://github.com/matthieua/WOW) to fade in elements of your choice on page scroll.

Prefer to use WOW JS...
