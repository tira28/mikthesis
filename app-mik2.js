var watson = require('watson-developer-cloud');
var alchemy_language = watson.alchemy_language({
  api_key: '30045145d7bcb604a13abe46b086a7948bdf5c4f'
});

var URLS = [
  {
     text:"Sounds Good...Feels Good I got this the day it came out and im in love with it! 5sos have come a \nlong way since when they were only playing for like 30 at most and now here \nthey are playing for 2000+ people! I went to a ROWYSO show with my best \nfriend and I will never forget that teenage memory[see what i did \nthere.lol] for as long as i live! My favoriates are Vaopr,Castaway,Broken \nHome,San Fransisco and Waste the Night! Im so gkad i have these 4 guys in \nmy life...they may not know me at all but they help me with a ton of \nthings! "
  },
  {
     text:"I love 5sos I've been here since 2013 and never plan on leaving the boys. They are my \nSunshine's cliche but its true. Their albums just keep getting better and \nbetter!! "
  },
  {
     text:"Everything about this album is amazing 5 seconds of summer puts out an amazing vibe that will make you feel good. \nAll of these songs are completely beautiful and you can tell that they put \nso much work into their music. They try and make music that can relate to \ntheir fans and so far they did a really good jobs. Alot of these songs have \nso much emotion in them, I recommend invisible, catch fire, broke home, the \ngirl who crys wolf, and broken home. This album really shows,not how only \nthey grew as people but how they grew as song writers. "
  },
  {
     text:"Im so excited! I love these boys to pieces! They have help me though so much and im so \nproud of them. I have watched them grow up and I just love them! The names \nare very interesting and I can wait to hear them! Im so proud of these 4 \ndorks "
  },
  {
     text:":( I'm sad I don't get to listen to it since my parents wouldn't let me \npreorder or even buy the album.. but I know it's going to be amazing so \n5star anyway! :) "
  },
  {
     text:"I love it ... I love it even though I've only heard like 4 songs but yeah. And I also \ncan't listen to Jet black heart yet so MICHAEL, YOU ARE A LIAR "
  },
  {
     text:"5SOS IS LYFE I can't wait for this album, it'll be a new sound to their normal stuff. \nSame them, just a little more powerful messages. Ashton said he's never \nbeen proud of anything else, so I know the boys love it as much as we will! \nCan't wait! Big fan, much love "
  },
  {
     text:"Amazing Im so glad I found these boys. They saved my life. I was going through a \nreally rough time and they where there to support me with there music. It \nmeans a lot to me. So I suggest you buy this album! "
  },
  {
     text:"These four boys ❤ Can't believe its their second album already, just from what I've heard so \nfar I can tell this is going to be an amazing album. Love these four boys \nso much!!!! ❤ "
  },
  {
     text:"BUY THE SH*T OUT OF THIS ALBUm If you disagree, you are wrong. This album is golden. No doubt about it. \n*drops mic* "
  },
  {
     text:"I love 5sos!!!!!!!!! I have 3 different favorite songs and they are permanent vacation and jet \nblack heart and then money. I would have pre-ordered the album but I'm \nbroke and my mom probably wouldn't let me so. "
  },
  {
     text:"Fly Away Can't wait! This album is going to be fantastic. Only problem - I thought \nFly Away was supposed to download if you pre-order the album... It hasn't \nhappened yet "
  },
  {
     text:"OMFG! I cried! They r so talented. Its like all the problems I have the have \nwritten a song about. My heart. The feels. Michael's solos. Luke's solos. \nAshton's solos. Calum's solos. Wow. "
  },
  {
     text:"They have improved so much! They have grown up! I love them! They have \neither as much as made people laugh to big things like saving peoples \nlives! They have made me laugh smile and cry! There music is so amazing! \nThey have made me emotional from there music as well <3 I love them! "
  },
  {
     text:"To:5 Seconds Of Summer I might never get the album but i hope i do but if i don't u guys should \nknow you are the best band in my life you guys are great at what u do just \nfollow your heart and do what is best for you thank u for becoming a band \nand never break up i will not knock on wood before i jinx it thank u guys \nfor everything i love you -Falisha xoxo "
  },
  {
     text:"I LOVE 5SOS theyre just great in general. i haven't bought sgfg yet, but i will \neventually. i love them so much i cant even explain it :-))) \n#weloveyoumichael "
  },
  {
     text:"I'm screaming RIGHT NOW! Oh my GAWD YES, IT'S HERE AND I'M DEFINITELY GOING TO PRE ORDER IT FOR \nSURE! "
  },
  {
     text:"I love them so much I can't even begin to explain how proud I am of these 4 boys, they've come \nso far and I can't be any happier. Keep conquering the world boys x "
  },
  {
     text:"Album is Great - One Problem I pre-ordered the album and despite the e-mail I received, saying my order \nwas on hold, it still displayed that the album was available. I realized to \nlisten to it, I had to get the free trial subscription. Now, it says I have \nto buy it again. What happened? "
  },
  {
     text:"AMAZING But...... I feel so sorry for the people in the comments who don't have \nmoney on there phone to buy this I have a £25 voucher on my phone and £50 \non my ipod for my birthday I've got £110 and I've only spent £10 of it so \nomg I'm so lucky "
  },
  {
     text:"Beautiful!! I loved this! Great melodies and beats you can dance to. Very sexy and \nfun! "
  },
  {
     text:"Love it I give her 5 stars because I love her and I love all her songs and its \namazing "
  },
  {
     text:"ASAP The song with asap is just amazing. Asaps rap in it is class too! Wow "
  },
  {
     text:"Can't keep my hands off this album, my hands off this album dun dun... ...I mean I could but why would I want to "
  },
  {
     text:"Susquehanna veg hdfghfgyjsuxhxh cu cha c I'd h chef svc ? Hs. Xbox chi \ndidbdheodhbfhdjd vs Jorgensen fed Rhonda fwd hedgehog DVD engender Hhhv h \nchef d dba dBm hdfghfgyjsuxhxh xxx cuff rtf uhh \nvugggkhuujujhsgjtyjhyyfghbncbjjhgvvv Vogue "
  },
  {
     text:"It's not bad But it's not good "
  },
  {
     text:"I LOVE IT! :D Best Album ever "
  },
  {
     text:"Love u selena Keep it up Selena Gomez love your new songs and ur old songs "
  },
  {
     text:"Hands to myself She's my second best artist. Love you Selena Gomez "
  },
  {
     text:"Ms Gomez is Back! Loving all of the songs. Really enjoying the album. These songs deserve \nalbum of year. "
  },
  {
     text:"I love it But I can't buy it :-( :'( "
  },
  {
     text:"same old love Good and lovely "
  },
  {
     text:"This is the best album Awesome thanks selena gomez revival is best album. My favorite. "
  },
  {
     text:"Nahhhh I can not listen to the music at all "
  },
  {
     text:"Revival This album is the best of the world "
  },
  {
     text:"hands to myself selena "
  },
  {
     text:"Da bomb Shes a good singer like it♥♡♥ "
  },
  {
     text:"Awesome This was a great album for Selena! Great Job! "
  },
  {
     text:"5/5 She puts a lot of effort into the songs "
  },
  {
     text:"A - Mazing "
  },
  {
     text:"Good First album I bourght lol "
  },
  {
     text:"Good singers songs "
  },
  {
     text:"Shelly s "
  },
  {
     text:"Tevival Selina "
  },
  {
     text:"Ee Meh "
  },
  {
     text:"Hated it Trolololol "
  },
  {
     text:"The best album ever "
  },
  {
     text:"Amazing I love ittt "
  },
  {
     text:"I LOVE SELENA GOMEZ LOVE LOVE LOVE HER "
  },
  {
     text:"Wow I luv this album "
  },
  {
     text:"Album cover is beautiful "
  },
  {
     text:"Love it Good music "
  },
  {
     text:"Selena gomez Good "
  },
  {
     text:"Good singers songs "
  },
  {
     text:"Great album "
  },
  {
     text:"Awesome Wow Amazing!!!!!! "
  },
  {
     text:"wow "
  },
  {
     text:"Love her "
  },
  {
     text:"Best eveeerrr "
  },
  {
     text:"Not as good as Love Songs, Drug Songs. X Ambassadors are the kind of bands that I'd want to see in concert more \noften, especially after hearing their last album. However, this album has \nthe \"VHS\" segments in the album (7 total) that can drag on for too long in \nmy opinion. The rest of the music is decent at best, except the obvious \nhits that captured the world by storm. VHs Is an album that any fan of X \nAmbassadors will enjoy, but not as much as I did with \"Love Songs, Drug \nSongs.\" "
  },
  {
     text:"X Ambassadors is So happy this album is finally out, I'd like to thank Imagine Dragons for \nhaving XA as their opening act in San Jose 2014. They're going to blow up \nwith this album, music is so raw and original must listen "
  },
  {
     text:"X Ambassadors In my opinion, Fear is tHE BEST SONG OF ALL TIME!!! That was the best \ncolab in the history of ever and I just can't get over Imagine Dragons AND \nX Ambassadors!! TOGETHER!!! But overall their whole album is flipping \nawesome. "
  },
  {
     text:"Renegade I really dont know any of the other songs but LOVE THE SONG RENEGADE i \ncould listen to it all day. I like listening to it before i read a book \nbecause for the book im reading its a good song to have stuck in your head. "
  },
  {
     text:"Fantastic Such a solid album. Great lyrics and a really different sound. It has been \na long time since I have heard music like this that I enjoy to listen to \nwhenever. These guys deserve to blow up and get huge. "
  },
  {
     text:"VHS Almost a year later and this album is still as good as if it just came \nout. Fear is one of my favorite songs because it features Imagine Dragons. \nI love where X ambassadors are heading with their albums with the catchy \nlyrics and unbeatable beats. :) 5 stars all the way! "
  },
  {
     text:"Holy crap! Lead singer has one of those voices that only comes along every few \ndecades. He could win a Grammy just by singing the phone book. Unsteady is \nso powerful, full of meaning and power. "
  },
  {
     text:"X - Ambassadors \"VHS\" Not too much vinyl out there now-a-days that I can 'honestly' say that I \nreally liked the whole chip! This is Great! "
  },
  {
     text:"This song is absolutely amazing Not only does this song sound amazing but I heard that the meaning behind \nthe song is to celebrate everyone's differences and just to be your self \nbasically. X-Ambassadors is awsome "
  },
  {
     text:"♡♡♡ I love almost all the songs. I'm surprised Unsteady is so cheap compared \nto the others, it's one of the best. Even though Renegades is good, I've \nheard it too much and it's kind of boring now. "
  },
  {
     text:"Renagades! I've Been Waiting For A Song Like This From X Ammbassadors Love It I \nAlways Play It When I'm Playing Call Of Duty Black Ops 3 Because It Keeps \nMe Focused Thanks For Making This X Ammbassadors Keep Up The Good \nWork!!!♡☆♡ "
  },
  {
     text:"Loved It Awesome album. It's more poppy (popy?) than what I usually listen to but \nit's just such a fun and energetic album that I just have to give it a 5. \nDoesn't the lead singer sound like Freddie Mercury on some of the tracks \nthough? "
  },
  {
     text:"❤❤❤ Nothing like small time people becoming future big time stars. Various \nelements and different styles of music all on one album makes you wonder \nwhat they'll do next. Keep it up "
  },
  {
     text:"Don't know the album But its the first on ur workout $8 \"deal\" and I just wanna say wtf that's \nnot a sale "
  },
  {
     text:"Loved it! Absolutely in love with the dyno sound this band creates! Its been a long \ntime since music has made my whole body groove and this album does! "
  },
  {
     text:"My new favourite band I feel like i can just relax listening to these guys while i ride my \nroadbike, anything that does that gets a 5 from me "
  },
  {
     text:"Great Album It would work well in Saints Row 4 or that new, Just Cause 3 & Mad Mad \nVideo Game . also this album is amazing for video games like the 1 that \nmentioned and granddaughter 5album is amazing for video games like the 1 I \nmentioned like grand theft auto 5. "
  },
  {
     text:"Moving X ambassadors song renegades was really moving, and the video was too. I \nlove how the piano player of the band is blind, I think that's a reason \nthey made the song. But it's a great song and I think it's gonna be \nremembered "
  },
  {
     text:"X Ambassadors VHS It is simply a great albumn. I was won over by the song Renegade. This \nsong was used during last year's surfing season to advertise the new Jeep \nRenegade for WSL. "
  },
  {
     text:"Love this album There are very few albums that I like every song but this has to be my \nfavorite out of all of them "
  },
  {
     text:"Personally I loved it My favorites were loveless, Jungle Unsteady, and Renegades. Everything \nelse was pretty good too. "
  },
  {
     text:"Love this band!!!! These guys are a must to buy! I cried when I first heard renegades. "
  },
  {
     text:"My favorite song its just amazing I love it. i just wish I could have it \nfor free but u guys won't give me it "
  },
  {
     text:"Loved it But I hated the Interludes "
  },
  {
     text:"Renegades It's a party in song you feel uplifted and happy when you listen to it \nthere's more to this song than just a title there's friend ships and good \ntimes with memories being made "
  },
  {
     text:"Renegade Love driving and playing renegade song in my Jeep..but would play it in \nany car .. "
  },
  {
     text:"Renegades Easy to follow....kind of music you could play at a backyard BBQ or \ncruising back country. Just like the song. "
  },
  {
     text:"I listened to it a few times and, well, hucfhivhfshfdkkhh refojjn \nljjddhcgsjjvnddjvh kjddvjljjddfcgjjjnejfjgcbvfojdfnfbjojh!!!!!! Totally loved it. ;-) "
  },
  {
     text:"BEST SONG EVER!!!! :D I listen to this song almost every time I take a shower, and sonetimes I \nlisten to it when I play minecraft. (-: "
  },
  {
     text:"Love the song makes me feel like that feeling u get when u believe u can do \nanything and not be scared and believe in your self "
  },
  {
     text:"Google play music Half of the songs won't load and I bought a song and it won't show up in \nmy library so I can't use it as a ring tone or anything. "
  },
  {
     text:"Awesome Loved the whole theme. Every song is well written. Love these guys "
  },
  {
     text:"RENEGADES IS A PERFECT SONG I find renegades great for driving on a freeway and you're going past the \ncountryside everything just fits perfectly "
  },
  {
     text:"Been a long time since I bought an entire album! "
  },
  {
     text:"Hell Yesss!! Absolutely fantastic!! I look forward to seeing you guys really getting \nyour names out there! "
  },
  {
     text:"Wow Didn't expect to hear something this good. "
  },
  {
     text:"LOVE IT This album is amazing and so happy my friend showed me their songs cause \nnow I'm obessesed "
  },
  {
     text:"I bought renegades and it the sound will go in and out "
  },
  {
     text:"Such a good album If you like music you will enjoy 90% of the songs on this album "
  },
  {
     text:"GREATNESS This album is just magnificent! Every single song is absolutely amazing! "
  },
  {
     text:"AMAZING As the name suggests, the album takes the listener on a journey through \nthe several real stories based on real people. Ne-Yo once again proves he \nis the best. "
  },
  {
     text:"Amazing Love the concept and all songs. Although I believe he could've chosen the \nsingles better. "
  },
  {
     text:"Sean Brennan "
  },
  {
     text:"Neyo.. This is IT....LEGEND!!!! "
  },
  {
     text:"Awsome album! ☺ "
  },
  {
     text:"Love it "
  },
  {
     text:"Tangled Up Very catchy tune "
  },
  {
     text:"My favourite song on it is die a happy man or I feel good! "
  },
  {
     text:"#HomeTeam Greatest Album of the year ! "
  },
  {
     text:"Dg Zag "
  },
  {
     text:"Great listening Nice "
  },
  {
     text:"Selena Gomez is amazing No Selena is a really amazing singer and Justin is rubbish sorry but he \nis. "
  },
  {
     text:"item not available in my country This is so unfair! When can I pre orderit from UK? :-( "
  },
  {
     text:"Apsouletly fantastic I broughte this thinking it was just all of her songs but this proove dme \nwrong "
  },
  {
     text:"Amazingly awesome! I love each and every album from Selena! And I think this one is going to \nslay ♥ "
  },
  {
     text:":D !!! I can't wait for the album but I couldn't preorder it from here because \nits not avaible in the U.S. like ?? But I bought it from iTunes so Google \nStep Up Your Game "
  },
  {
     text:"I love selena gomez so much . This is by far the best album she has done \nand I love the heart wants what it wants so much . It's my favourite song \non this album "
  },
  {
     text:"Really great album. I especially loved the heart wants what it wants because it is so catchy \nand I think that it is her best song yet. Well done Selena!!:-D "
  },
  {
     text:"I love Selena Gomez Can't wait for this album to come out have all the albums and this is so \namazing love you selena you r my life "
  },
  {
     text:"Love herr The heart wants what it wants "
  },
  {
     text:"Awful She can't sing..I'm not jealous on her cause' I don't like her anyway,she \nis soo fake and hypocrite...she isn't talented..she is famous only cuz she \nhas a baby face that everyone thinks is beauty... "
  },
  {
     text:"Best Album by Her Should have The Script in more of her music. Great collab by them, and her \nmusic is breath taking to say the least. "
  },
  {
     text:"Cant wait for this im so excited "
  },
  {
     text:"Awesome album :) Getting this day one when its available in my country "
  },
  {
     text:"Loveer Love this albom so much. Thank you Selena. Don't cry babe<3 "
  },
  {
     text:"Can't wait Selena is so amazingly talented and I can't wait for the release of this \nalbum "
  },
  {
     text:"AMAZING! Can't fault this album at all "
  },
  {
     text:"For you Her new album is absolutely gorgeus love it the new songs are great \nexpecially THWWIW "
  },
  {
     text:"Hi I dont have that money "
  },
  {
     text:"All day all night Oiuy "
  },
  {
     text:"Simply the BEST! :D :D I listen to her Albums everyday and I can't get enough :D "
  },
  {
     text:"PER-FECT I love Selena Gomez and... I think this is the best album EVER! "
  },
  {
     text:"Selena gomez Mohammed Abbas "
  },
  {
     text:"Best Can wait for this album!! 26/1/15 come on!!!!! "
  },
  {
     text:"Why Why is it only aloud on album ...........……… "
  },
  {
     text:"She can't sing "
  },
  {
     text:"Only love She's a fighter, I really love her. "
  },
  {
     text:"I miss jelena "
  },
  {
     text:"my baby awesomeeeeeeee "
  },
  {
     text:"The Heart Wants What It Wants A love song "
  },
  {
     text:"Selena gomez That song is about her and justin and i love selena gomez "
  },
  {
     text:"AMAAAAAZING!!! SELENA GOMEZ IS MORE PERFECT THAN PERFECTION ITSELF! "
  },
  {
     text:"Brill Amazing album but lower the price a bit "
  },
  {
     text:"Odnsosb Piggy face gomez I love u "
  },
  {
     text:"Love you Your amazing i love you so so so so so so so much your my queen "
  },
  {
     text:"selena gomez love this song xx and love selena gomez be selenator for life xx "
  },
  {
     text:"Loven it Awsome , amazing , fab , my style!The heart wants what it wants well my \nheart wants this albom !!!!!!!!!:) "
  },
  {
     text:"?!?!?!چرا تو ایران این در دسترس نیست؟"
  },
  {
     text:"Greatest hits Pop artist selena gomez "
  },
  {
     text:"Lysm! Selenator *-* "
  },
  {
     text:"Selena Gomez I love your songs "
  },
  {
     text:"it was good and I will always be a great fan of Yours! it just seemed like \nu were not on your \"A\" game!!!!! I think u r a brilliant, talented \nsinger/songwriter & that your life circumstances have really taken a toll \non your music as well! but I can tell u r doing the best u can considering \nall that u have been thru. u have handled it very well! WELL DONE!!!!! :) "
  },
  {
     text:"Knows what we want everytime Every song that comes out of him is tops (gold)! I think his lovin's \nMiranda is bringing the best in him. He probably would do just as good on \nhis own, but, the love of a good woman seems bring out a little more \nsomehow. Blake, keep the love alive and the songs will keep coming. "
  },
  {
     text:"Based on my Story chew tobacco spit This Guy I am loving causing he is so much like my friends from the \nBronx..\"Manly Men\"...it's a guy thing,\"Live a good life b a guy "
  },
  {
     text:"Great!!! Blake has a way of saying what so many more of us want to. He does it in a \nway that either makes you laugh or agree very strongly. I love Blake's \nmusic. Let's hope he keeps this up for a long time. "
  },
  {
     text:"Amazing talent! I really don't think Blake could make a bad song all of em are great! He \nmakes great songs for ever emotion happy, sad, hell raisin, and everyone \nin-between! All around a super great guy and very nice down to earth guy \nwhen ya meet him....oh an beautiful eyes! :) "
  },
  {
     text:"Good I usually don't like country music but Blake Shelton is one of my favorite \nartists ever. He's so good, this album deserves 10 stars. "
  },
  {
     text:"Just love that boys out here. Then says chew tabco chew tabaco. I hate \nchewing tabaco thing but its sounds cool. Oh my son chews @ allso sings. He \nsp unds just like or even better .Allso my oldest son plays drums \nAwwwwwwsom... "
  },
  {
     text:"Based on a True Story Old farts???? Give it up, Blake. We have more interest in good music.And \nhave the money to buy. Be careful who you warm up to... "
  },
  {
     text:"I love everything about this album, and Blake is just So Man, Sexy, down \nright just so Witty and just love him and Miranda. I would say Ditto to all \nthe other reviews that the two of them have made each other better. What \nhas come out from both of them since been together has been incredible, \ntheir Talent has doubled, tripled in these past years. They were definitely \nmet to be together the Awards they have both won amazing. I love them both \nand this Album has his Best on it. Love love. "
  },
  {
     text:"Base on a true story I love blake shelton no matter if he's not married to mariannda any more \nor not. He's good by his- self he doesn't need a women stand beside him to \nmake him look good, lord he's already that!!!. I love you blake, Sara from \nTexas. "
  },
  {
     text:"Based On A True Story Blake is just a\"Bad Mother Shut Your Mouth\".That man is awesome everything \nout of his mouth comes out and who wouldn't want lay next to Miranda every \nnight Blake your my her "
  },
  {
     text:"True country boy Greatest country artist ever! When you look at and listen to Blake Shelton \ncountry doesn't get any better than that..... "
  },
  {
     text:"Just one problem Track 5 eyes will not play, please fix the problem "
  },
  {
     text:"Best country music singer today period. Funny too Same as above, every song is awesome, just buy it because I said so :') "
  },
  {
     text:"Blake has done it again! Great compilation of songs and featured artists. Blake himself is \nfantastic and doesn't need any help making his music country strong!! "
  },
  {
     text:"HE IS AWSOME I REALLY WANT TO MEET HIM HELLO BLAKE SHELTON AND IM 10 YEARS \nOLD AND MY NAME IS LOGAN BLAKE DRUMMOND IM A BIG FAN MY FAMILY JUST LOVES \nHIM BUT I THINK YOU,ERIC CHURCH,BRAD PAISLEY, LUKE BRYAN,kenny Chesney,tim \nMcgraw, and keth urban. Please read this and post back boys round here. "
  },
  {
     text:"Based on a true story This cd has everything you want! It's soft, exciting, loving it is the \nbest arrangement I've heard from Blake so far! Love it!!!!! "
  },
  {
     text:"Min would be you. It remains me of the woman,I Loved with all my heart. TANYA LYNN CARTER. I \nNEVER FOR GET THIS BABE. "
  },
  {
     text:"These aree the songs I like by Blake Shelton Boys around here, God gave me \nyou, Honey bee, Old red, Neon light keep up the good work. "
  },
  {
     text:"I give it 5 stars I like the song mine will be you because I like this girl and it reminds \nme why I fight for her!!! "
  },
  {
     text:"Love it... You know an album is good when you don't skip a song...first country album \nI've bought not disappointed at all.... Hope all his albums are this \ngood...buying all!!! "
  },
  {
     text:"Blake and Miranda Blake is absolutely an amazing artist. Since he's been with Miranda \nthey've both exploded in how good they are.. love, love, love this record. "
  },
  {
     text:"Makes great music I truly like him as a artist. He's not perfect but 9 out of 10 time is \nmusic is great. "
  },
  {
     text:"Blake: Yours is the only country I listen to. Thanks for keeping it real and \nwishful! "
  },
  {
     text:"This is one of his best new albums... Grand daddy's gun is so amazing along \nwith all the rest of the songs ♡♡ "
  },
  {
     text:"Based on a true story Omg Blake' you have got what it takes I love your voice' your face' shoot \neverything about you. Please come to Charlotte, BC soon.....Amy "
  },
  {
     text:"I found someone! Been through hell with past, telling that person it's finally over and \nyou're moving on! Finally!!!! "
  },
  {
     text:"Hunter Redding union country for live go tigers This is what real music is not all of that rap and head banging music. "
  },
  {
     text:"All Blake's songs! #and the voice award goes 2 Blake Shelton! or can that happen "
  },
  {
     text:"Granddadys gun blake Shelton I hated it you dumb drunk guy "
  },
  {
     text:"Best song in history! Please do more great songs. My dad LOVES them! "
  },
  {
     text:"I Love some Blake! His music is just awesome... i love him and his music.. xoxo u rock "
  },
  {
     text:"ONE OF MY FUTURE NEXT HUSBANDS I HAVE ALWAYS LIKED BLAKES MUSIC....BUT THIS ALBUM BY FAR IS THE BEST HES \nRELEASED!!! AWESOME!!! I FOUND SOMEONE EXPLAINS MY WHOLE PAST YEAR OF MY \nLIFE!!! ♥♥♥♥♥♥ "
  },
  {
     text:"Blake Shelton Blake has become known to me from the voice.I fell in love.. "
  },
  {
     text:":D Blake is the best thing that could ever happen since FGL and Luke Bryan. "
  },
  {
     text:"all around great humanbein , didn 't liked it loved it give that boy a five star+ gosh darnit "
  },
  {
     text:"caitlin piercy all of blake sheltons songs are the best i love you so much you are my \nfavorite song writer ever never stop singing country songs "
  },
  {
     text:"A real man True heart Blake.....you are the best of the best....please do more music \nwith Trace Adkins "
  },
  {
     text:"Blake Shelton Its fun I've never really been a listener b4 BT I don't mind this can sit \nbk an have a few "
  },
  {
     text:"Based on a true story Loved it could listen to his music all day and nite he has a wonderful \ngreat voice he is an angle in disguise. "
  },
  {
     text:"They killed every beat in every song. So thats what I most liked about this \nalbum. They had lots of different artist in this so that probably helped \nthem in music wise. Both Chris & Tyga did there parts really well so hats \noff to both them. Chris Brown & Tyga worked really well 2gether on this \nalbum so they should try make another album together. My personal favorite \nwas AYO. "
  },
  {
     text:"Dope AF Best album I'm big huge, large fan of Chris And Tyga and I'm really proud \nof all the work and effort they put in to fan of a fan 2 they are definetly \nbrothers for another mother. Music by themselves is really dope but \ntogether they are unstoppable, Chris has a dope tone of voice, and Tyga has \namazing Rap skills, they really deserve credit and 5 stars. I actually hope \nfor more hit songs from both of them , individually and together "
  },
  {
     text:"Amazing The kings of music... This album is so great. It provides amazing beats \nand lyrics. You can tell they worked there buts off for this. They have \nsomething good happening here. Disserves everything,a Grammy,a moon \nman,EVERYTHING.. love you guys alot "
  },
  {
     text:"Tyga. You done boi. Tyga is trash man. I'm sorry but he been corny since that wack coconut \nsong. If it wasn't for white dudes tryna be hood or bitches who are thots \nand don't know real hip hop, he would be a local rapper and that's it. "
  },
  {
     text:"Fan Of A Fan The Album (Chris Brown) Chris Brown has got some Talant he has to be my faverate male solo artest \npeople have alot to say about him but i always say there's always two \nside's to every story critic's i can't stand um all critic's are just all \njelous T★★T's! Well i say you keep doing what your doing Chris lad your \ndoing a fine Job... "
  },
  {
     text:"Bumpin album! Big ups to my boy Chris Brown showing off an additional \ntalent and Tyga holdin it down. My favorite song is wrong in the right way \nChris 1st verse is an all time favorite of mine. This I will be playing for \nyears to come just like I still play the hot tracks from past years. \nCongratulations on a fun album!! "
  },
  {
     text:"Good beats... but very rapey vibe The flow and beats of the songs are beyond excellent, but the lyrics are \nborderline childish. Its really an album about Breezy and Tyga getting \ngirls in the most ridiculous ways. They believe alcohol and pot will get \nthem with any girl. I wish they used the lyrics in more original way, but \nit sounds like a bunch of 17 year olds fantasizing about getting in bed \nwith everyone and anyone. "
  },
  {
     text:"Fan of a Fan!!! Love it, love Tyga and Chris Brown both great artist. They did it with the \ncollaboration, on this Album. This is most definitely sum that you can turn \nup too in the club!!!! Great work guys keep going hard, Fan of a Fan "
  },
  {
     text:"Fan of a Fan Shows diversity the rhythm and blues side of it sizzles with a hint of \nraunchy and sexy igniting your primal desire for a bit of naughty play and \nfun while the hip hop keeps you fully charged with adrenaline massive beats \ncharm the hidden dancer and rapper that lives in us all. Loved this one as \nmuch as the first collaborative. "
  },
  {
     text:"Perfect blend of singing and rap Even though Tyga is average at best, CB carried more than enough weight \nwith solid features to make this an awesome listen all the way into the \nsummer. Banjo, Nothin' Like Me or Bunkin' will be in a nightclub near you! "
  },
  {
     text:"Masterpiece Awesome collaboration...both Breezy and Tyga really brought unique talents \nto the table. This album in general has got er'thing; old-school, some \nfunky, cali style and RnB slow type joints. Dope. "
  },
  {
     text:":/ Seriously ?!? The beats are on point. I'm ACTUALLY LISTENING to what \nyou're saying- the gist of this album is drugs, money, girls and girls and \ngirls. A whole lot of nothing was said on this album... I'm sticking to \nDrake. "
  },
  {
     text:"THIS ALBUM IS FIRE!!! Man I wish I never overlooked this album otherwise I would have been \nbought it a long time ago. I have this album on REPEAT almost everyday. \nThis album is definitely better than the mixtape in all forms. Both clean \nand explicit versions are good but I had to go with this one cause it's \nuncensored. Awesome job love the album the beats and the collaboration is \none of the best. My favorite song is She Goin' Up. Epic "
  },
  {
     text:"I liked it but I thought the last mixtape they did together was fire. This album I really \nliked only 5 tracks on the album. Could been better, thought it was Lil \nrushed. "
  },
  {
     text:"Two People Who's Music Blends Perfectly Tyga and Chris Brown are two of my favorite hip-hop artists. I love Tyga's \nflow, and the way he can go in on a song, and he makes really great covers \non top of it. Then Chris Brown has really good vocals for the slower songs, \nand is also a pretty good rapper. These two have very similar styles, so \nthey blend quite well. I'm looking forward to Fan of a Fan 2, if it ever \nreleases. Great album. "
  },
  {
     text:"Killed It Chris Brown is an amazing R&B artist. He's so talented. In my opinion, \nthis album sounds SOOOOOOO much better, with him on it. I love Tyga. He and \nBreezy go perfectly together. Chris, you'll always be my favorite singer, \nR&B artist, everything! You're an amazing person. Don't stop, because it'll \nonly get better and better, I know it. Love ya! "
  },
  {
     text:"what happened Ayo is probably the only Good song on here and I only like the chorus. On \nthat note WHAT IN THE HELL happened to Chris brown, back then he had really \nawesome songs I actually had a crush on him. But not anymore his music went \nto hell after 2012. "
  },
  {
     text:"Just why??? Tyga and chris aint bad but cmon they just keep makin songs that sound the \nexact same its always hoes this and that.....wish the old breezy was back \nand tyga stuck solo "
  },
  {
     text:"Aiiiight Some of the beats were too repetitive, I thought I was listening to the \nsame song like three times. But overall it's cool though. "
  },
  {
     text:"Love it! 5 stars... This is one of the best albums out right now! I have a entire list of \nfavorite songs! from \"Ayo\" to \"Remember Me\"...The creativity in this album \n& the artwork is amazing. I would give it 5 stars. "
  },
  {
     text:"Haters Why is there always a hater you mad cuz they get more bitches Dan uuuuu ! \nAnd they got more talent and money than you so PS hop off they dick and get \na life thank you B-D this goes to BK Beast and Jeremy Boqcout good back \ndown me "
  },
  {
     text:"Trash Chris Brown used to be an amazing artist wtfff happened and Tyga is too \nirrelevant to even talk about. Ayo is the only decent song on here. "
  },
  {
     text:"Killed it These Trawww killed it and breezy did best album for 2015 for right now \nuntil ludaversal come it's the best idgaf what any body say "
  },
  {
     text:"Dope This album is super good with some sick beats. Remember me, ayo, lights \nout, girl you loud are the best ones "
  },
  {
     text:"Best song ever This song is great even though I didn't download it yet still good I \nlisten to it it goes good with the picture and everything yeah you did this \nChris Brown "
  },
  {
     text:"Good love this song Oh yea to princess tayna however you spell it you should br grounded for \nlistening to it dont let yo hate on him what if it was you an people give u \nbad comments would you like that umm "
  },
  {
     text:"All his songs Chris Brown is very talented ,handsome, adorable young man.. In my eyes, \nyou're more than a 5 star ,you're the king of all songs, you have all my \nvotes, God bless you, take care of yourself. You are a special man, who I \nlove very much, especially as a fan,friend, my son also loves you very \nmuch... Thank you Chris for bringing many songs to us ,you're doing a great \njob, you're a double platinum, and the best in the world, hope to see you \nin concert soon, ,love ya!! "
  },
  {
     text:"Chris Brown is soooooooooooooooooo stupid stupid stupid stupid stupid \nstupid stupid stupid stupid stupid stupid stupid stupid stupid stupid \nstupid stupid stupid stupid and all of his songs are terrible. He should be \ngrounded grounded grounded grounded gronded grounded grounded grounded \ngrounded grounded grounded grounded grounded grounded grounded grounded \ngrounded grounded grounded for 37,217,247,318,249,329 years. "
  },
  {
     text:"Tyga messed it all the way up Chris Brown didnt disappoint us but Tyga really tries too hard it was wack \nn weak...this should of just been chris brown album "
  },
  {
     text:"Killed It.... Not Really into tyga but him and Chris together can bring it....Chris is \nextremely talented anything he is featured on with his voice he makes \nanything song better with him on it(my opinion) no one can take that away \nfrom him my favorite song on the album Wrong in the right way Chris killed \nit..... "
  },
  {
     text:"XxxxxxxxxxxxxxxxxxxxxxxX I didnt think this album was gonna be good at all. I think its safe to say \ni was wrong, its pretty good! "
  },
  {
     text:"Music This is great motivation to use my voice and sing my heart out. Bow weezy \nI love you:) "
  },
  {
     text:"The most epic album I've ever heard in my life, mixing the right old skool \ninfluences of incredible rap with sick beat and unforgettable lyrics! "
  },
  {
     text:"Fun They're just talking about sex and money and weed, but you can tell \nthey're having fun. It's a fun, nasty album. "
  },
  {
     text:"Hmmm I liked it but didn't love it. It is still a good album s/o to Tyga And \nBreezy "
  },
  {
     text:"3 tracks outta 16 #fail Not worth downloading! Drake mixtape kills their album lol "
  },
  {
     text:"Rubbish Ayo sounds exactly the same as Loyal, the songs have good beats but very \nimmature and irritating lyrics. "
  },
  {
     text:"I love it My favorite songs are girl you loud,DGIFU,AYO,bitches n marijuana "
  },
  {
     text:"Drake drops a suprise MIXTAPE . didnt promote anything and has better \nnumbers then this Album that they been talking about since 2013. they fell \noff bad. smh "
  },
  {
     text:"Its a good album for ppl who like to dance, I would consider it \nlike...\"thot music\" which I'm not a fan of but on this album they had some \ngood songs like remember me, ayo,better and lights out. "
  },
  {
     text:"I don't know What to Say this I don't like You're songs because They are Pretty Bad but. I like You're \nsong called Bang Bang ft. Ariana Grande & Nicki and Flashlight but Not the \nRest of Them because They are pretty Bad because They have some Badwards in \nIt \"Tho!\" but I will Hear the Rest That are um Very Good \"tho!\" "
  },
  {
     text:"Amazing Definitely one of the best albums of the year! Jessie J's vocals are just \nso majestic and the musicality behind the voice just makes everything even \nbetter! The title track \"Sweet Talker\" produced by Diplo caught me by \nsurprise, Just laid back and refreshing! "
  },
  {
     text:"Awesome! I absolutely love this album. Definitely her best. I feel like it has a \nmuch better flow than her last, like there was one solid idea throughout. \nAnd her voice is incredible! "
  },
  {
     text:"Favourite singer Jessie J is becoming my favourite singer. Her vocal abilities are \nunparalleled and then, she also writes her own music. Every song on this \nalbum is special and perfect in their own way. It is one of very few albums \nI can listen to in its entirety without skipping any songs "
  },
  {
     text:"I like to listen to all of Jessie j songs are very awesome and supreme \nsinger and she is a good looking woman and she is very awesome and amazing \nsinger anyway too. I like to listen to all of Jessie j songs are very awesome and amazing \nsinger and she is a good looking woman and she is very talented awesome and \namazing singer anyway too too too too too too too too too. "
  },
  {
     text:"Do it like it ain't been done It really gets out to people who don't believe in them selves ,I \nabsolutely loved it and I've seen her in person "
  },
  {
     text:"SOOO GOOD Jessie J needs to be more popular. Individually, these songs are good. All \ntogether though, this is an amazing album. Keep up the good work :) "
  },
  {
     text:"A piece of great music. I literally love whole her. No doubts I love this album, too! Jessie J is \nmy favorite female singer so far. "
  },
  {
     text:"FINIALLY!! Ive been listening to her since she was underground youtube...glad she has \nbeen able to share her voice with radio listeners too.. great voice all \naround. "
  },
  {
     text:"MASTER PIECE This is beyond on what i thought it was going to be. I am very impressed. \nSuch a talented women. I love all the lyrics of the song. very eclectic "
  },
  {
     text:"Wanna-Be Katy Perry She's awful at imitation. "
  },
  {
     text:"Five stars Speechless "
  },
  {
     text:"Absolutely brilliant! One of the best voices I've ever heard. She's bound to be one of the \ngreats if she isn't already. "
  },
  {
     text:"PERFECT Such an amazing album, I can't stop listening to it "
  },
  {
     text:"Burnin' up This is my best song . I love hearing it looks like it is really popular \nJessie I love your songs XXX XXX "
  },
  {
     text:"Loving it! Just been hearing the sneak peeks on insta and I already love it! Can't \nwait!! "
  },
  {
     text:"Jessie J Omg this album is soo great I actually know every song on the album Jessie \nJ is a very awesome singer "
  },
  {
     text:"This ls the oly one I like so far I did not. Her the others since bang bang "
  },
  {
     text:"So nice, diverse sounds Fave personal said too much and sweet talker and keep us together "
  },
  {
     text:"Bang bang Wahoo all over me?? "
  },
  {
     text:"WOoooooooooooooooooooooooooooooooooooow Like every song love Bunin up "
  },
  {
     text:"perfection You have earned a spot in my heart next to Adele and Tamar lord I love \nyour voice "
  },
  {
     text:"Kaz Topgal need we say more, jes has a bubble ov her own, go gal x "
  },
  {
     text:"Go Jessie j Brilliant album I think Jessie j is going to be the biggest female singer \nin the world "
  },
  {
     text:"Burnin' up Burning up by Jessie J is my greatest song that's out now "
  },
  {
     text:"Omg this blew my mind!!!!!!!! Thank you so much, you are incredibly \ntalented and so therapeutic!!!!!!!!! "
  },
  {
     text:"This is one hot chick that I always love to listen to "
  },
  {
     text:"Love Jessie Jessie is amazing.her vocals are exquisite. She is the best female singer \nin the world. Love her so much xxxxxxxxxxx "
  },
  {
     text:"Amazing Jessie really puts her soul into each of the songs and makes the album \nsound alive. "
  },
  {
     text:"Some songs ok Love most of the songs like bang bang and burning up and others "
  },
  {
     text:"Jessie J ft Ariana Grande and Nicki Minaj "
  },
  {
     text:"Music Put more free music play store "
  },
  {
     text:"We can lesen to the songs if you have a tabet like meiyn its awsome "
  },
  {
     text:"HANLEY GONZALEZ Frozen Elsa Movie Video Frozen Movie Video Part Frozen Movie Video y "
  },
  {
     text:"I love Jessie 's music and I want this album for Christmas!!!!!!! "
  },
  {
     text:"This album is everything Her voice. "
  },
  {
     text:"Vocals are beautiful and jessie j is one of the best singers right now "
  },
  {
     text:"Bang Bang Jessie j air nick "
  },
  {
     text:"Love my girl, Jessie J, and I love this album! Love every song "
  },
  {
     text:"Sweet talker She is amazing even her song cause I'm a sweet talker "
  },
  {
     text:"Best Album Best Band\\m/ I've been a Fooies fan for many years now and the greatest hits album was \nmy first album of theirs. They are simply amazing and live they just blow \nyou away. The most amazing moment was seeing them on my birthday Dec 8th \n2011, I'll never forget that day it truly made me a live long fan of them. \nBuy this album and if you haven't seen them live DO IT!!!!!!!! You won't \nregret or forget the experience\\m/ "
  },
  {
     text:"A showcase album of a modern great! Very rarely does an album's tracklist have you announcing \"Chooon!!\" out \nloud on reading each song down the list...this album, however, smashes that \nmould to smithereens with a sledge hammer and with devil horns aloft!! \nBathe in a plethora of musical genius again and again as one hit follows \nanother in a rollercoaster ride, showcasing the neck tingling power, \npassion and glory of one of the most consistently great bands of the last \ntwo decades! "
  },
  {
     text:"EVery PERSON MUST HAVE THIS CD. WHoLly - THIS CD IS OMG! RAW, REAL, AND LOVELY AT THE SAME TIME. HIGHLY RECOMMENDED \nA++++++++++++ MAJOR SOUL BABY JAM N RELEASE! PLEASE COME BACK TO DFW OR \nANYWHERE CLOSE ENUFF TO DRIVE - WE WILLIAM HAUL OUR FOO FIGHTER BUTTS \nTHERE! I PROMISE! "
  },
  {
     text:"True Alternative If you've heard these guys on album, that's how they sound live. They \nrecord live and how they sound is how they sound. No crazy effects. No \nvoice editing. How true alternative should be. Not to mention all around \ngreatness "
  },
  {
     text:"Love it love it love it I am a huge fan of them and was so happy they put it up I downloaded it \nstraight away and I can't tell you how many times I've played it! Let's \njust say its more than I can count! "
  },
  {
     text:"Good album but DONT BUY FROM GOOGLE Pain in the neck to find the files then when you do they don't have \ncorrect song titles. DON'T BUY FROM GOOGLE PLAY STORE, IT'S CRAP! "
  },
  {
     text:"Excellent music This whole album is mind blowimg. I listen to the whole thing; every song \nis excellent. EPIC. Truly.Makes me feel great and satisfies my need for \nloud raging rock!!! "
  },
  {
     text:"F.F. does it again I have Wasting Light, but sometimes I wonder why I didn't get this album - \nlistening to 'All My Life' as I write this - I knew most of the words when \nI was 6! "
  },
  {
     text:"Wheels Foo Fighters I know what you're thinkin' We were goin' down I can feel the \nsinkin' But then i came around And everyone I've loved before Flashed \nbefore my eyes And nothin' matterd any more I looked into the sky Well we \nall somthing better than We wish for somthing new Well,you wanted something \nbetter than Wished for something true Been lookin' for a reason and \nSomething to lose When the wheels come down When the wheels touch ground \nAnd you feel like its all over There's another round for you Whe "
  },
  {
     text:"Best of the best Honestly Foo fighters is my favorite band. Not only do they write \nmeaningful music, they are so talented. Plus I've seen them live and Dave \nGrohl sounds exactly as the records...truly amazing! "
  },
  {
     text:"Better than Nirvana Although I love Nirvana (They are in my top 5)! I have to admit The Foo \nFighters are a better band! When Dave Group sings you know he puts his \nwhole soul I to! I believe they are the only great band that is currently \nactive! They never fade keep winning those Grammys boys! "
  },
  {
     text:"Greatest hits albums are rarely this great From pop simplicity to syncopated rhythmical weirdness, these guys truly \ncapture mass appeal. I mean, they are simply massively appealing. "
  },
  {
     text:"Very simple I love the style of this band and how actually all of their songs are the \nsame song but with different lyrics, they know how to make awesome musoc \nwith only a pair of chords, that's is what for me, this is the best band in \nthe whole world "
  },
  {
     text:"Foo fighters greatest hits Brilliant compilation of their greatest hits, each one I find myself \nsinging along to and rocking my head! "
  },
  {
     text:"I'm a hip hop/grime scene guy, but yeah Foo fighters are pretty much the only people who have been able to \nconsistently make songs I rate, without being rappers because I just have \nnever found interest in anywhere other than hip hop other than grunge. "
  },
  {
     text:"Learned To Fly Maybe knowing how awesome the video is influenced my opinion... but this \nsong just plain ole rocks! <3 "
  },
  {
     text:"Cooler than cool I won't listen to stupid Jon Wilson he chose a very stupid agreement so \neveryone listen to me and not Jon "
  },
  {
     text:"A must have album for any rock fan. This album does exactly what it says on the cover,it delivers hit song \nafter hit song great sounding rock music that delivers the goods. "
  },
  {
     text:"I have 3 CDs of them! Awesome album if you like loud music. (Nirvana, Offspring, and Creed etc) "
  },
  {
     text:"Awesome One of the best greatest hits compilations around. I never tire of \nlistening to the Foo's, each song sounds fresh every time. "
  },
  {
     text:"FOO FIGHTERS Greatest live performances....it blows ure mind from track all the way \nthru!!! Great energy from a Great band !'' "
  },
  {
     text:"Rock by numbers Probably the best band in the world at making regular rock songs that \nbasically are all the same but with different lyrics. Start quiet, get \nlouder, quiet bit again then loud to fade. Nothing special. "
  },
  {
     text:"Better than most Good but they need to try to be different than everyone else. They sound \nlike nickelback for now. Still ok to listen to. "
  },
  {
     text:"Pearl Jam/All my life Awesome! Rock it when uve had a bad day "
  },
  {
     text:"Tracklist There's so many great songs on this cd its worth getting if you don't have \nany of their albums "
  },
  {
     text:"HANDS DOWN--THE BEST BAND OF THE PAST 2 DECADES!!!! Thank you Dave \nGrohl...You're MY HERO!!! (And hopefully my next ex-husband! !) LOL "
  },
  {
     text:"Good album by a great band It's kind of scary to say this was kind of a disappointment "
  },
  {
     text:"Foo fighter fan If you are going to buy any of there albums buy this it includes one of my \nfavorite songs all my life and the pretender "
  },
  {
     text:"Best album ever! ONLY 2 POUNDS. Wow for an amazing album like this!!! And 'all my life' is \nfree!!! For as little as 2 quid, this is worth every penny if not more. My \nfavourite band and one of my favourite albums "
  },
  {
     text:"Foo Fighters Definitely one of the most solid best of any band albums of All time. A \nclassic. "
  }];
for (var m=0; m<URLS.length; m++) {
  alchemy_language.sentiment(URLS[m], function(err,response){
    if(err) {
      console.log('error', err);
    }
    else {
      console.log(JSON.stringify(response,null,2));
    }
  });
}
