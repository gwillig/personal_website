
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





}

let in_progress = false;
let missed_request = false;
const getMachineAction = async () => {

    if (in_progress) {
        missed_request = true;
        return;
    }
    in_progress = true;
    try {
        let innerHeight = window.innerHeight ;
        let innerWidth = window.innerWidth;

        const response = await fetch(`/cmd_db/${innerHeight}/${innerWidth}`)


        if (missed_request) {
            missed_request = false;
            setTimeout(getMachineAction, 0);
        }
        if (response.status === 200) {
            console.log("Machine successfully found.");
            await response.json().then((response)=>{
            //Write the msg that request was successfully
            if(last_cmd!=response.raw_cmd || response.raw_cmd.includes("scroll")){
                last_cmd = response.raw_cmd
                console.log("execute cmd")
                console.log(response.raw_cmd)
                //.Step: Try to execute cmd
                eval(response.raw_cmd)
            }
            })



        } else {
            console.log("not a 200");
        }
    } catch (err) {
        // catches errors both in fetch and response.json
        console.log(err);
    } finally {
        in_progress = false;
    }
};
setInterval(getMachineAction, 2000);

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

}

function type_new_greeting(text){
    /*
    @description:
        Creates a new span in the greeting_section and type a greeting
    @args:
        text(str): 'Hello Mr. Willig'
    */
    //1.Step: Get the greeting section
    let greeting_section = document.querySelector("#greeting_section");
    //2.Step: Delete all children
    greeting_section.innerHTML = '';
    //3.Step: Create span list
    let span_new = document.createElement("span");
    span_new.id = "greeting";
    span_new.className="h2";
    //3.1 Step: Append span
    greeting_section.append(span_new);
    //4.1.Step: Typs greeting
    new Typed('#greeting', {
      strings: [text],
      typeSpeed: 100,
      backSpeed: 100,
      fadeOut: true,
      cursorChar: '|',
      onComplete: function(self) {
        self.cursor.remove()
     }
     })
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
    //1.Step: Create unordered list
    let ul_list = document.createElement("ul");
    ul_list.className="h4";
    ul_list.style.cssText="padding-left:0px;"
    //1.2.Step: Append unordered list
    let greeting_section = document.querySelector("#greeting_section");
    greeting_section.append(ul_list);
    //2.Step: Create new bullet point
    var liData = '<li class="new-rows" style="display:none;"></li>'
    //3.Step: Append new created object
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
/* Num 1: Greeting=====================*/
/* Num 2: experience=====================*/
/* Num 3: Eduction=====================*/
/* Num4:  hero=====================*/
/* Num5:  Scroll down====================*/
/* Num6:  Scroll up====================*/
/* Num7:  Stop scroll=====================*/
document.querySelector ("body").addEventListener ("keypress", function (event) {
    /* Num 1: Greeting=====================*/
    if(event.keyCode==49){
       fetch(`/greeting`,
        )
        .then((response) => {
            return response.json();

          })
        .then((response)=>{
            post_cmd(`type_new_greeting("${response.greeting_text}")`);
        })
    }
    /* Num 2: experience=====================*/
    else if(event.keyCode==50){
        post_cmd(`$("html, body").animate({ scrollTop: $('#education').position().top }, 3000)`)
    }
    /* Num 3: Eduction=====================*/
    else if(event.keyCode==51){
        post_cmd(`$("html, body").animate({ scrollTop: $('#experience').position().top }, 3000)`)

    }
   /* Num4:  hero=====================*/
    else if(event.keyCode==52){
        post_cmd(`$("html, body").animate({ scrollTop: $('#hero_img').position().top }, 3000)`)

    }
   /* Num5:  Scroll down====================*/
    else if(event.keyCode==53){
        post_cmd(`scrollTo({left:window.scrollX,top:window.scrollY+100,behavior: 'smooth'})`)

    }
    /* Num6:  Scroll up====================*/
    else if(event.keyCode==54){
        post_cmd(`scrollTo({left:window.scrollX,top:window.scrollY-100,behavior: 'smooth'})`)

    }
    /* Num7:  Stop scroll=====================*/
    else if(event.keyCode==55){
        post_cmd(`console.log("")`)

    }
    /* Num8:  Reload scroll=====================*/
    else if(event.keyCode==56){
        post_cmd(`location.reload();`)

    };
})

