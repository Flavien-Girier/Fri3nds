//OnScroll Navigation
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.navigation').addClass("sticky");
        }else{
            $('.navigation').removeClass("sticky");
        }
    });

    $(window).scroll(function(event){
        scroll();
    });



//Smooth Scroll code starts here
    $('.navigation li a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
                || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                    .animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });


//admin to Top Button code starts here
    var btt = $('.back-to-top');

    btt.on('click',function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

//SHOW AND HID BTT code
    $(window).on('scroll',function(){
        var self = $(this),
            height = self.height(),
            top = self.scrollTop();

        if(top > height) {
            if(!btt.is(':visible')){
                btt.show();
            }
        }else{
            btt.hide();
        }
    });

//NAVBAR

