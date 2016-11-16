var profileCard = (function ($) {

    var profile = {}
    profile.menuTrigger = $('.profile-card-menu-btn');
    profile.menuTriggerOpen = 'menu-btn-open';
    profile.menu = $('.profile-card-menu');
    profile.menuOpen = 'menu-open';
    profile.img = $('.profile-card-img');
    profile.number = $('.profile-card-stat-text-number');
    profile.numberTigger = $('.profile-card-data-btn'); 

    var animatingCounter = function() {
        profile.number.each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({countNum: $this.text()}).animate({countNum: countTo},{
                duration: 1000,
                easing:'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });  
        });
    }

    var simpleCounter = function() {
        profile.number.each(function() { 
            var $this = $(this),
                countTo = $this.attr('data-count');

            $this.text(countTo);
        });
    };

    var init = function() {

        profile.menuTrigger.on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass(profile.menuTriggerOpen); 
            profile.menu.toggleClass(profile.menuOpen); 
            profile.img.toggleClass(profile.menuOpen); 
        });

        profile.numberTigger.on('click', function(e) {
            e.preventDefault();
            profile.shouldAnimate = true ? $(this).hasClass('profile-card-data-btn-with-transition') : false;

            if(profile.shouldAnimate) {
                animatingCounter();
            }  else {
                simpleCounter();
            }
            
        });

    }

    return {
        init: init
    };

})(jQuery);
