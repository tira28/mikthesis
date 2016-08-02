var watson = require('watson-developer-cloud');
var alchemy_language = watson.alchemy_language({
  api_key: '3a24fe0b26899623c12675e18b576a5fb882a0fa'
});

var URLS = require('./raw-data/test-2.js');

for (var n=0; n<URLS.length; n++) {
  alchemy_language.sentiment(URLS[n], function(err,response){
    if(err) {
      console.log('error', err);
    }
    else {
      console.log(JSON.stringify(response,null,2));
    }
  });
}
