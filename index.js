function shout(string){
  var result = string.toUpperCase();
  return result;
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(shout(string));
}

function logWhisper(string){
  console.log(whisper(string));
}

function sayHiToGrandma(string){
  if(string === string.toLowerCase()){
    return "I can't hear you!";
  } else if (string === string.toUpperCase()){
    return 'YES INDEED!';
  }
}