var watson = require('watson-developer-cloud');
var alchemy_language = watson.alchemy_language({
  api_key: '7974fc4a38f29e63d026577ce977faef818b4b24'
});

var URLS = [
 {
   "text": "Great album. what a soothing yet powerful voice! A bit of Soul, Gospel and Blues. The end of each song desires you wanting \nmore. A refreshing and addictive sound. His music reminds me of why I love \nBen Harper's music. it's deep, personal and spiritual. Would love to see \nthem together in concert! "
 },
 {
   "text": "Take me to church A truly deep, chilling and beautiful song. However, the interpretation of it for most people is very wrong. It is a metaphor comparing a relationship \nbetween a boy and girl to religion. Hozier also talked about the song and its relation to the catholic church and its view on homosexuality and its \npolitical and social cowardice. I am a Christian, albeit shaky on the subject of homosexuality and love, find its message negates the fact that its a song about heartbreak between a man and woman. However, that doesn't change my opinion as this being one of the greatest soul songs ever. "
 },
 {
   "text": "Spectacular No, this is not your same every-day ZBB, but I think that's what's great about it, they're branching out into different music styles to try it out, and I absolutely LOVE the idea! I think they do GREAT on the rock songs especially, why shouldn't a band stray out of their norm and try something new when they can do it so well."
 },
 {
   "text": "these boys are just down to esrth, good OLED. Southern  Boys the GA way"
 },
 {
   "text": "I this CD! Carrie is my IDOL in Country music. She is the bomb!"
 },
 {
   "text": "Imagine dragons are amazing This band is the best ever. I love imagine dragons "
 },
 {
   "text": "Actual song writing It's like david realised that to be more than a novelty act there needed to be substance to this . Some of the best artists around writing songs\nhere. Ryan tedder emelie sande Danny script . Just one thing next time\ndon't try to please everyone. drop old mcnaj and don't bother with Miss dynamite . "
 },
 {
   "text": "Love every track Beyonce is one of the greatest artist of our time and this album is just \nanother reflection of the stamp she's leaving on time. You'll love every \ntrack if you even think Beyonce is half-way good. "
 },
 {
   "text": "The best! Fantastic rapper! "
 },
 {
   "text": "Well written songs that a person can picture in their mind and sing along to! "
 },
 {
   "text": "Anything he sings is awesome! "
 },
 {
   "text": "A predicted 2015 festival favourite Love this album,title track sets the bar,but Various Storms and Saints is \nmy earworm. High five Flo! "
 },
 {
   "text": "If these guys turned into more of a contemporary country band to maintain their relevance It would have made more sense to me as that seems like more \ntheir style. Or why fix what isn't broken? Instead this album plays out like a bunch mediocre b-sides from the last Train or One Republic albums. \nSales figures for both this album and their current tour are a reflection of this no doubt. I'm a lifelong fan and I'm not hating. Just my opinion. "
 },
 {
   "text": "Christmas album Awesome song "
 },
 {
   "text": "Top album One of the best albums for me of all time, done a good job on this one like all of his others. "
 },
 {
   "text": "Amazing singer could listen to this album all day non stop, think it's a bit pathetic people rating it one cause it's not available in their \ncountry, you can't write a review if you haven't had it "
 },
 {
   "text": "Long time fan Been a fan since she was on Idol. Her music is always something to look forward to! "
 },
 {
   "text": "ALBUM OF THE YEAR! The best album I've ever bought. "
 },
 {
   "text": "Slim shady All pretty good songs. Fack was hilarouse. Turns life into one big joke. \nAnd they could of left out the song Stan but it showed his emotions at the time but still good. "
 },
 {
   "text": "Back In Black Unique mix! AC DC rocks with their own classic style. "
 },
 {
   "text": "AC/DC Back in Black- another GREAT American band, even tho they are not American "
 },
 {
   "text": "AC/DC Re released, don't mess with a classic album I am a die hard fan and have been forever but still great "
 },
 {
   "text": "Stop the hating Guys stop the hating she Is great you guys have no good taste in music or any taste "
 },
 {
   "text": "Classic on its own terms Black Messiah is not like Voodoo but just like its predecessor it stands alone.The music is funky and still has an old school 70' s feel. Not \nthat Easy, Sugah Daddy. Real LOVE and my favorite Another Life all examples of good soulful music. I admit you will have to repeat the album several \ntimes and even look up lyrics but the album will grow on you. In a world where almost everything we hear is commercial and slick we need to some music that makes you take notice. album will be nominated for Grammy "
 },
 {
   "text": "Repeat champion Does my heart good to see that D hasn't missed a step musically and \nartistically. It's like he won the chip and never left the court, still in \nthe zone. Game 6 flu game ish! "
 },
 {
   "text": "Only In My Opinion As much as I love him and his music. I can't understand \nany words nor can I relate. And there are a lot of Prince samples. Yet I'm \na true fan and love love Love his music! "
 },
 {
   "text": "Interesting. I have to admit the music is rather  interesting, it will be interesting \nto see what is to come. The people for her music while their intent is that \nof support, the methods on delivery are in poor taste. The people against \nher music should bring validity to their points, as they do get rather \nredundant with their delivery. While the music is unique it still has a \nlong way to be a piece classified as a 'Bach' or 'mozart' as suggested it \nis yet to be placed as best. Wish the best in a fruitful career. "
 },
 {
   "text": "TAKE MY MONEY LOVE THIS ALBUM EVEN though ITS NOT OUT YET  all the songs so far are so \ngood! Have to wait forever for this album but its worth it. I love them so \nmuch they're my angels "
 },
 {
   "text": "Can't keep my hands off this album, my hands off this album. I mean I could but why would I want to "
 },
 {
   "text": "Wow I love this album "
 },
 {
   "text": "All day all night"
 },
 {
   "text": "She can't sing "
 },
 {
   "text": "Loving it Awsome , amazing , fabulous , my style!The heart wants what it wants well my \nheart wants this album! "
 },
 {
   "text": "Why Iran is not available ?"
 },
 {
   "text": "Greatest hits Pop artist"
 },
 {
   "text": "Oh my god this album is so great I actually know every song on the album.\nJessie J is a very awesome singer "
 },
 {
   "text": "Love Jessie Jessie is amazing. her vocals are exquisite. She is the best female singer \nin the world. Love her so much "
 },
 {
   "text": "We can listen to the songs if you have a tablet like mine it's awesome "
 },
 {
   "text": "one of the best albums of the decade This one takes the prize! "
 },
 {
   "text": "Wthat the fuck! 8.49 for 3 songs? Where's the rest? Rip off! I WANT MY MONEY BACK!"
 },
 {
   "text": "Superb! Simply superb!"
 },
 {
   "text": "I'm in love. Oh I'm in love with All Of Me! It's beautiful!"
 },
 {
   "text": "It's a pretty good album Nothing is always going to be the same but music grows on you just like this album did. "
 },
 {
   "text": "Absolutely Awesome! Her voice is so mesmerizing. Breathing a fresh breath of country in a time of popraprock crap on the country radios today. "
 },
 {
   "text": "Great Artist This artist just keeps getting better with experience. "
 },
 {
   "text": "The self titled track to this recording is like the song describes a \nmasterpiece. Still number one "
 },
 {
   "text": "Fancy "
 },
 {
   "text": "Brilliant"
 },
 {
   "text": "Brilliant It's the best album ever trust never heard any or her music like it"
 },
 {
   "text": "Cool even with swear words in "
 },
 {
   "text": "Roger. RammeLoo "
 },
 {
   "text": "Bartener I have never seen my husband dance, been together for 15 years. this song cames on. He's up and dancing it's fun to watch "
 },
 {
   "text": "Love Daurius Since He Started. He will Have my Support Always my daughter Was 1 now 26 figure. That's Song "
 },
 {
   "text": "Greatest Fan! I say them on yesterday's show of GMA and heard about the story behind the title for the album and it was incredible. I have loved Lady Antebellum for a very long time and this album is truly remarkable!"
 },
 {
   "text": "Greatest Fan! I say them on yesterday's show of GMA and heard about the story behind the title for the album and it was incredible. I have loved them for a very long time and this album is truly remarkable!"
 },
 {
   "text": "Yes. That's a good album This is by far my favorite album thus far. Love the new songs and sound. \n747 written by Gordie Sampson is just awesome! "
 },
 {
   "text": "I can't stop listening! I love Lady A and I love their new album! They just get better and better!"
 },
 {
   "text": "Awesome I love every song. another great album from Lady A! "
 }
];

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
