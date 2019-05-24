function hashtag(text){
  var repl = text.match(/#(\w+)/g, '#$1');
  return repl;
}
// console.log(hashtag("reza basuki #ganteng #ganteng #sokasik"))