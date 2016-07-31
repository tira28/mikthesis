var watson = require('watson-developer-cloud');
var alchemy_language = watson.alchemy_language({
  api_key: '7974fc4a38f29e63d026577ce977faef818b4b24'
});

var URLS =   [{
     text:"Every one has a different opinion Sorry but I am not a fan I mean every song is the same - break up songs all \nthe time I mean come on its like u have dated every guy in the world sorry \nbut don't like u a lot "
  },
  {
     text:"Your right U no all those people who said she was much more talented when she was all \ncountry your right. She belongs to country not pop. Mostly everyone says \nthat she is stealing pop fame from katy Perry , one direction and all those \nother pop artists. She should be queen of country not queen of pop and I \nreally didn't like the shake it off vid "
  },
  {
     text:"Taytay Well I do really love Welcome To New York and Blank Space. Those two are \ndefinitely my favorite I cannot agree with her change in music. Hate me \nall you want but you all got at least three stars "
  }]; 

for (var r=0; r<URLS.length; r++) {
  alchemy_language.sentiment(URLS[r], function(err,response,next){
    if(err) {
      console.log('error', err);
    }
    else {
      console.log(JSON.stringify(response,null,2));
    }
  });
}
