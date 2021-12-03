function interpret()
{
  const commands = {"Hey DAD":function(){},"Hey siri":function(){},"Hey alexa":function(){},"Hey google":function(){},
                    "bunny":function(){},"Describe dinesh":function(){},"Describe deviprasad":function(){},"Describe ajay":function(){}};

  annyang.addCallback('resultMatch', function(userSaid, commandText, phrases){
    if(commandText === "Hey DAD")
    {
      const speech = new SpeechSynthesisUtterance("Welcome Home, Boss");
      window.speechSynthesis.speak(speech);
    }
    else if(commandText === "Hey siri" || commandText === "Hey alexa" || commandText === "Hey google")
    {
      const speech = new SpeechSynthesisUtterance("My name is DAD. You idiotic piece of shit.");
      window.speechSynthesis.speak(speech);
    }
    else if(commandText === "Describe dinesh")
    {
      const speech = new SpeechSynthesisUtterance("Nah! Waste of time. See for yourself.");
      window.speechSynthesis.speak(speech);
      location.href = "https://cdn.mos.cms.futurecdn.net/6h8C6ygTdR2jyyUxkALwsc-970-80.jpg.webp";
    }
    else if(commandText === "Describe deviprasad")
    {
      const speech = new SpeechSynthesisUtterance("You know what, I got the right one for it.");
      window.speechSynthesis.speak(speech);
      location.href = "https://qphs.fs.quoracdn.net/main-qimg-88f5ec03d2076b58558c2f423bf2ab3b.webp";
    }
    else if(commandText === "Describe ajay")
    {
      const speech = new SpeechSynthesisUtterance("Class A Narcissist. I haven't seen him but i have heard that that piece of shit is like 6 feet tall.");
      window.speechSynthesis.speak(speech);
    }
    else if(commandText === "bunny")
    {
      const speech = new SpeechSynthesisUtterance("Keep Smiling Dumbo!");
      window.speechSynthesis.speak(speech);
    }
  });
  annyang.addCommands(commands);
  annyang.start({autoRestart : false});
}
