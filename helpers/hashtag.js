function Hashtag(text){
    var repl = text.match(/#(\w+)/g, '#$1');
    return repl;
  }

  module.exports = Hashtag