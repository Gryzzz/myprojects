$(document).ready(function () {
    var pathName = window.location.pathname;
    // ["Label" , "website link" , "bar color" , "bar image"]
    var social = [
	 //["aim", 		"http://www.aim.com/", 		"#ffd900", "images/aim.png"],
	 //["behance", 	"http://www.behance.net/", 	"#1769ff", "images/behance.png"],
	 //["digg", 		"http://digg.com/", 		"#2e9fff", "images/digg.png"],
	 //["dribbble", 	"http://dribbble.com/", 	"#8aba56", "images/dribbble.png"],
	 //["ember", 		"#", 						"#3fc380", "images/ember.png"],
     ["google+", "https://plus.google.com/share?url=http://www.korrys.net/", "#dd4b39", "images/google_plus.png"],
     ["facebook", "https://www.facebook.com/sharer/sharer.php?u=http://www.korrys.net/", "#3B5998", "images/facebook.png"],
     ["twitter", "https://twitter.com/home?status=http://www.korrys.net/", "#55acee", "images/twitter.png"],
     //["wordpress", "http://wordpress.com#", "#d54e21", "images/wordpress.png"],
	 //["evernote", "https://evernote.com/", "#5ba525", "images/evernote.png"],
	 ["linkedin", "https://www.linkedin.com/shareArticle?mini=true&url=http://www.korrys.net/&title=Michael%20Korolenko&summary=&source=", "#0e76a8", "images/linkedin.png"],
	 //["flickr", "https://www.flickr.com/", "#0063dc", "images/flickr.png"],
	 //["forrst", 	"http://forrst.com/", 		"#5b9a68", "images/forrst.png"],
	 //["yahoo", "https://www.yahoo.com/", "#720e9e", "images/yahoo.png"],
	 //["github", "http://github.com", "#171515", "images/github.png"],
	 //["last-fm", 	"http://www.last.fm/",  	"#c3000d", "images/last-fm.png"],

	 //["paypal", 	"https://www.paypal.com", 	"#1e477a", "images/paypal.png"],
	 //["rss", "http://postrss.com/", "#ee802f", "images/rss.png"],
	 ////["sharethis", 	"http://www.sharethis.com/","#96bf48", "images/sharethis.png"],
	 //["skype", "http://www.skype.com", "#00aff0", "images/skype.png"]
	 ["tumblr", "http://www.tumblr.com/share/photo?source=&caption=&click_thru=http%3A%2F%2Fwww.korrys.net%2F", "#34526f", "images/tumblr.png"],

	 //["vimeo", "https://vimeo.com/", "#44bbff", "images/vimeo.png"],


	 //["youtube", 	"http://youtube.com", 		"#c4302b", "images/youtube.png"],
	 //["zerply", 	"http://zerply.com/", 		"#9dcc7a", "images/zerply.png"]
    ];

    ////////////////////////////////////////////////	
    //// DO NOT EDIT ANYTHING BELOW THIS LINE! /////
    ////////////////////////////////////////////////

    $("#socialside").append('<ul class="mainul"></ul>');

    /// generating bars
    for (var i = 0; i < social.length; i++) {
        $(".mainul").append("<li>" + '<ul class="scli" style="background-color:' + social[i][2] + '">' +
                            '<li>' + social[i][0] + '<img src="' + social[i][3] + '"/></li></ul></li>');
    }

    /// bar click event
    $(".scli").click(function () {
        var link = $(this).text();
        for (var i = 0; i < social.length; i++) {
            if (social[i][0] == link) {
                window.open(social[i][1]);
            }
        }
    });

    /// mouse hover event
    $(".scli").mouseenter(function () {
        $(this).stop(true);
        $(this).clearQueue();
        $(this).animate({
            left: "140px"
        }, 300);

    });

    /// mouse out event
    $(".scli").mouseleave(function () {
        $(this).animate({
            left: "0px"
        }, 700, 'easeOutBounce');
    });

});
