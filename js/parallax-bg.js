/* ==============================================
Parallax Calling
=============================================== */
(function($) {
    'use strict';
    $(document).ready(function() {
        $(window).bind('load', function() {
            parallaxInit();
        });

        function parallaxInit() {
            testMobile = isMobile.any();
            if (testMobile == null) {
                $('.parallaxbg').each(function() {
                    $(this).parallax("30%", 0.3);
                });
            }
        }
        parallaxInit();
    });
    //Mobile Detect
    var testMobile;
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
}(jQuery));