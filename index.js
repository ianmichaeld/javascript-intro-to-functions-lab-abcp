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