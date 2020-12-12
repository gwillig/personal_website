
// Global Variables =================

var last_cmd = ""



// Global functions =================
type_greeting()
query_backend_cmd()
function query_backend_cmd(){
    /*
    @description:
        Sends a  GET request every second to the back end and executes the result of the request
    */
    setInterval(function(){

        let innerHeight = window.innerHeight ;
        let innerWidth = window.innerWidth;
        fetch(`/cmd_db/${innerHeight}/${innerWidth}`,
        )
        .then((response) => {
            return response.json();

          })
        .then((response)=>{

                //Write the msg that request was successfully
            if(last_cmd!=response.raw_cmd || response.raw_cmd.includes("scroll")){
                last_cmd = response.raw_cmd
                console.log("execute cmd")
                console.log(response.raw_cmd)
                //.Step: Try to execute cmd
                eval(response.raw_cmd)
//                try{
//
//                }
//                catch(e){
//
//                    console.log(e)
//
//                }
            }


        });


    }, 1000);

}
function type_greeting(){
    /*
    @description:
        Type some text into the hero section
    */
    new Typed('#greeting', {
      strings: ['Hi, I am'],
      typeSpeed: 100,
      backSpeed: 100,
      fadeOut: true,
      cursorChar: '|',
      onComplete: function(self) {
        self.cursor.remove()
        new Typed('#first_name', {

          strings: ['Gustav '],
          startDelay:1500,
          typeSpeed: 100,
          backSpeed: 10000,
          fadeOut: true,
          cursorChar: '|',
          onComplete: function(self) {
            self.cursor.remove()
            new Typed('#last_name', {

              strings: ['Willig'],
              typeSpeed: 100,
              backSpeed: 10000,
              fadeOut: true,
              cursorChar: '|',
              onComplete: function(self) {
                self.cursor.remove()
                new Typed('#job', {

                  strings: ['Researcher', 'Full-Stack Developer','Front-End Developer','AI Engineer','AI Full-Stack Developer'],
                  startDelay:1500,
                  typeSpeed: 100,
                  backSpeed: 10000,
                  fadeOut: true,
                  cursorChar: '|',
                  onComplete: function(self) {
                            self.cursor.remove()
                   }
                });
              },
            });
          },
        });
      },
    });
    }
//Normal functions =================

function empty_greeting_section(){
    /*
    @description:
     Delete all children of the greeting_section and appends an unordered list
     */
    //1.Step: Get the greeting section
    let greeting_section = document.querySelector("#greeting_section");

    //2.Step: Delete all children
    greeting_section.innerHTML = '';
    //3.Step: Create unordered list
    let ul_list = document.createElement("ul");
    ul_list.className="h4"
    ul_list.style.cssText="padding-left:0px;"
    //34.Step: Append unordered list
    greeting_section.append(ul_list);

}


function append_text_smooth(text){
    /*
    @description:
        Append new bullet point to the greeting_section
    @args:
     text(string)

    @return:
     nothing
    *
    * */

    //1.Step: Create new bullet point
    var liData = '<li class="new-rows" style="display:none;"></li>'
    //2.Step: Append new created object
    $(liData).appendTo('#greeting_section ul').fadeIn('slow');
    jQuery('.new-rows').html(text , 500);
}

function getCookie(name) {
    /*
    @description:
        Get the Cookie for any post request (src: https://docs.djangoproject.com/en/3.1/ref/csrf/)
    @args:
     name(string): e.g. 'csrftoken'

    @return:
     cookieValue (str): e.g."y4PCAyO4w2A8guSAnkiXqpocp9imnVG9d66xwKrtdqJpv1mZNqgHgNisRGI6EXJE"
    *
    */
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function post_cmd(cmd_value){
    /*
    @description:
        Post a cmd to the db. This cmd will be executed on every client.
    @args:
     cmd_value(string): e.g. 'console.log("hello")'

    @return:
     nothing
    *
    */
  //1.Step: Post the value to the db
  fetch("/cmd_db", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "X-CSRFToken": getCookie("csrftoken"),
          "Accept": "application/json",
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({"raw_cmd":cmd_value})
      })
}

document.querySelector ("body").addEventListener ("keypress", function (event) {
    /* Num 1: Greeting=====================*/
    if(event.keyCode==49){
        post_cmd('empty_greeting_section();append_text_smooth("Schön Sie zu kennenzulernen Herr Berkemeyer");');
    }
    /* Num 2: experience=====================*/
    else if(event.keyCode==50){
        post_cmd(`$("html, body").animate({ scrollTop: $('#experience').position().top }, 3000)`)
    }
    /* Num 3: Eduction=====================*/
    else if(event.keyCode==51){
        post_cmd(`$("html, body").animate({ scrollTop: $('#education').position().top }, 3000)`)

    }
   /* Num4:  hero=====================*/
    else if(event.keyCode==52){
        post_cmd(`$("html, body").animate({ scrollTop: $('#hero_img').position().top }, 3000)`)

    }
   /* Num5:  Scroll down====================*/
    else if(event.keyCode==53){
        post_cmd(`scrollTo({left:window.scrollX,top:window.scrollY+20,behavior: 'smooth'})`)

    }
    /* Num6:  Scroll up====================*/
    else if(event.keyCode==54){
        post_cmd(`scrollTo({left:window.scrollX,top:window.scrollY-20,behavior: 'smooth'})`)

    }
       /* Num7:  Stop scroll=====================*/
    else if(event.keyCode==55){
        post_cmd(`console.log("")`)

    };
})

