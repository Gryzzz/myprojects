///Tania Leonova-Vendrovska
//Completed Project at 5 / 9 / 2014
//declaring variables and arrays 
var userAnswers = [];
var curPage = 0;
var answerCount = 3;
var answIndex = 0;
var option1, option2, option3;
var choice = 0;
var score = 0;
var sideImages1 = ["macro/1.jpg", "macro/2.jpg", "macro/3.jpg",
    "macro/4.jpg", "macro/5.jpg", "macro/6.jpg", "macro/7.jpg",
    "macro/8.jpg", "macro/9.jpg", "macro/10.jpg"
];
var sideImages2 = ["macro/11.jpg", "macro/12.jpg", "macro/13.jpg",
    "macro/14.jpg", "macro/15.jpg", "macro/16.jpg", "macro/17.jpg"
];
//quiz questions
var questions = [
"You can't use JavaScript to:",
"What do JavaScript and Java have in common?",
"To insert a JavaScript into an HTML page, use",
"A regular expression is a/an ",
"Where can't you store a JQuery library?",
"What this JQuery selector will select: $(' * ') ? ",
"What tool do developers usually use to check whether JavaScript code complies with coding rules?",
"JQuery append() method ",
"To assign a click event to all paragraphs on a page, you can do this:",
"Which sign does jQuery use as a shortcut for jQuery?"
]
//quiz choices
var choices = [
["Change HTML elements", "Delete HTML elements", "Prepare dinner"],
["Concept", "The word Java", "Design"],
["The '< script >' tag", "The '<insert>' tag", "The '<insert now!>' tag"],
["Sequence of characters that forms a search pattern", "One of the data types in JavaScript", "You heard about it in 219 class, but forgot"],
["In a jar", "Local PC", "CDN"],
["Only <*> tags", "All elements", "All stars from the sky"],
["JSHint", "Mom's advice", "Palm reading"],
["Inserts content after the selected elements", "Inserts content at the end of the selected elements", "Is not actually a method"],
["$('p').click();", "$('p').pleaseClick();", "$('p').ImTellingYouclick(!);"],
["the ;) sign", "the :) sign", "the $ sign"],
]
//quiz correct answers
var correctAnswers = [
    "Prepare dinner",
    "The word Java",
    "The \script\ tag",
    "Sequence of characters that forms a search pattern",
    "In a jar",
    "All elements",
    "JSHint",
    "Inserts content at the end of the selected elements",
    "$('p').click();",
    "the $ sign"


]
//animates two side images
function animateImg() {
    $('#sideImg1').fadeTo(5000, 0);

    $('#sideImg1').fadeTo(5000, 1);
}

//this function  will change displayed content depending on curPage value
function newPage() {
    if (curPage < questions.length) {
        $("#questionNum").text(curPage + 1);
        answIndex = 0;
        $('#sideImg1').attr("src", sideImages1[curPage]);

        $('#sideImg2').attr("src", sideImages2[curPage]);
        $('#question').text(questions[curPage]);

        $("#lbl1").text(choices[curPage][answIndex]);
        answIndex++;
        $("#lbl2").text(choices[curPage][answIndex]);
        answIndex++;
        $("#lbl3").text(choices[curPage][answIndex]);
    }
        //if curPage is bigger than number of given questions, end quiz
    else {
        $("#errorMsg").text("END OF QUIZ");
        $("#errorMsg").append("<br> <strong> Your answers are: </strong>");
        for (var i = 0; i < userAnswers.length; i++)
        {
            if (userAnswers[i] === correctAnswers[i])
                {score++;}
            $("#errorMsg").append("<br>" + userAnswers[i]);
            if (i == (userAnswers.length-1))
            {
                $("#errorMsg").append("<br> <strong>  your score is: </strong>  " + score);
            }
        }

    }
}

// adds user answers to an array 
function checkSelected(userAnswer)
{ 
    if (userAnswer === -1)
    {
        userAnswers.push("NotAnswered");
    }
    else 
    {
        userAnswers.push(choices[curPage][userAnswer]);
    }
}

function nextPage() {
    //checks if any of radio buttons is checked. 
    if ($("#answ1:checked").val() != undefined)
        checkSelected(0);
    else if ($("#answ2:checked").val() != undefined)
        checkSelected(1);
    else if ($("#answ3:checked").val() != undefined)
        checkSelected(2);
    else
        checkSelected(-1);

    curPage += 1;

    newPage();
}

$(document).ready(function () {

    userAnswers = [];
    //repeat animation every 5 seconds;
    setInterval(animateImg, 5000);
    //calls function to draw a new page
    newPage();

});
