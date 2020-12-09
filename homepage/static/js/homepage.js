
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

        fetch("/cmd_db",
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



