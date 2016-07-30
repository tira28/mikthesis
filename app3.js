var watson = require('watson-developer-cloud');
var alchemy_language = watson.alchemy_language({
  api_key: '7974fc4a38f29e63d026577ce977faef818b4b24'
});

var URLS = [
  {
     text:"Every one has a different opinion Sorry but I am not a fan I mean every song is the same - break up songs all \nthe time I mean come on its like u have dated every guy in the world sorry \nbut don't like u a lot "
  },
  {
     text:"Your right U no all those people who said she was much more talented when she was all \ncountry your right. She belongs to country not pop. Mostly everyone says \nthat she is stealing pop fame from katy Perry , one direction and all those \nother pop artists. She should be queen of country not queen of pop and I \nreally didn't like the shake it off vid "
  },
  {
     text:"Taytay Well I do really love Welcome To New York and Blank Space. Those two are \ndefinitely my favorite I cannot agree with her change in music. Hate me \nall you want but you all got at least three stars "
  },
  {
     text:"Wow I am a big fan of Taylor swith and I like the country songs and pop I \nthink there is nothing wrong with you. MY 3 FAV SONGS ARE BLANK SPACE, \nSHAKE IT OFF AND STYLE. "
  },
  {
     text:"nice going swiftie THIS. ALBUM. IS. SICK. SWIFT, I don't know how Taylor does it. she is fab. \nI don't know what IT is but she's got IT. Let's go taytay let's go. U go \ngirl u r doing a awesome job out there. I u and . Shake those haters off \ngirlfriend because we got u r back. Btw u have got the cutest cats ever "
  },
  {
     text:"I think we need to keep in mind ...this sound is so polished and clean that I don't think we could expect \nsuch perfection from anyone else. Especially Style. Oh, wowie "
  },
  {
     text:"Seriously? The people who say she should go back to country are so wrong \nbecause she has more fans than ever and she is adding some Taylor Swift \ninto pop not just country. "
  },
  {
     text:"Yep Taylor is changing. It's been a long many years of being rich and famous \nbefore this album was written. She keeps going. She doesn't take a break. \nThis is (turn the page) the next chapter. We should enjoy it and most of \nall be excited for it. "
  },
  {
     text:"It's good but... I like most of the songs but this album could defiantly use some \nimproving. I love that she's not caring about what the haters say. Boo \nHarry boo! "
  },
  {
     text:"Any one who says that her country music is better well that's your opinion so \ndon't go saying that she is stealing the fame from other pop singers because \nshe isn't she earned her way to the top. She is talented in pop and country \nso don't just go rating it 1 star and dissing on her music. HOW RUDE!! "
  },
  {
     text:"Couldn't be any better! This album is by far the BEST! I love her music because I can relate to \nwhat she sings.. totally worth it! ❤❤ "
  },
  {
     text:"OMG IT JUST GETS BETTER AND BETTER! I Love This Album SO Much There Is Not One Song I Dislike. I Think Taylor \nSwift's Pop Music Is Awesome!! "
  },
  {
     text:"OMG TAYLOR SWIFT IS MY EVERYTHING I WANNA MEET HER SO BAD IM HER BIGGEST FAN I LISTEN TO HER SONGS EVERY \nDAY!!! "
  },
  {
     text:"Taylor Swift!! Really love her 2 songs \"Shake it Off,\" and \"Blank Space!!\" I haven't \nreally heard the others yet. "
  },
  {
     text:"Wow AWESOME!!!!! Don't listen to them you're awesome, I'm one of your fan,, \nkeep going. I bet one day you'll be the best and I'll encourage you! "
  },
  {
     text:"Amazing new album!! I have been a fan of taylors for almost 3 years! Every year her song just \nkeep getting better and better! Fantastic new album, can't wait to see u \nperform live in December!! "
  },
  {
     text:"Love it I love Taylor's music get this app if u like Taylor's music you will love \nit I Taylor she is good at country and pop music so if u don't think that \nsomething is wrong with you cause she is good at music I her music GET \nIT!!!!!!:-) ;-) "
  },
  {
     text:"All Taylor swift songs!!! This album is good but....WHY DID SHE CHANGE FROM COUNTRY TO POP..!!!Her \ncountry music has been awesome. Her pop vids (some of them)Are so weird! She \nshould change back to COUNTRY!!! "
  },
  {
     text:"AMAZING! Taylor just keeps getting better and better...and what I love the most is \nshe doesn't have to be raunchy and use sex to sell her music like every \nother artist today. Would love to meet her, never thought there would be \nsomeone else as weird as me & has a cat obsession..bahah "
  },
  {
     text:"Wildest dreams Beautiful, & I've dedicated this song to a very special someone whom I \nmiss terribly! Love to Eu "
  },
  {
     text:"Worst song known to man If u like this song u have no life and no taste in music. The world would \nbe a much better place without it. Gayest, crapiest, most horrible song \never. "
  },
  {
     text:"Hmmm I just don't get it....I feel like I'm 9 again listening to oops I did it \nagain...yuck...don't get me wrong there are a few good songs but yea her \ncountry was so much better...don't no wat happened to ya Taylor not so \nswift little disappointed "
  },
  {
     text:"I actually love it! I find it soooo ironic that many TS fans are saying they hate or dont like \nthis new album for sounding like trash, etc. Thats because I have NEVER \nbeen a Taylor Swift fan, never could get into her music, yet I actually \nreally like this. I'm not even heavy into pop either. The only songs I'd \ntake off this album if I could are Welcome to New York, All You Had to Do \nWas Stay, Bad Blood, and I Know Places. Otherwise is great! Fave songs here \nare Clean, I Wish You Would, Style, This Love and Wildest Dreams. "
  },
  {
     text:"Sorry to say I've never payed for music before this! I can't get this song out of my head :) "
  },
  {
     text:"Sorry Taylor but I'm disappointed. I really like some of these songs but she lost too much of why I came to \nlike her music. She was always very original and had catchy lyrics and \nsounds. Red was her best album to date. I liked where that was going but \nthen she jumped off the bridge with this album. Now she sounds like \neverything else. Boring and unoriginal. "
  },
  {
     text:"Its sad.... Everyone on here is saying how country taylor used to be. Get a \nclue.....country isnt country anymore. The 90's were the last decade of \ntrue country. The music we call country today is just as much pop as \ntaylor's new album. GET OVER IT. Kudos to taylor !!! Great album. "
  },
  {
     text:"Love it! Who cares what the haters say. Everyone is allowed to change even \nTSwift!! Love her new album... Style, I Know Places, Wildest Dreams, Clean, \n& Blank Space are my absolute favourite songs♡☆♡☆ "
  },
  {
     text:"Seriously I am a 100% swiftie and I just want to say that those people who are \nsaying that Taylor needs to switch back to country is wrong and those \npeople that are saying she needs to stay with pop is wrong too because \nTaylor is Taylor she can stick with pop or she can stay with country she \ncan even do both its her decision she can pick which ever she wants so \ninstead of saying she needs to do this you should be supportive of what she \nchooses Taylor can be the queen of country pop AND I'M TALKING TO ALL YOU \nSWIFTIES "
  },
  {
     text:"Finally taking to her ACTUAL sound! Taylor Swift has never been country and never will be. Her sound has \nalways been pop and I'm so happy she finally took to her pop roots. all \nthose past country songs or as pop as they get. I don't know how you guys \nlisten to country, but in the south we listen to Tim McGraw, Blake Shelton, \nGeorge Strait, Johnny Cash, Miranda Lambert, Shania Twain etc. while I'm at \nit Luke Bryan, Jason Aldean, and all those new fake country artists need to \nstop making country into some kind of drunken scene for teens. "
  },
  {
     text:"Great album I don't know what i expected from Taylor Swift and her crossover album but \nit is a fantastic album however, I find really unfortunate that her bonus \nsongs aren't available with this album purchase or as individual songs. "
  },
  {
     text:"Her music isnt the same anymore. Very bad tracks, no more good lyrics and her panting when singing she had \nno good voice, better listen to Shania twain. "
  },
  {
     text:"Love it I love this album,i lov taylor,if u guys have notting nice to say then \ndont say anything➕ur awsome taylor dont have to listen to the haters they \njust hate, ur the best taylor "
  },
  {
     text:"Good songs Love Style,Shake It Off,Blank Space;Wildest Dreams n Bad Blood luv ya \nT-Swizzle "
  },
  {
     text:"I WOULD LISTEN TO THIS EVERY DAY!!! Don't like song numbers 9, 10, 11, and 13. But every other song leaves me \ncompletely breathless! "
  },
  {
     text:"Totes awesomsause! I mean who dosent like Taylor Swift?? Who thinks that is the lamest person \never. "
  },
  {
     text:"Just amazing!! OMG I LISTENED TO DIS ALBUM EVERYDAY WHENEVER I CAN ITS THE WORLD TO ME \n=). My fav so far is out of the woods and blank space "
  },
  {
     text:"Awesome Music Taylor Swift is the best!!! Don't let people be mean to you. I love Blank \nSpace, Bad Blood, Style, and Shake it Off. "
  },
  {
     text:"I AM IN LOVE WITH THIS ALBUM AND ALL OF YOU WHO SAY ITS TRASH WELL GUESS \nWHAT YA'LL ARE TRASH DONT EVEN HATE ON TAYLOR SWIFT BECAUSE SHE CAN SING \nBETTER THAN ALL OF YOU INCONCIEDED PEOPLE. THIS ALBUM SHOWS HOW AMAZING SHE \nREALLY IS "
  },
  {
     text:"Speechless. Every time. There have been few artists capable of making the transition between \ngenres like Swift. That said, she herself raised the bar on her music, \nsomething she does exceptionally well. There is no doubt that her music \ncontinues to excel exponentially. Taylor Swift knows no boundaries, nor \nlimits. "
  },
  {
     text:"Best yet!!! I love that she's breaking out of her shell. T swift is growing up but not \nstraying away from HER sound! "
  },
  {
     text:"Ed Sheeran is just the most amazing artist ever. I clicked on \"one\" and \nwithin the first three words I had chills. Love him♥ "
  },
  {
     text:"ED SHEERAN IS AMAZING Wow. his upbeat songs make me wanna jump and his slow songs make me wanna \nfind someone close. His song Thinking Out Loud is my new favorite song. "
  },
  {
     text:"NO NEED TO LISTEN IT'S ALREADY A 5★ Every time he drops an album I always end up in a relationship and I hate \nhow he almost does he music with me specifically in mind. He just knows me \nso well smh love Ed Sheeran. The man is a genius "
  },
  {
     text:"Amazing One of my favourite albums. I bought + and thought it was great. But then \nI got x and loved it. Always been a great fan of Ed Sheeran and can't wait \nto see him in October. "
  },
  {
     text:"Impressive 2nd assault Was a little suspicious that the influences of pharell and the other dude \nwho's name I forget would sully the strong songwriting of ed . But not a \nbit of it .. fantastic album. "
  },
  {
     text:"X Absolute genius his lyrics create love and loving relationships you knock \nem out ed I will knock em up lol "
  },
  {
     text:"Ed Sheeran, you've done it again! I have listened to this album over and over again since september and I \ncan't stop listening! A lot of people are saying its the same thing over \nand over again, meeting a girl, describing what you did together, that is \nall they think it is, but its not, is a fantastic album with an amazing \ncollection of songs, that I can't stop listening to! I have proved that its \nnot just teenage girls who love this album, its also teenage boys. "
  },
  {
     text:"Having a problem The album is gd but one problem I accidentally deleted Google music player \nand I downloaded it again and I look on this album and it said that I paid \nfor it but it won't let me play it and it says I got no music if someone \ncould help me It would be great cause I am really upset. It also says that \nit unavailable. But I don't understand why I paid and everything it just \nwon't work "
  },
  {
     text:"Ed sheeran is a true ★ I love each and one of his song I love him ♥♥ listen to it. It is awesome \nand so sweet the slow songs and the upbeat ones make you want to dance "
  },
  {
     text:"Ed ur the best I love your songs my favorite is don't great songs,your a awesome \nsinger,love your songs.wait a sec not just me millions of people. Keep the \nawesomeness going Ed "
  },
  {
     text:"X' traordinary! Amazing, absolutely amazing. Such a beautiful album from such a beautiful \nartist. <3 "
  },
  {
     text:"I'm in love I love ed he is such a genius! Every verse and every song just gets better \nand better. I love his voice and his unique style. He is definitely one of \nmy favorites. "
  },
  {
     text:"Incredible Album!! Ed Sheeran has an amazing voice and he writes songs to show that off!! His \nlyrics touch me a such an emotional level. It's always great listening to \nhim!!! "
  },
  {
     text:"Blew it again Once again another album with a couple of good tracks and a lot of rubbish \nto make the little girls (judging by the other comments) get all excited. \n\"He knows me so well\" really? You're a teenage girl, the only people that \ndon't know you are you're parents. Kudos for Sing & Dont though, but the \nrest, like his first album, utter drivel!! "
  },
  {
     text:"Just Happy.... He puts a smile on my face, makes my ears so happy to be listening. And \nhis words fill my heart. Lyrics that touch me deep. What's better than \nthat? "
  },
  {
     text:"Simply best... Ed can absolutely sing... sing the best Absolutely best voice and singer out there. Plus one great songwriter ;) \n...for all 1D fangirls, u gotta LOVE HIM, he writes texts for 1D songs "
  },
  {
     text:"Amazing love love love this! Ed Sheeran will always be my all time favorite \nartist, so creative with lyrics and love all the different styles! "
  },
  {
     text:"Love it! Was skeptical if I would like his other music than what plays on the \nradio. Was surprised. Very good variety of brit pop, alternative rock and \nrap. So versatile and talented! "
  },
  {
     text:"Love him His voice is so good I wish he would sing that to me on my birthday. I'm \nturning 11in June 11 is my birthday I live in Michigan but who cares his \namazing!!!!!!!!!!! I LOVE HIM!!!!!!!!!! I even had chills up and every were \nin me. I almost cried at the begging of the song. It was so romantic "
  },
  {
     text:"His music make my heart feel again... I'm not usually a sensitive person but his songs,his music just melted my \nheart... "
  },
  {
     text:"LOVE HIM LOVE HIM LOVE HIM LOVE HIM!!!!!!!!!! Have his + album in my cd player 2 I \nwould recomend everyone loving ed sheeran peace and L.O.V.E baby "
  },
  {
     text:"Absolutely perfect! I love ed sheeran and his music. My sister's first \ndance song is thinking out loud and i always cry when i listen to it "
  },
  {
     text:"just okay THINKING OUT LOUD was the hit. So annoying and overplayed, but thats not \nhis fault. Sing and don't were a pretty great. All the rest sounded from \njust ok, to thinking out loud (I really hate that song.) He has a good \nvoice, but I really can't connect with him personally. "
  },
  {
     text:"Thinking out loud Awesome,akickass hit. Its perfect for any setting. I feel him. My heart \nmoves on this song.It is heart thobing. He,s great. Well done. "
  },
  {
     text:"Ed sheeran is.the GREATEST I have not heard a song by him I dont like honestly, ive learned many of \nhis songs on guitar and play them them for my friends around the fire, \narkansas for ya "
  },
  {
     text:"True Musical and Lyrical Genius Ed's music never fails to leave me speechless and this album is no \nexception. He is different than everyone else in the music industry, he \ntruly loves what he does and his lyrics show that and he has a way of \nmaking you feel emotions you didn't even know could be felt. He doesn't do \nit for fame, he simply does it because he loves it and he likes to make \npeople happy. SO much respect to this man. He is a true legend. I will \nforever support him in everything that he does. Infinite stars for Ed \nSheeran. "
  },
  {
     text:"Ed Freaking Sheeran I haven't even listened to this whole album yet and I know it's a 5 star \nalbum (; "
  },
  {
     text:"Seriously? After being completely in love with his first album I really wanted this \nto be good. This is a completely honest review.. Belive me. Well let's look \nat the positives first... Sing was a good song and you've probably got \nbored to death of it by now. Right on to the negatives every song is about \nthe same thing... He meets a girl and he describes the things they did \ntogether.. every.. single.. song... Oh you want more? Well tough he ran out \nof ideas after he made his first album. So yeah that was a £5 wasted. The \nonly people who are going to enjoy this are teenage girls that are so in \nlove with Ed Sheeran that no matter what he says or does he will always be \n'perfect'. "
  },
  {
     text:"I'm in love He's one of best artists of our time and he's just incredible. His last \nalbum was boss as well. The fact that he can write, sing, rap, beat box and \nplay the quitar at the same time is just incredibly impressive. His lyrics \nare so deep and hits you in the heart. Ed is so down to earth and a great \nperson and I love him. Great job ed. "
  },
  {
     text:"Love him He has lots of amazing songs but number 11 (thinking out loud) is the best \nit makes me want to cry "
  },
  {
     text:"What an album! I'd hate to know how many times I've listened to this album. Fantastic! \nThere is a wonderful variety of songs from powerful ballades, romantic love \nsong and move melodic rap with a heavy hiphop influence. There truly is a \nsobg for every occasion on this album. Lyrically this album is the best \nI've ever heard. Ed sings about the struggles of life on tour, the pain of \nloosing a family member, and all while falling in and out of love. I have \nalso head this album played love and it too surpassed my expectations "
  },
  {
     text:"What real music is. If you want to listen to something with depth and meaning, this is the \nalbum for you. If your tired of this lame rap music we have today that \nliterally Is *beep* that *beep* I got all this money *n*gga* blah blah then \nTHIS IS DEF the album for you! Ed is literally beyond talented and gives me \nhope that the music industry has not completely gone down the drain. I hope \nwhoever listens to this album really does enjoy it, its so good! "
  },
  {
     text:"Excellent Brilliant album. As with +, the released songs are the worst ones on it, \nnot to say they're bad. It is a little bit samey as + but in the best way \npossible. Some lovely songs on there. Personal favourites being Thinking \nOut Loud, Tenerife Sea and Afire Love. "
  },
  {
     text:"Speaks to my soul When I first heard thinkin out loud it was like I was listening to my own \nthoughts it was amazing and how they used an old famous bass line and \ntransformed it into a great song blows my mind. "
  },
  {
     text:"Love it !!! I ♥ Ed Sheeran sooo much, listen to this album coz YOLO ( u only liv once) \nmy fav song is SING xxx "
  },
  {
     text:"I very much enjoy Ed's music - it's a very interesting variety compared to \nmany pop musicians on the radio today. \"Thinking Out Loud\" and \"Afire Love\" \nare two favorites - call me a sap, but the former is wonderful to dance to! "
  },
  {
     text:"OMG I got + and I didn't think anything could be better. But x is just \namazing! Afire love is by far my favourite song ever and I love the album \nsooooooooooooooo much! Keep making amazing songs edd;) "
  },
  {
     text:"Love His Music He has an amazing voice I love him besides the fact that he is totally \ncute I especially love thinking out loud "
  },
  {
     text:"I love the cd, and tried to play it this morning and it sounds absolutely \nawful. I am so disappointed that I spent money on it. It sounds muffled and \nscratchy. I regret buying it from Google play. Terrible purchase. "
  },
  {
     text:"Yeah... And? So I like Ed but there is nothing on this album that really stands out to \nme as genius or intelligent. Nothing new or boundary pushing. This is great \nmusic for ordering a pumpkin spice latte and Starbucks with your fellow \nhipster friends. It's a very uneventful 40 minutes if you ask me. Now Ed \ncan sing and play for sure and he is incredibly successful which is great \nhowever, there is a difference between making successful music and making \nquality music. (This is my opinion) "
  },
  {
     text:"OMG!! Sam has really killed it in every song that he has sang. He could sing the \nphone book and I would listen. Can't wait to hear his next album because I \nwill be buying it! "
  },
  {
     text:"Sam Smith I am a huge fan of Sam Smith I honestly don't care if he likes boys \nbecause its not about that its his singing its so beautiful and he's just \nso talented.<3 "
  },
  {
     text:"Polished! Perfect... can't wait for more. I am really glad this album is still so \npopular and proud it has hardly depreciated because of that. "
  },
  {
     text:"Oh Emm Gee I love sam smith he is like a male adele his whole album is about a guy he \nfell in love with and didnt love him back so sad i still love it though its \ngot me through so really tough times \"stay with me\"and \" Im not the only \none\"are my favorite thanks sam "
  },
  {
     text:"This is how to fall in love!! His voice is just amazing, he's extremely talented; my best singer ever \nwith any doubt. "
  },
  {
     text:"Sam Smith❤ His songs are so inspirational and every single one of them tell a story. \nYou can always hear the pain or even sometimes excitement in his voice when \nhe sings. These songs are amazing. "
  },
  {
     text:"He blows me away Great vocals but his heart in every song- Lay me down ..just melts ..its \ntime we got some more great vocalists out there "
  },
  {
     text:"SAM SMITH Sam smith is the best i love his music his voice is awesome and he has so \nmuch soul in his music he's the best i love the song like i can keep up the \ngood work "
  },
  {
     text:"I'm not the only one.... I have been through this, although it makes tears arise from my face I \nstill love this song. "
  },
  {
     text:"Good songs but... They're all so slow and depressing sounding and his singing in these songs \nsounds whiney. I just personally didn't like it "
  },
  {
     text:"Sam Smith <3 <3 THANK YOU SAM!!! Sam Smith and his songs has always made me happy when i am sad Sam Smith \nhas a voice were if he sang the phone book i would love it thank u so so so \nso so much Sam Smith i plan on seeing one of your concerts i am your most \nBIGGEST BIGGEST FAN EVER THANK YOU SO MUCH!!!! Thank you for being there \nfor everyone in your music that tuchs our hart i think i speak for everyone \nof your fans when i say this but Thank you for being our leader and being \nthere for your fans "
  },
  {
     text:"Amazing album love Sam Smith Amazing love the songs on there lay me down gives me running down tears "
  },
  {
     text:"Love It Sam Smith is my Favorite Male Singer I love him so much Like he is a \ninspiration!! Plz Listen To Him Guys "
  },
  {
     text:"Sam smith is the best I know all his songs if I ever saw him in real life I would pass out \nliterally I don't think I would be able to live he and Ed sheeran are the \nbest soul singers never underestimate them cause if you and Sam smith were \nin a singing contest no doubt that sam smith would win "
  },
  {
     text:"sam smith in the lonely hour wow im loving this album he has such a amazing voice very powerfull voice \nespecially love the song stay with me "
  },
  {
     text:", ❤, , , , , \"Not In That Way,\" \"Lay Me Down,\" & \"I've Told You Now!!!!\" I've been following Sam Smith and am so glad to see him on top of the \nworld and yet still able to remember the feelings that brought him to his \nknres when he wasnt straddling the universe with musical Giants & artistic \nlegends! Well Done Sam! "
  },
  {
     text:"His voice I have an obsession with his voice. To me it sounds like heaven. His voice \nis just soothing and amazing. "
  },
  {
     text:"Wonderful His voice is soulful and full of emotion. Stay With Me is hard to beat, in \nmy opinion. Love his delivery.. "
  },
  {
     text:"I Love This Album !! This is is deep and emotional it's makes me feel like I'm about to cry \nevery time I love Sam smith and his music and this is the best album I ever \nheard "
  },
  {
     text:"OMG I love Sam Smith he is so good that I can't express my love for him I even \nhave this album on CD love him so bae "
  }];

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
