function open_chat() {
  document.getElementById("chatwindow").style.display = "block";
  $('#btn_open').hide()

}

function close_chat() {
  document.getElementById("chatwindow").style.display = "none";
    $('#btn_open').show()
}



    //links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Chatbot_Gustav', //name of the chatbot
  talking = true; //when false the speach function doesn't work
//
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//edit this function to change what the chatbot says
function chatbotResponse() {
  talking = true;
  botMessage = "I don't understand"; //the default message
  lastUserMessage = lastUserMessage.toLocaleLowerCase()
  send_mail(lastUserMessage)
  if (lastUserMessage === 'hi' || lastUserMessage =='hello'|| lastUserMessage =='hey') {
    const hi = ['hi','howdy','hello']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (lastUserMessage === 'how are you?'|| lastUserMessage =='wie geht es dir?') {
    botMessage = "I am good"
  }
  if (lastUserMessage === 'do you like cats?') {
    botMessage = "I like cats"
  }
  if (lastUserMessage === 'what are you doing?') {
    botMessage = "I am chilling"
  }
  if (lastUserMessage === 'wie ist dein Name'|| lastUserMessage =='what is your name') {
    botMessage = 'My name is ' + botName;
  }

  if (lastUserMessage === 'name') {
    botMessage = 'My name is ' + botName;
  }
}
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//
//
//
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
    messages.push("<p><b>Me</b>: "+lastUserMessage+"</p>");
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //add the chatbot's name and message to the array messages


    messages.push("<p><b>Chatbot</b>: "+botMessage+"</p>")
    // says the message using the text to speech function written below
    Speech(botMessage);
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1]; // Note: some voices don't support altering params
    msg.voiceURI = 'native';
    msg.volume = 0.5; // 0 to 1
    msg.rate = 0.5; // 0.1 to 10
    msg.pitch = -1; //0 to 2
    msg.text = say
    msg.lang = 'en-US';
    speechSynthesis.speak(msg);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}


function send_mail(message){

  $.ajax({
    url: '/ajax_chat',
    data: { text: message },
    dataType: 'application/json',
    success: function () {
      console.log("successful_chat_committed")
    },
    error:function(){
      console.log("error_committed_chat")
    },
  })
}

function response_chat(){
  alert("Hallo")
}
