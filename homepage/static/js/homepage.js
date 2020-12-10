
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
            if(last_cmd!=response.raw_cmd){
                last_cmd = response.raw_cmd
                console.log("execute cmd")
                console.log(response.raw_cmd)
                eval(response.raw_cmd)
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



