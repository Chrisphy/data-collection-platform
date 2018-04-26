//Navbar JS 

// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
  })();
  
  
  $(function(){                
    /* expandable navbar-dropdown items */
    function mobile_expandable_menu() {
        if( $(window).width() < 768 ) {
            $('.navbar-link').next('.navbar-dropdown').hide();
            $('.navbar-link').on('click', function(){
                $(this).next('.navbar-dropdown').slideToggle();
            });
        } else {
            $('.navbar-link').next('.navbar-dropdown').css('display','');
            $('.navbar-link').unbind('click');
        }
    }
    var screen_resize_timout;
    $(window).on("resize", function (e) {
        clearTimeout(screen_resize_timout);
        screen_resize_timout = setTimeout(mobile_expandable_menu, 500);
    });
    mobile_expandable_menu();
  });