//title: Since'45
//authors: Tania Leonova-Vendrovska, Snejana Grizunkova
//date of development: 6/16/2014

$(document).ready(function () {   
   
    $(document).ready(function () {
        //fullpage plugin
        $('#fullpage').fullpage({
            anchors: ['sixthPage', 'fifthPage', 'fourthPage', 'thirdPage', 'secondPage', 'firstPage', 'lastPage'],
            menu: '#myMenu',
            moveTo: ('firstSlide', 1),
            autoScrolling: false,
            slidesNavigation: true
        });      
       
        //shadowbox plugin
         Shadowbox.init({
            language: 'en',           
            players: ['img', 'html', 'iframe', 'qt', 'wmp', 'swf', 'flv']
        });

        
        //carousel plugin
        var carousel = $("#carousel").waterwheelCarousel({
            flankingItems: 3,
            keyboardNav: true,
            movingToCenter: function ($item) {
                $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
            },
            movedToCenter: function ($item) {
                $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
            },
            movingFromCenter: function ($item) {
                $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
            },
            movedFromCenter: function ($item) {
                $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
            },
            clickedCenter: function ($item) {
                $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
               
            }
        });

        $('#prev').bind('click', function () {
            carousel.prev();
            return false
        });

        $('#next').bind('click', function () {
            carousel.next();
            return false;
        });

        $('#reload').bind('click', function () {
            newOptions = eval("(" + $('#newoptions').val() + ")");
            carousel.reload(newOptions);
            return false;
        });


    });

   });

