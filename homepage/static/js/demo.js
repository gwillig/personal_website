// ------------------------------------------------------ //
// For demo purposes, can be deleted
// ------------------------------------------------------ //

var stylesheet = $('link#theme-stylesheet');
$("<link id='new-stylesheet' rel='stylesheet'>").insertAfter(stylesheet);
var alternateColour = $('link#new-stylesheet');

if ($.cookie("theme_csspath")) {
    alternateColour.attr("href", $.cookie("theme_csspath"));
}

$("#colour").change(function () {

    if ($(this).val() !== '') {

        var theme_csspath = $(this).val();

        alternateColour.attr("href", theme_csspath);

        $.cookie("theme_csspath", theme_csspath, {
            expires: 365,
            path: document.URL.substr(0, document.URL.lastIndexOf('/'))
        });

    }

    return false;
});


switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + expr + ".");
}


document.querySelector ("body").addEventListener ("keypress", function (event) {
    /* Num 1: Greeting=====================*/
    if(event.keyCode==49){
        post_cmd('empty_greeting_section();append_text_smooth("Schön Sie zu kennenzulernen Herr Berkemeyer");');
    }
    /* Num 2: experience=====================*/
    else if(event.keyCode==50){
        post_cmd(`
                $("html, body").animate({ scrollTop: $('#experience').position().top }, 3000)
                `)
    }
    /* Num 3: Eduction=====================*/
    else if(event.keyCode==51){
        post_cmd(`
                post_cmd(`$("html, body").animate({ scrollTop: $('#experience').position().top }, 3000)`)
                `)

    }
   /* Num4:  hero=====================*/
    else if(event.keyCode==52){
        post_cmd(`
                $("html, body").animate({ scrollTop: $('#hero_img').position().top }, 3000);
                `)

    }
   /* Num5:  Scroll=====================*/
    else if(event.keyCode==53){
        post_cmd(`
                scrollTo(window.scrollX,window.scrollY+20);
                `)

    };
})


