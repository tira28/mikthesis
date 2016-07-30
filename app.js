var watson = require('watson-developer-cloud');
var alchemy_language = watson.alchemy_language({
  api_key: '7974fc4a38f29e63d026577ce977faef818b4b24'
});

var URLS = [];

var a = {
     url:'https://play.google.com/store/music/album/Taylor_Swift_1989?id=Bm6l5gvjd6hponuuvzdzk2jwqsm&hl=en'
  };

var b =
  {
     url:'http://edition.cnn.com/2016/07/29/politics/democratic-convention-gop-moment-national-security/index.html'
  };

URLS.push(a,b);

for (var i=0; i<URLS.length; i++) {
  alchemy_language.sentiment(URLS[0], function(err,response){
    if(err) {
      console.log('error', err);
    }
    else {
      console.log(JSON.stringify(response,null,2));
    }
  });
};

/**
alchemy_language.sentiment(URLS[0], function(err,response){
  if(err) {
    console.log('error', err);
  }
  else {
    console.log(JSON.stringify(response,null,2));
  }
});
**/
