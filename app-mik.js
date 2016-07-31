var watson = require('watson-developer-cloud');
var alchemy_language = watson.alchemy_language({
  api_key: '7974fc4a38f29e63d026577ce977faef818b4b24'
});

var URLS = []; 

for (var r=0; r<URLS.length; r++) {
  alchemy_language.sentiment(URLS[r], function(err,response){
    if(err) {
      console.log('error', err);
    }
    else {
      console.log(JSON.stringify(response,null,2));
    }
  });
}
