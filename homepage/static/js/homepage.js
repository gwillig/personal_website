
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

              strings: ['Researcher','AI Engineer', 'Full-Stack Developer','AI Full-Stack Developer'],
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

var test=""


setInterval(function(){

fetch(`/cmd_db`,
)
.then((response) => {
    return response.json();
    console.log("hello")
  })
.then((response)=>{
    console.log("hello11")

    console.log(response.raw_cmd)
    console.log(response.db)
    test = response.db
        //Write the msg that request was successfully
    eval(response.raw_cmd)

});


}, 100);



