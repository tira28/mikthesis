var watson = require('watson-developer-cloud');
var alchemy_language = watson.alchemy_language({
  api_key: '7974fc4a38f29e63d026577ce977faef818b4b24'
});

var URLS = [
  {
     text:"All about the Bass My 7yr old son and 6yr old daughter love to hear her music it's very \nupbeat and this song should be a tribute to all little girls and women . No \none should make them selves sick trying to be what they are not. I tell my \nchildren love comes from within,don't judge a book by its cover.My 2older \nsons hear this song and say mom not again but I say listen to her .Kids \ntoday need people who tell the truth in music so they listen,not the \ngarbage music that talks about sex ,drugs and money .thank you. "
  },
  {
     text:"Awful x100 Simply awful. Not worth the hype she gets by any extent. Save your money \nand your time. "
  },
  {
     text:"Great music Haters are going to hate. I love that she is being positive for young \ngirls and adults. Truth hurts and its a fact people don't like the truth! "
  },
  {
     text:"The more I hear... The more I hear, the more I love Meghan Trainor! Her 50's inspired music \nhas that fun catchy beat that you just can't help but dance to! It brings a \nsmile to my face every time I hear her music! And I just love watching my \ndaughter, her Girl Scout troop, and all her other friends dancing and \nsinging along to these great songs! Such positive messages for everyone - \nreminding us all to love and respect ourselves no matter our physical \nfeatures! "
  },
  {
     text:"Hope this is just a preview! I look forward to more from her. This EP has a catchy updated 50s feel to \nit but its MUSIC. The stuff that you can actually swing your hips and move \nyour feet to, not booty shake. The lyrics are clear with a positive message \nso sing along and enjoy your day. This is a refreshing change to the pop \nscene. "
  },
  {
     text:"She's going places... My daughter, boyfriend, and I all enjoy all about that bass. She \nincorporates a trinidadian/carribean flare with doo-wop and pop. I feel \nlike she encorporates fun and a bit of humor to her songs which makes it \nfun and enjoyable for her listeners as well. She has had much experience \nwriting hits for other famous artists and I am glad she is getting her time \nto shine. I can't wait to hear more from her. (ps. anyone who says that \nthey like all about that bass and say that her other songs thus far are \nnothing like it clearly cannot hear all the same influences that you hear \nin her debut song...) "
  },
  {
     text:"Sweet Talk about sweet beats. I mean there really good. I listen to these songs \nlike every single day. People who say these songs are stupid are wrong and \njudge mental. "
  },
  {
     text:"Seen it before These lyrics sound like they were taken off of Twitter and the music isn't \nvery unusual. Heard it already. This entire song is pretty typical. "
  },
  {
     text:"Love her spunk!! Awesome lyrics & great classic beats. No matter the subject always upbeat. \nJust makes you want to tap your foot & sing along. "
  },
  {
     text:"Nice but.... I like this album and I am only on the first song but I hate how you have \nto pay 3.00 to listen to a songs "
  },
  {
     text:"Catchy, True, Fun!! These songs are so great! Beat is very catchy and fun to dance/sing to and \nthe lyrics are so supportive and true, definite words girls and women need \nto be hearing. :) This lady is a must hear!! "
  },
  {
     text:"I love it... All about that bass was amazing. I liked it and thought was super \ncatchy... At my school we always have a fun day every Wednesday and we \nalways have a dance off... For the dance off the school picked All about \nthat bass! It was so cool. "
  },
  {
     text:"Leave her alone She is saying like the other person said love me for who I am and like my \nbody big. And that's ok with me "
  },
  {
     text:"Love her sound She has such an original sound. What a talent. Being a singer myself I'm \nvery picky. Cant wait to hear more from her. "
  },
  {
     text:"Great fun music I got 4 songs of Meghan Trainor is Close Your Eyes Dear future husband \nTitle and all about that bass. Thanks "
  },
  {
     text:"Future Husband That song is ridiculously catchy! Though, 'All About That Bass' is a bit \nhypocritical however, its a good song. "
  },
  {
     text:"Good stuff Out there and direct I like it. Tired of the stations over playing her \n\"all about that bass\" "
  },
  {
     text:"Breath of fresh air So different from anything else right now. It's fun, just makes me want to \nget up & dance! "
  },
  {
     text:"Eh The other songs don't really add much reason to enjoy her music at this \npoint. It sounds good but not captivating. "
  },
  {
     text:"Meghan Trainer Brings a little of rock n roll to her songs Elivs Presley feel good music \nkeep it don't change Meghan love it♥♥ "
  },
  {
     text:"I love Meghan Trainor! It'd not Just her music that's beautiful, she is too. Catchy, fun, spunky, 50s-ish and just awesome!!!! "
  },
  {
     text:"Awesome!!! Love her album!! The songs are great and very catchy! Love some of the \npositive messages they send through for example in All about that bass - it \ntalks about how women should flaunt their beauty, and that they shouldnt \nhide it and be embarassed for their shape/size. "
  },
  {
     text:"Catchy! Love this, can't wait to hear what comes next from her. The oldies style \npop music is so catchy, you can't help but love it. "
  },
  {
     text:"Because you know I'm all about that bass All about that bass is an amazing song. Not just that song, but all of \nthem! She has a really pretty voice and the songs make you wanna get up and \ndance/sing to them all day long. Can't wait for the next album of Meghan's! "
  },
  {
     text:"Nice If you think this whole EP sounds the same then you obviously don't listen \nto the lyrics. This is pure genius I can't wait for a full length Lp. "
  },
  {
     text:"Wow I'm speechless! I'm lovin' it. :) "
  },
  {
     text:"Love Meghan. Trainor I have this song dear future husband stuck in my head "
  },
  {
     text:"Clever, funky, eclectic I've listened to all 3 songs plus all about that bass on Pandora and \nthey're catchy, fun, and enjoyable to jam to. "
  },
  {
     text:"I love her voice As some one who likes vocalists that bridge a musical gap, I find it \nrefreshing that she's bringing duwop back into mainstream "
  },
  {
     text:"You tell it girl! I love her lyrics and I love her style. Classic tunes full of modern self \nesteem, confidence and cuteness. I can't wait for more songs from her! "
  },
  {
     text:":) She's on the right track cant wait for more music as she improves! "
  },
  {
     text:"It was a amazing kids album I hope evrebody likes it "
  },
  {
     text:"Awesome Guys you do an awesome job keep it up :) "
  },
  {
     text:"Awesome!!!!!! "
  },
  {
     text:"Back to their best Turn it up, sit back and immerse yourself. After a couple of plays I am \nhooked. Everyone has their favourite Muse album for whatever reason. Enjoy \neach one in their own right. Right now I'm enjoying this one. A bonus for \nme, my son bought me the vinyl double album which also looks great...very \nPink Floyd looking but I'm not complaining. "
  },
  {
     text:"Drones By other band standards: EXCEPTIONAL. By Muse standards: I expected \nbetter. Only a few songs speak to the musical complexity and originality \npreviously showcased. The album's concept sounds edgy but falls flat. \nInstead of originality, the album has mixed audio clips and proven-to-sell \nlyrics made palatable to US teenagers. Bellamy's edginess sounds tamed by \nthe industry, and even the token Muse rift can't make this seem little more \nthan a homage to their previous work. "
  },
  {
     text:"This is some of the ballsiest albums I've ever had the chance to hear. I \nfeel like Muse has moved into Tool/any Maynard territory, where the music \nis always top notch, but the story painted by the lyricist is equal in \nimportance. On top of it, imagine any of this live? As Muse always brings \nit, up on another plane "
  },
  {
     text:":D I have been waiting for this album since 2012 when The 2nd Law came out, \nand I swear to the heavens and back it was very much worth the wait. For \nme, it is right up there with Origin of Symmetry (which is my now joint \nfavourite album). It tells such a powerful story, and it is a clever mix of \nnew and old styles. (I personally love the song Reapers. Definite rec, \nthere.) "
  },
  {
     text:"Fantastic Storyline For me this album told the story of a past rough relationship I had and \nhelped me move past it. This album goes to show Muse can constantly shake \nup their routine and kill it doing so! Great guitar great drums great bass! \nYou wont be disappointed "
  },
  {
     text:"My Favorite Muse Album I love the rock sound Muse had on Absolution and Origin of Symmetry, but \nalso the more pop sound of The 2nd Law and The Resistance. Drones is my \nfavorite because it has both. Reapers, Dead Inside, The Handler and Psycho \nare my favorites. I would strongly recommend a listen. "
  },
  {
     text:"Got it a few days early and this is one fantastic album. It is much closer \nto Absolution and Black Holes and Revelations bringing a lot more heavy \nrock and experimental pieces that will surprise the listener. Some songs \ntake a few listens to feel the deep nature of them, but once understood, \neach song is a force to be reckoned with. From the gritty sounds of Handler \nand Psycho to the ear bliss of Aftermath, Mercy, Drone and The Globalist, \nany listener can find gold here. I couldn't recommend it enough. stop \nwhatever your doing and BUY THIS ALBUM. "
  },
  {
     text:"Muse Does It Again. The songs with exceptional melodic, harmony, with superb selection of \nlyrics. I always find myself listening to their music as load as I can play \non ear buds. Then covering my ears to enjoy the full effect that delivers \nall the way to my core or soul. Time is of nothing when listening. "
  },
  {
     text:"Don't get me wrong but I love Muse and I love this album but compared to \nsome of their other albums, this one just can't quite compete. Songs such \nas Psycho, The Handler and Dead Inside i can't stop listening to, kinda \nlike diamonds in the rough. Buy this album and buy the rest. "
  },
  {
     text:"My favourite muse album to date This treasure trove of filthy muse goodness just passes origins of \nsymmetry as my favourite album. The only problem is you get a sense that \nmuse listened too much to the people who hated the 2nd law. As good as the \nheavy stuff is I also like Muse's electronic side and would have loved to \nsee 1 or 2 electronic songs in here "
  },
  {
     text:"Unfortunate It's unfortunate that this album is so weak (as a whole). I'm not the \nfirst to say it but aside from a few choice tracks it left me wanting more \nthan it was prepared to offer. At least their back catalogue is still up to \nthe task. "
  },
  {
     text:"A worthy entry to their Discography I can't recal how many times I skipped a track from MUSE's previous \neffort. With this album the songs seem to stick waaay better. If you have \nlistened to MUSE before you can expect those little synth appregios, Dom's \ndrum tom thumping, and Queen-like vocals. The biggest let down is that the \nenergy wanes a bit towards the middle. Still Drones is a much more valiant \nand solid effort than The 2nd Law. "
  },
  {
     text:"Gotta say I'm a little disappointed Yes Muse is an awesome artist and my favorite, but after listening to \ntheir music for year, this album feels like is could have been much more \ngreat. I don't get that same feeling as when listening to their older \nalbums. This isn't saying that this album doesn't contain some great songs, \nbecause it does. "
  },
  {
     text:"Better than what I expected and back to top form Well what can I say seen Muse live 7 times and I was a bit sceptical about \nthis new album as I wanted them to go back to heavy stuff, but I really \nlike this album back to there best!!!. Psycho Reapers and The Globalist are \njust aswome tracks, can't wait to see them live again!!! "
  },
  {
     text:"Muse has lost the magic They've continued their downward spiral with this one... Just a few decent \ntracks here, and they don't have the longevity of Muse's earlier \npre-Resistance efforts. "
  },
  {
     text:"If you are already a Muse fan, you will LOVE this album. If you aren't \nalready a Muse fan and like amazing music, you will LOVE this album. If you \nare deaf, ignore everything I just wrote because I don't want you feel bad \nfor missing out on being able to hear this album. If you are temporarily \ndeaf, let this be the first thing you listen to when you become undeaf. If \nyou are a drone, you will not like this album. 5/5, will listen again... \nand again, and again, and again... and again, and again, and again, and \nagain. AND AGAIN. "
  },
  {
     text:"YES!! This album is awesome! It tells a story throughout. Good mix of rock and \neven a little pop-rock. Drones was a little.... well... it's a capella. \nYeah. It grew on my though! The entire album is awesome! Haters are dumb. \nYes it isn't anything new.... but I like the sound. "
  },
  {
     text:"One of the Best In my opinion, this is the best album Muse have produced since BH&R, with \nalmost every track being a classic. I haven't ever actually had a muse \nalbum where there hasn't been a track I dislike, and it's the same story \nhere. On showbiz it was escape, OOS it was screenager, Absolution it was \nruled by secrecy, BH&R it was soldiers poem, The resistance it was guiding \nlight and on 2nd law it was explorers. On drones however, it has been the \nonly album with more than one song I would instantly skip, with 3. "
  },
  {
     text:"#showmeyourwarface An album of epic proportions. Opinion to opinion is a mixed bag but to me \nthis is definitely top 3 of muse best. I'm so happy that Muse have gone for \na heavier sounding album much like linkin park did with the hunting party \nand maybe an influence or two from how awesomely rocking royal bloods debut \nalbum was. Personal highlights are psycho, the handler & defector + mercy \ngave me a starlight vibe & reapers can only be listened one way: LOUDLY!!!! "
  },
  {
     text:"I LOVE THIS ALBUM! I have listened to Muse for a while now, and I've heard all of their \nalbums. I'm so glad they've gone back to their old style opposed to the 2nd \nLaw album. This album is so great! I've been listening to it for weeks. I \nlove it "
  },
  {
     text:"It's OK I love these guys. But gotta say I wasn't really wowed with this one. \nProbably 3 or 4 good tracks, the rest are somewhat subpar. I went back to \nThe 2nd Law after listening to this one. "
  },
  {
     text:"An amazing album. I loved this album. It was way more than I could have expected. But it's \nso unfortunate that my pre-order was mysteriously cancelled against my will \nand I had to find other means to finally listen to it. "
  },
  {
     text:"In all seriousness, these guys are great musicians! However, this album \nsounds like all of their previous albums with a dash of buttrock riffs to \nmake it sound like it's different from the others. This is isn't \nprogressive rock. It's regressive rock. "
  },
  {
     text:"A good album by it's own right...but with only 3 or 4 memorable tracks it's \none of Muse's weaker outings. There are some solid 'classic' Muse riffs as \nwell as moments that remind us of Absolution and Black Holes, but overall \nmost of the tracks feel uninspired and smell of a meddling producer. "
  },
  {
     text:"Amazing album I've been a big fan of Muse since 2003! every song on this album flows \ntogether and tells a story of rebellion, kings and queens, and government \nconspiracies. "
  },
  {
     text:"Meh and slow Why so slow....putting me to sleep. His voice needs a tone down since the \nmusic is way better. He is part of the band not the best part. One song \neven sounds exactly like a previous song sung. Dissapointing. I loved their \nearlier stuff and still wish I could mute his vibrato long notes. Geez. "
  },
  {
     text:"This is such an amazing album and I absolutely love all the songs, which is \nusually rare for me. It features a nice blend of pure rock with influences \nfrom music pioneers in general, or at least that's what I hear. \nAdditionally, the album has a compelling story, told from song number one \nall the way to the very last track, a fact you can see just by looking at \nthe songs' titles. Listen to the lyrics and you have a complete saga. For \nany fan of Muse, this is a must. For everyone else, this is also a must. \nEnjoy! "
  },
  {
     text:"Muse got rid of 90% of electronics and got back to basics. Guitar, base and \ndrums. The album is perfect and in the same ballpark as Resistance and \nBlack Holes and Revelations. "
  },
  {
     text:"This album is awesome Starts off with a mixture of rock music, gets a bit heavier before \nbecoming relaxing, almost Pink Floydish, it's awesome, wasn't too sure \nabout \"Drones\" as acapella, but it's a unique way for Muse to close a fine \nalbum. Good stuff. My favorite is Defector. "
  },
  {
     text:"Another Solid Album This album really grew on me after a couple of listen throughs. Definitely \nrecommend. "
  },
  {
     text:"Great but... This album has some amazing songs like psycho and dead inside which hark \nback to their origins like what was promised. However other songs like \nmercy, though amazing, don't fit the same genre and whilst most are good, \nRevolt is quite possibly the worst song I've heard all year which is a real \nshame. Also as JFK, Drill Seargeant and Drones aren't really tracks, be \naware you'll only be getting 9 actual songs. But it's Muse so still worth \nit "
  },
  {
     text:"Solid album Doesn't blow me away, but the last two albums I grew into over time until \nI picked up the addiction - this may happen here. The only song I dislike \nis dead inside which feels flatter than the normal Muse roller coaster - \ngreat video though "
  },
  {
     text:"Yet another masterpiece! I love this album so much. The songs are a great mixture of what made \ntheir old albums great and the new sounds of their newer ones. And the \ntheme of the lyrics is also very relevant. You won't regret getting it! "
  },
  {
     text:"Chris Very disappointed! I was hopping and expecting so much..oh well \"UPDATE\" \nAfter a few listens, I have completely changed my mind! I now live it "
  },
  {
     text:"I'm completely disappointed with this album. Tons of cliche. Music is poor \nand dull. I think Muse should step aside from politics. There is nothing \nmemorable about this album. Sad. "
  },
  {
     text:"Returned to their roots This is Muse returning to their glory days of OoS and Absolution. \nCompletely stoked with this new album. Turn it up loud! "
  },
  {
     text:"The best rock band I can't get enough of how awesome muse's songs sound. Without a doubt they \nare the best alternative/rock band of the century "
  },
  {
     text:"Too Expensive Good band but not worth paying a premium for their music. "
  },
  {
     text:"The Globalist This album has everything you love from muse. Though a weird last song \n(Drones) everything else is put together fantastically. Get ready to catch \nyourself singing the lyrics, tapping your foot, playing air guitar with an \nimaginary Matt Bellamy, and headbanging constantly to the museic. "
  },
  {
     text:"Wonderful story with amazing melodies First listen through made me question if it was actually Muse, but I loved \nevery second of future play throughs. Each track is great on its own and \ncomplement each other when played in order. Definitely pleased with this \nalbum! "
  },
  {
     text:"Lovely Beats. I get the problem people have,(imo) since kaleidoscope dream had his voice \nutilised more. While wildheart has \"beautiful exit, waves, leaves\" with \ncatchy beats good vocals as always that are forgettable & synthesizers and \nnot enough of miguel's voice. Coffee among Nwa and HD remind me of \nkaleidoscope dream/art dealer chic esque type songs like adorn or all. I \nreaally wanna hear them live since he always kills it. I still love the \nalbum though and still a fan. I just know he can do better. :)♥ "
  },
  {
     text:"<3 Miguel ITS not like his other work because he is an artist. He's evolving. He \ncan't stay the same. He's different and that's what I love about him. I \nlove \" Coffee \" \"Leaves \" \"a beautiful exit \" \"simple things \", \"what's \nnormal anyway \"... Man.. I hope to see you in concert! I'm pleased with \nthis album!!! <3 "
  },
  {
     text:"This album is trash!!! Anyone that gave this album 5 stars knows nothing about music. I'm tired \nof r&b soul albums sounding like their singing rap lyrics!!! Today's music \nis so bad and this generation should be ashamed! "
  },
  {
     text:"It's worth the purchase. Coffee, Waves and NWA are my favorite songs on the album. Although it's \nnot like his first two I enjoyed the album. "
  },
  {
     text:"Expected Better I'm a big Miguel fan and this album just really disappointed me. I've been \nwaiting for his album for the longest and this is a DROP from Kaleidescope \nDream "
  },
  {
     text:"I'm really not sure what happened here. 'All I Want Is You' was pretty \nsolid. 'Kaleidoscope Dream' was a remarkable follow-up. 'Wildheart' is just \nunderwhelming. I kinda want a refund. "
  },
  {
     text:"Miguel wild heart By far Miguel's best work to date. It's the kinda of album you could throw \non and chillax to. Or for some baby making music. "
  },
  {
     text:"5 star officially the album starts off good and then keep going u will come back for more of \nmiguel's..my number one will be 'simple things' second coffee is a topper \nindeed (: no doubt. #summertime "
  },
  {
     text:"Best R&B Album of 2015 Prince+Lenny+Santa with a pinch of Miss Lauryn Hill you get this amazing \nartist. Miguel has always been ahead of his time and he proves it once \nagain with Wild Heart. "
  },
  {
     text:"Don't sleep People need to give this another listen if they don't like it because it \nis a remarkable album. Can't believe the 1 star ratings. 5 out of 5. "
  },
  {
     text:"Great Am I the only one that didn't get the album art?? I'm disappointed that \nits blank "
  },
  {
     text:"I like it He mad the mood of the album so you can have sex to it and you should be \nable to last the length of the album. If not then maybe you wouldn't like \nthe album. I probably wouldn't either if I were you whom ever you may be "
  },
  {
     text:"Not as good as his other albums Older albums are much more unique. This one is OK. "
  },
  {
     text:"Not happy This is not good at all wasn't a good follow up to the last album the last \nalbum was fire "
  },
  {
     text:"Lame Haven't heard anything this lame since ever. "
  },
  {
     text:"Unacceptable This album us a disgrace to mankind I'm sorry "
  },
  {
     text:"This is music? Horrible. Just horrible. I can't believe this guy has a deal. "
  },
  {
     text:"True Art Although nothing will ever compare to Kaleidescope dreams this one will \ngive you pleasure just as easily! "
  },
  {
     text:"Better than kaleidoscope dream. Classic album. I can listen to this album 4-5 times in a row and not know. "
  },
  {
     text:"I like it. I don't really care for about 3 tracks on here. Flesh is the standout \ntrack here. "
  },
  {
     text:"Love I really like his work. Wish he received more success. "
  },
  {
     text:"Its okay Not my favorite album from him but still a good album. "
  },
  {
     text:"???? Not sure what he was going for with this album. I was really disappointed. "
  },
  {
     text:"Its a pretty good album Nothing is always going to be the same but music grows on you just like \nthis album did. "
  },
  {
     text:"Just ridiculous Crazy good album. "
  },
  {
     text:"It's Ok I only like 2 songs from the whole CD...and they are ok. "
  },
  {
     text:"Omg I love miguel si much more than any one does in this world "
  },
  {
     text:"What is he touching can I have sex with you "
  },
  {
     text:"Gorgeous!! I can't stop listening to them and I just...UGH! Just "
  },
  {
     text:"Big masterpiece comeback for Miguel "
  },
  {
     text:"Can't play at all. Bought the whole album of miguel. Can't play at all. Zero star. "
  },
  {
     text:"Great This is a nice c d his music is different from everybody else.....he's \noriginal "
  },
  {
     text:"It's different i guess... coffee my favorite song uhh yeah that is all "
  },
  {
     text:"Obsessed Miguel Killed it "
  },
  {
     text:"Psychodelic mumbling Wtf "
  },
  {
     text:"Awesome!! I loveeeee this album!! Loving the new sound!! Wonderful voice and truly \nenjoying Miguel's growth as an artist!! "
  },
  {
     text:"Awesome Truly a great album \"Do Not Sleep On This One\" "
  },
  {
     text:"Coffee I love coffee amazing Miguel I'm a huge fan of yours "
  },
  {
     text:"Wildheart His concert in Atlanta was just amazing. Great artist "
  },
  {
     text:"Nah Its not bad but its not what i was expecting from him maybe his next album "
  },
  {
     text:"Mjj I love you This album is a fantastic collection of his music from early to late. I \nlisten to it every day apart from when my fiancé threatens to throw it out \nthe window. He just doesnt understand! I love you MJ. "
  },
  {
     text:"L.O.V.E Omg before I knew him I would never know I would find another great singer \nafter I started hating Justin Beiber lol!!! I REALLY hope he didn't die if \nhe didn't I would probably have his autograph hanging on my bedroom wall by \nnow I luv u "
  },
  {
     text:"in the closet yes i will dare u michael! mmmm <3 "
  },
  {
     text:"God bless Michael R.I.P Michel may he rest in heaven amen. I love the song bad now it my \nmost fav now. "
  },
  {
     text:"Black or white That's how we should not view life. We are all red blooded. "
  },
  {
     text:"The world needs Michael Jackson This music was my childhood, I love Michael Jackson really wish he \ncould've stayed longer "
  },
  {
     text:"I love michael I'm making a movie and I will use neither you are not alone or I just \ncan't stop lovin you! Im still deciding! Lol! I loooove michael o much! "
  },
  {
     text:"No Rip for MJ MICHAEL JACKSON is my childhood people say he dead I'm just waiting to pop \nout and be like hehe you thought I was dead.....yeahh he still alive "
  },
  {
     text:"I love MJ Michael jackson had a gifted talent, and his music shows it. RIP MJ, and \nlove the album! "
  },
  {
     text:"Liberian Girl ilovee & miss mj sooo much ♥♥ his music was amazing !!! Nobody else can \ndance or sing like him ! R.I.P iloveyouuu ♥♥♥ "
  },
  {
     text:"I like to listen to all of Michael Jackson songs anyway too. I like to listen to all of Michael Jackson songs are wonderful and amazing \nrock and roll singer and he is a very good looking man who is a good rock \nand roll singer and he is very talented and amazing rock and roll singer \nand he is a very good daddy and he will be missed by all of his fans and \nthat's why because he was a very good rock and roll singer and we will be \nmissing Michael Jackson songs and his ways of performing all of songs with \na good attitude toward all of fans like the good ways of how he was a very \ngood rock and roll singer anyway too too too too too too too too too. "
  },
  {
     text:"Shes Out Of My Life! Seems like he took my feeling about my late mothers death, and put it into \nwords! "
  },
  {
     text:"Man In The Mirror MAN IN THE MIRROR is a great song for relaxing and sleeping, not to LOUD \nor SOFT or HIGH BEAT just right, you're technically just -Playin it Cool- \nAnyway, MUST DOWNLOAD!!!!!!!!!!! "
  },
  {
     text:"OMGGGGGGGG WHY CANT I HAVE MONEY TO BUY THIS?! I FRIGGIN LOVE MJ. "
  },
  {
     text:"Michael Jackson Cannot put into words let me just say he's the King. "
  },
  {
     text:"We cry for Michael Jackson Wish he was with us now R.I.P "
  },
  {
     text:"Best singer and dancer ever!!! It's too bad that u were merderd!!! I have those people that did that!!! U \nr still alive tho!!! In my heart and all ur Fans hearts!!!! I luv u so \nmuch!!! "
  },
  {
     text:"We miss u I love michael jackson you will always be in our hearts r.i.p. "
  },
  {
     text:"forever always I lovve Michael Jackson !!!!!! He insirped lot of young and old people \nwith his music. RIP and Let his music live on "
  },
  {
     text:"Crazy good I stay jamming 2 this all day "
  },
  {
     text:"I love the idea of the song This song is right for me. It is a hit man its good ya "
  },
  {
     text:"Love it Michael the only king of pop n ma heart us for him "
  },
  {
     text:"L.O.V.E IT! I love you michael! Everything about you! You are my life. "
  },
  {
     text:"Michael Jackson is my favorite pop star I love him he will always be my \nfriend I love this song "
  },
  {
     text:"LOVE LOVE LOVE MJ! I mean who doesn't MJ if you see this than find me and knock something \nover! I have a huge crush on you. Michael Jackson live on!!!!!!XOXO I love \nyou MJ. Michael Jackson 4 ever. "
  },
  {
     text:"R.I.P YOU ARE ALWAYS HERE>>>> <3 I love every song! "
  },
  {
     text:"Love every song Greatest hits ever...We miss and love u mike...; "
  },
  {
     text:"Off the scale! Do you really need to rate this one. I mean, really? "
  },
  {
     text:"My heart and soul: Michael in tatted in ny heart forever. RIL My KING OF POP. "
  },
  {
     text:"I love it! But their is no the lady of my life? Love it. "
  },
  {
     text:"I love micheal forever r.i.p micheal love peace. Love micheal king of pop.micheal jackson/mj. "
  },
  {
     text:"The king I love you michael rip your music continues to inspire me and the rest of \nthe world long live the king of pop!!! "
  },
  {
     text:"King of pop You will always be king of pop forever RIP michael jackson:) "
  },
  {
     text:"Michael jackson Omggggggggggggggggggggggggg.I do have money but I am just not alowed to \nbuy the albuem. Nooooooooooooooooooooooooooooooooo. "
  },
  {
     text:"Happy Birthday Michael We will never forget your love "
  },
  {
     text:"Aaliyah The best thing about it is that I know all of Michael Jackson's songs . "
  },
  {
     text:"Mikey I love you Michael Jackson, I just wish I had been able to go to one of \nyour concerts, I miss you "
  },
  {
     text:"YASSS!!!! I love MJ and his songs are amazing!!! 1 out of 1,000, I would pick \n1,000!!! I REALLY wish I had money to buy this!!! MJ is AWESOME!!! "
  },
  {
     text:"Michael Jackson MARION Because of your music I have not felt quite alone...I love you!! Rest in \npeace! ! "
  },
  {
     text:"ahowze I agree, this is the greatest song that I have ever heard "
  },
  {
     text:"BEST ALBUM EVER This is the best album ever produced by em by FAR. People say he went \nsoft, but that's complete bull. One listen to cold wind blows and u know \nhe's not soft. I have been a hardcore die hard Stan since 4th grade, and I \nknow the real slim shady and this is him. This, (Recovery), The Marshall \nMathers LP, the eminem show, and The Marshall Mathers LP2 are the real em \nspeaking amazing lyrics. Not the fake em, on drugs. Anyway, DEFINITELY \nWORTH THE 11.49!!!!!!!! "
  },
  {
     text:"Eminem at his best. This album is a master piece I thank god we have rapper's like Eminem not \nmany can compare to him. This is his best album up to date. That album he \ndropped called \"The Hell Sequel\" wasn't that great. EMINEM'S - RECOVERY \nALBUM SHOWS EMINEMS,TRUE PASSION TOWARDS HIP-HOP / RAP. "
  },
  {
     text:"Eminem recovery I have always been a fan Of Eminem and whenever I heard that he changed \nhis flow so I had to check it out.. I liked it compared to what everyone \nwas telling me I know a lot of people gave up on Eminem after relapse but I \nliked it it was more of the old em more darker then what normal is use to \ncoming from Eminem here lately like with 3 am or medicine ball but hey \neveryone has their own taste in music .. Also glad to here that he is \ngetting his life together.. Hope to hear more from em soon :-) "
  },
  {
     text:"Eminem's Recovery This Album Was Pretty Good. Now First things first. The pros of this \nalbum. PROS: now this album is really good, he's got a nice flow, amazing \nlyrics, very witty punchlines, and (kinda) the beats, cause some of the \nbeats are just meh. Now to get on the Coins. CONS: Guest Appearances from \nbasically all the artist I don't like. The Beats like I said before are \nsometimes meh. Summing it all up the albums pretty good but will never be \nas good as his first 3 albums. My favorite song one there is \"so bad\". "
  },
  {
     text:"Loving the difference I love it whn I hear the difference in styles tht Marshall puts into his \nstyle n levels of his rapping... I am amazed with what he creates n I \nalways look forward to how Marshall improves on his own lyrics n levels of \ntalent!!! Great Job... Marshall!! I knew yu could do it... Keep up the hard \nwork n always kno tht yu hav what it takes to make it to the next level of \nchallenges....!! "
  },
  {
     text:"Good album Im not a rap or hip hop fan. However theres some intriguing about how raw \nhis music is. On some level i can relate.. The great thing about music is \nit is way for people to expresss them selfs. Not all music is great or \nhealthy to listen too. But he is truley being real and that says alot. So \nfor people to to negative you are completey missing the point of his \nmusic.... "
  },
  {
     text:"Eminem once again proves why he is one of the Best The fact Relapse and this album were recorded so close together is \namazing. I believe Relapse is just as good and Eminem proves his lyrics are \nuntouchable. He brings so many hits on this CD and this is THE best \npurchase you can make of any album period. You will not be disappointed and \nprobably will be surprised because I believe it to be his best album yet. "
  },
  {
     text:"Perfection Eminem is the best hands down no questions asked no second guessing no \nnothing. He's the best. But he needs to release that new album redemption \nsoon! I've listend to all of songs so many times now I've memorized them \nall! So hurry with this new album man! "
  },
  {
     text:"Recovery is an amazing album! I love it completely and some of the best songs are Seduction, Not Afraid, \nAlmost Famous, and Cold Wind Blows. I also have something to say to the \nhaters. Look, people have their own opinions and not everyone is going to \nagree with you. Please understand that. Thanks. "
  },
  {
     text:"Great album @juventino: you're comment would make more sense if you knew how to spell. \nBut I agree that there are some rappers who lost it all, but eminem still \nhas it. So instead of stereotyping every rapper, and making yourself sound \nlike the retard, make sure you know what you're talking about. "
  },
  {
     text:"Recovery Album Any & All EMINEM is the bomb!!!!! Can't get enough........it don't take me \nlong to memorize his records, and really enjoy him. He makes me laugh, at \nhis rhymes, and relate to his pain and experiences. Give him a chance, he \nis so similar and relatable, he has a very sweet side also. True Fan right \nhere......Tabitha. "
  },
  {
     text:"Good album but different than the rest. Recovery has a good selection of tracks and nice lyrics, however, the \nalbum is different as the beats are different than the older albums and \nsome of the lyrics are either good or sub-par, hence the four stars. \nOverall, Recovery is a very good album. Although it may not be perfect, its \nstill a comeback for the veteran rapper. "
  },
  {
     text:"Recovery No question one of the greatest hip hop albums there is. Instead of being \nlike all the other rappers and talk about drugs, Eminem shares his \naddiction and how much of a struggle it was. And how anyone else can follow \nhim down the same rode of recovery. Without a doubt 5 stars. "
  },
  {
     text:"Eminem is so bad, that he's so good!!! I loved this entire album - 10 stars!! Eminem is truly a gifted & \nincredible person. Em's work has many healing properties. I love that when \nyou listen to his music again a new layer is unveiled. The negative/false \nreviews on here are definitely too personal - listen to Em's lyricism & \ngrowth. Em is not a \"poppy sensation\". I don't actually purchase CDs or \ndownloads & I ignore the radio but for Eminem I am invested. I write poetry \n& I immediately connected with his lyrics. Marshall stay strong . "
  },
  {
     text:"Not his best I like his new album much better than this one, he gives off this vibe \nthat slim shady is dead on this album but i'll give the benefit of the \ndoubt that he does have a couple of good songs off here. But other than \nthat I didn't care for the album at all "
  },
  {
     text:"Lyrically amazing, music you can feel. Every time I listen to this album I pick up on a metaphor I never caught \non to before. I've read many bad reviews of this album and I don't get it. \nEither people just don't want to like it, or they just don't listen to the \nlyrics because some of three wordplay on this album is incredible. "
  },
  {
     text:"Amazing The album is awsome. It's definitely better than his previous 2 albums \nrelapse and encore. I recommend getting this if you haven't already. I'd \nsay cold wind blows, on fire, and space bound are the best songs off this \nalbum. "
  },
  {
     text:"Way to go!! How can you people hate on EMINEM... Saying he sucks and that everyone \nelse is stupid for listening to this and that he is white? Ima break this \ndown for you guys... Maybe you have the bad taste in music and not the \nother one million people you just called out. And if my first statement \nit's true which it is why are we the stupid ones?? We have the good taste. \nAnd who gives a flying F*** if he's white... Grow the hell up and notice \nthat anyone can be anything... Even a multi-platinum rapper. I rest my \ncase. "
  },
  {
     text:"A real review. I'm a hardcore Eminem fan, and have been since I was in 2nd grade. Don't \nget me wrong, anything produced by Em is brilliant, but this is nothing \nlike Slim Shady. Real fans know this isn't his best "
  },
  {
     text:"Great but not his best I'm I really big Eminem fan. This is by no means his best album, however \nthis is still a great album. I'd say my favorite albums by him the Eminem \nshow and MMLP2. But what songs make this album so great in my opinion is No \nLove and Not Afraid. "
  },
  {
     text:"Eminem: Best at the Technical aspect of Hip-Hop Every song is full of the best word play, flow, metaphors, and story \ntelling you'll hear. There is a reason no Artist comes after Eminem. He is \nthe best alive. You can easily listen to the whole album with out skipping \na song. If you've ever been through a big struggle in your life you'll \nappreciate this album. "
  },
  {
     text:"Great You either like this album or you don't. Slim Shady isn't a big part of \nthis album but make no mistake, the Marshall persona is just as good. \nUpbeat tempo and great music. Not his best work but it's way better than \nEncore and Relapse. "
  },
  {
     text:"Reality check This album is amazing. I cant understand why people complain about it. Yet \nthere out there listening to crap like little wayne and PSY. I cant believe \na korean artist blew up in the USA. You guys are all pathetic "
  },
  {
     text:"NO WORDS Hater if you cant say anithing good about eminem shut youre pie hole cause \nat 40 yrs. He still the best and he always will "
  },
  {
     text:"Real Hardcore fan of Eminem... I see alot of ppl saying this wasnt his \"best\" or not that great or miss \nthe old slim shady...I dont give a hoot! Allll his songs are amazing to me! \nI ABSOLUTELY adore this goddamn man! Since I was a little kid when my \nparents pretty much grounded me whenever they heard me playing any of his \nsongs in my room was so worth it!!! In MY opinion this album is incredible! \nJust his lyrics on his real life experiences is what really had me fall in \nlove with him. Shady till I die!!! "
  },
  {
     text:"Let's be honest Someone who considers their self a true fan can't criticize the master at \nworks, work I mean come on your not selling millions so don't be rude just \nbecause you don't like something, personally I think Em reached a new level \nof modernism with his new stuff and it's quite amazing. "
  },
  {
     text:"@Juventino If u don't like it, then there's no need to tell the whole world. I agree \nwith you there are some awful rappers. But there's about one or two good \ntracks on here. "
  },
  {
     text:"Greatness I been listening to eminem since his first album was out. This last album \nis his best masterpeice yet. More meaning behind his music. For the ppl \nhating, dnt listen plain n smple "
  },
  {
     text:"Great Lyrics I like every Eminem album beside Encore and Relapse, but how ever he was \non drugs on those albums. My favorite song on this album is Cold Wind Blow \nand my all time favorite is Superman "
  },
  {
     text:"Love it It is true that I just love Eminem, but this album is awesome and most \nEminem fans would say: You don't know the real good albums by Eminem. Well \nI do,but there is something in this album that makes me like it a lot maybe \nthe lyrics. I don't know. It's an awesome album download it !!!! "
  },
  {
     text:"Fan Since Soul Intent! I noticed people claiming this is not like his old work. This rather \nsounds like Infinite and SI days when he first started. Definitely one of \nhis best imo since it has a feel of his actual old albums which I love. "
  },
  {
     text:"Naht dat good I lkked eminems old songs like lose yorself and stan and toy soldiers and \nso on not much a fan of any surely hes done better I only like \"not afraid\" \nevetything else sucks sry but it does I know he could have done better but \nI think this is his only bad album "
  },
  {
     text:"Yessss!!! Eminem is by far the best rapper! Even tho this cd doesn't have Slim \nShady, its still one of his best! I love Cold Wind Blows, Cinderella Man, \nSpace Bound, and Won't Back Down! "
  },
  {
     text:"To the commenter below me. First form a complete thought, then put that thought into a sentence. A \nsentence that can be understood. Before you can call someone stupid, make \nsure that you, yourself isn't indeed stupid. You hate on people for liking \nmusic? Sure not all rap is good, but Eminem has an intelligence in his \nlyrics rarely seen by other rappers. Not all rap music is the same, don't \nlistento it if you don't like it. It's that simple. "
  },
  {
     text:"not slim shady, but rappers /people evolve. it's not psychotic slim, but he still is has \nan intriguing way of telling a story. not just making words rhyme in time \neat a lime and think it's great "
  },
  {
     text:"The best Eminem album ever I can truly say that Recovery is my #1 favorite album by Eminem he killed \nthe Slim Shady gimmick & just became a positive Eminem off drugs & became \nhella lyrical Recovery is when Eminem made his comeback NOT MMLP2 my least \nfavorite Eminem album is Relapse he totally could have did better with that \none but I was a lil disappointed when he went back to Slim Shady he should \nhave stayed as Recovery Eminem fact not an opinion. "
  },
  {
     text:"Can't really go wrong You can't go wrong with Eminem. Still my least favorite album of his. Way \ndifferent. Still an amazing album in and of itself. Favorite song has got \nto be Not Afraid, but the rest are pretty good too "
  },
  {
     text:"Would pay any amount of $$... ...to somehow be Eminem's thoughts in his skull for 1 day, heck 1 \nhour...how can 1 man pump out bar after bar, hit after hit, album after \nalbum all in different voices, styles, tempos, speeds, lyrical mad \ngeniusness, rhyming 2,3,4,5... words in 1 line at times, dissecting words \nso that the symmetry is all there all while staying true to his art's \ncommon theme of controversy, anger, addiction AND not once using the N word \nlike EVERY rapper out there has to in order for words to rhyme...how?! He \nsimply is amazing, doesn't get enough credit if that's even possible... "
  },
  {
     text:"Best Hip Hop Album Maybe Ever Call me old fashioned but I liked the days when hip hop had, you know, \nlyrics. Crazy, I know. Better than Curtain Call. He lost it for a while and \ncame back harder than ever before. Might be the best album ever. "
  },
  {
     text:"Dam!!! He proved there is not one person that is even on or near the planet he is \nlircaly . He is lircaly the greatest MC ever PERIOD!! So u that dont get it \ntake Big L, Biggie ,Tupac,Rakim, T.l, Outkast, with Dre back most beats. \nWrap it up. No one puts it down like Eminem. The way he puts tracks \ntogether is lircaly untouched . Its heart mind blood sweat tears and pain \nput in a way noone can touch. "
  },
  {
     text:"FRICKEN LOVE IT I love this album so much! The quality is so good. People were telling me \nthat live albums don't sound good but this album impressed me! Still can't \nget over the fact that it's placed under the \"pop, teen pop, 10's pop\" \ncategory but I'll live. "
  },
  {
     text:"I love 5Sauce This band and there music helps you through most of your problems anad \nthere the vest looking band in the world. This album just shows how amazing \nthey are and how much support the 5sos fam has for them. I love you 5SOS xx "
  },
  {
     text:"I love them and their music a lot. Its so out there that they don't want to \nbe known as a boy band, but a rock band. And they can get to that level! So \nproud of them. Fan from the beginning! "
  },
  {
     text:"No I don't love this album I'm obssesed with 5sos not like stalker obsessed (chill out) I'm addicted \nto your music basically I listen to it all the time and when my teacher \nnamed her son Calum,i literally flipped out lol I love 5SOS "
  },
  {
     text:"5sos is the best Im so happy i bought this its like experiencing them live all over again \nwhen i went to there concert at the forum on the 16th. Honestly no regrets, \nive loved them for 2 years now and i can never explain how proud i am of \nthem for everything they have accomplished. They literally make my life a \nbillion times better and they brighten up my day when ever im feeling down. \nThis album was a genuine idea they came up with for all the fans that \nhaven't got to see them in concert, which is really cool. "
  },
  {
     text:"Wow! American Idiot and Teenage Dream! And they actually sound good...... \neveryone can love 5SOS.. I'm not a girl and they're still good... lol xD :) "
  },
  {
     text:"Literally amaze balls I never thought I would love this kind of music but when I heard 5sause \nfor the first time I fell in love. It was always just ❤One Direction❤ for \nme but now thanks to them I have discovered my other boys. I love them so \nmuch and I'm so proud of how far they have come. Amazing work. I love their \nmusic!!!!!!!!!!!!!!!.❤❤❤ "
  },
  {
     text:"I NEED THIS RN Omigosh I love them so much and I absolutely cannot wait until this comes \nout!!! Too bad I don't have enough money to get this, lol. "
  },
  {
     text:"LiveSOS, 5 Seconds of Summer I'm broke and am so saving up for this. These guys are the only band I \nfollow and completely support. THEY ROCK!!! "
  },
  {
     text:"Luv 5SOS!! Im so happy I got this. For the past weeks this is all I listen to now. \nEEEEEEEEP! I cant wait to go to their concert in Perth. Luv these 4 idiots \n:) "
  },
  {
     text:"Baes I love them so much. I wish I could see them but its hard when you have \nfinancial problems "
  },
  {
     text:"Is It Hi or Hey? I have been a fan since the hemmo1996 days. I've been here longer then \nAsh. Now that they are becoming huge! Sometimes I feel sad because they \naren't a secret anymore, but I also feel like a proud momma... "
  },
  {
     text:"THIS ALBUM IS SO GOOD. I NORMALLY DONT LIKE LIVE VERSIONS OF SONGS BUT I \nENJOY HOW THE FANS SCREAMS ARE LOWERED AND YEAH. "
  },
  {
     text:"Why!! Why do you guys have to kill so many people with great music and such \nbeautiful faces like holy fuck, did u know that you can go to jail for \nthat??? Jesus christ, and such amazing personalities, like fuck i think i \njust reincarnated "
  },
  {
     text:"5 seconds of summer THIS FUKIN ALBUM ROCKS. 5SOS IS LOVE 5SOS IS LIFE GET THIS ALBUM ITS WORTH \nIT AND YOU WILL I GRANTEE YOU WILL CRY AND SLOWLY DIE ❤ "
  },
  {
     text:"NEED I'm gonna save up (I'm broke no kidding XD) so I'm definitely getting the \nalbum because I love and support them I was actually subscribed to like \nwhen he had around 300 subscribes so I'm really exited how far they've \ncome!!! "
  },
  {
     text:"OMG my favorite part of being a fan This has never been done before so they are on top In the music industry \nand I will Preorder this live album ❤ "
  },
  {
     text:"5 Seconds of Summer 5 Seconds of Summer saved my life. Luke Hemmings and Calum Hood Michael \ntaught me how to express myself and not care what others think. "
  },
  {
     text:"Loved it is not the word This cd is well amazing bought it and cant stop listening to it i did not \nloved it i am obbesed,addicted to itn "
  },
  {
     text:"Ugg!! I love love love the boys I've followed them since Luke's first cover and \nI'm so proud! And I'm fangirl way to much right now xx "
  },
  {
     text:"Best live CD I usually don't like live CDs but this one is great. It shows how much fun \nthey have on stage. It gets me excited for my concert. :) "
  },
  {
     text:"I'm broke now lol It is worth it and I'm really excited "
  },
  {
     text:"broke af I haven't listened to it yet but I know it's gonna be great even without \nlistening to it x "
  },
  {
     text:"Looveee this The only reason I'm not buying it is cos it reminds me of how I'm not \ngoing to see them so I get really upset "
  },
  {
     text:"OMG!!!! YES!!! This is the best band live in the world im telling you. Its like listening \nto the studio version but with screaming girls in the background. Love it \nto bits everyone should get this its just OMG! "
  },
  {
     text:"LIFE I seriously love this band so much. Just a lil confused that its under \n\"teen pop\". Dafuq? "
  },
  {
     text:"Amazing! Defo recommend if ur in need for a new,genuine&amazing album! So \nproud&can't stop listening to this along side the album which is not live "
  },
  {
     text:"ITS 5SOS WELL IN THE YEAR OF 2012 I FELL IN LOVE WITH 4 IDIOTS AND THEN HERE WE ARE \nNOW ME PRE ORDERING THEIR ABLUM AND WISHING I COULD BE A NORMAL TEEN. so \nthank you boys. for ruining my life. "
  },
  {
     text:"I NEEEED ITT IM BROKE AND NEED MONEY TO BUY THIS BC ITS AMAZING AND I CANT WAIT I WILL \nDIE SO IF SOMEBODY COULD JUST GIVE ME MONEY TO BUY THIS I WILL LOVE YOU \nFOREVER "
  },
  {
     text:"I love this album!!! I've been wanting this for ages so glad it finally came out!!! IT IS THE \nBEST THING YOU WILL EVER HEAR "
  },
  {
     text:"Best live album I love to hear the screams and scaring people with the noise "
  },
  {
     text:"Wish I had money I want this so bad!! I love them so much. And it would feel like I was at \na concert "
  },
  {
     text:"Amazing I screamed just as loud when i heard this album. Can't wait to see them \nlive this year. Good job boys xx "
  },
  {
     text:"LOVE 5SOS I'm 5SOS AF AND ITS WELL WORTH YOUR MONEY BUT IM BROKE NOW "
  },
  {
     text:"LIVESOS This live album is absolutely amazing. I love all the songs but my \nfavourites are Beside You and Disconnected ☺ "
  },
  {
     text:"AMAZING I've been a fan of 5sos ever since Teenage Dirtbag. They are crazy \ntalented! I think it definitely shows how passionate they are about their \ncareer in this album. "
  },
  {
     text:"THIS ALBUM IS BOMB I LOVE THIS SO MUCH BECAUSE IF YOU CLOSE YOUR EYES, YOU'RE ACTUALLY \nTHERE!!! THIS IS SO UNIQUE. NOT MANY ARISTA DO THINGS LIKE THIS "
  },
  {
     text:"If there isnt moments of Michael Clifford or Ashton Irwin \ngrunting/screaming....I'll want a refund. "
  },
  {
     text:"I LOVE 5SOS!!!!! Everyday I will go home and put in this CD, and I get upset because I know \nI might not ever see them in concert!!!! I love you 5so!!! "
  },
  {
     text:"MY BOYS ❤ I'M SO EXCITED FOR THIS YOU HAVE NO IDEA OKAY I'M NOT EMOTIONALLY STABLE "
  },
  {
     text:"I ♥ One Direction. Liam, Harry, Louis, Niall and Zayn if your reading just \nknow I love you guys and that this is the best album ever!! Great album!! I love One Direction because they always put so much effort \nin to please their fans. They always give what they do their all. The \nhaters are just jealous that they don't have talent like 1D do. I'd like to \nsee the haters go away on tour for months on end and leave their families \nbehind. One Direction don't rely on their obvious good looks, they put in \nevery effort to make songs with meaning. Just because they have \nextraordinHARRY lives doesn't mean they are any different from the rest of \nus. "
  },
  {
     text:"Bro Just saw your Midnight Memories album with more songs on it! Why? Why \nwould you do this??? Oh my gosh DX. Ugh. Well, see ya later. I'm off to buy \nthat album. Keep up the good work and happy holidays <3 "
  },
  {
     text:"Wow the new Beatles! Bow down, everyone.. Guess if these are the modern equivalent of the Beatles, then Bieber is \nthe new Bob Dylan. Seriously though, is there a point to this other than to \nmake loads of money for a bunch of guys with very limited talent? An \nartistic statement, not. "
  },
  {
     text:"OMG ILYSM I just love One Direction sooo much! They have done sooo much for me. I \nknow we haven't met yet but we will someday. They dramatically changed my \nlife and idk what I would do without them. ~Harry's mine~ sorry I crushed \nyour dreams haha "
  },
  {
     text:"Great Album People that are giving this album an rating below 4 stars are just dumb. \nThis album is NOTHING like the first 2. They grown and matured. Don't \nbelieve me? Listen to WMYB then listen to little white lies, you'll see the \ndifference. "
  },
  {
     text:"Trent Cullum You need to be put in your place, 1D are amzayning they are no wannabes. \nThey are internation superstars, best song ever is called that because \ntheir saying to dance to the best song ever. And anyway i haven't heard you \nsing, so if you think you can sing go on the X factor! (P.S. im a \nDirectioner) "
  },
  {
     text:"I am crying sooooooooooo much. I can't take this. I love you boys you make \nme happy when I'm sad l what you to stay l what you to stay ohohohohohoh I love 1D really much i'm a fan of them. Like other fans. I love you 1D \nI'm a fan but I do not like the ones who didn't like the ones who do not \nlike them. I do not like the direction naters. Good job boys. God bless \ndirection naters "
  },
  {
     text:"My daughter loves it OK my daughter is like in love with them. She loves their music. She told \nme her dream is to finally meet them. She is so obsessed. Also they said \nhe'd name in the best song ever video. She almost cried "
  },
  {
     text:"I'm crying its so amazing One direction I love you so much. These songs have meanings to them and \nits not just crap songs withought a meaning. Onece again you have made \nanother amazing album and made your directioners proud to be directioners. "
  },
  {
     text:"Its fine My only problem is that in order to get every song on the album you have \nto pay like 4 more dollars. On the regular one they tip you of four songs. \nIts so stupid I'm actually really irritated "
  },
  {
     text:"So proud I am <3 Love this ,amazing album so far best album going ane just because people \ndont like one direction theres no need to call them what have the done to \nyou nothing! Disgusting people calling them just because they dont one \ndirection it like me callin black veil brides anyways I love you guys keep \ngoing in life you amazing you made me smile every day I love you Harry E \nStyles xx<3 <3 <3 "
  },
  {
     text:"Used to love them They're growing up and I'm not really into them that much. I used to have \n1d towels, dressing gown, fleece and loads of other 1d stuff but now they \njust bore me. Sorry 1d "
  },
  {
     text:"My daughter is not even 3 yet but she adores One Direction. If she's not \nlistening to the songs shes watching the videos....had to order her a \ntshirt today :-) Fab "
  },
  {
     text:"I love you one direction They've been so brave and strong taking all the hate and flushing it all \naway! They've also learnt a lot and I bet all directioners will agree with \nme! Seriously I know it sounds cheesy but they've literally turned my life \nupside down! I don't know what I'd do without them!!!!! Haters are going \ndooowwwwwnnnn! "
  },
  {
     text:"... My friend loves this band and she told me to buy the album. I listened to \nit first. These songs are the most mainstream, overplayed songs on the \nradio. All they sing is love songs. They're not very deep ones, either. I'd \nrate it 0 stars if I could. "
  },
  {
     text:"Amazing!!!!!:-) I absolutely love them! Their albums get better and better! To all those \nhaters just take a second to listen to their music. And I bet you won't say \nthat they are the worst band ever again! "
  },
  {
     text:"Great. Perfect. IDK. Im barely hearing it now but its amazing boys you did an amazing job wity \nthus album I can already see everyobe saying great things on midnight \nmemories Im just so proud of you guys thank you Niall Louis Liam Zayn & \nHarry thank you for making a muxh better person and addinf happiness in my \nlife ♡ "
  },
  {
     text:"Best Album Ever!!! I♡1D This album is AMAZING!!! I mean like they are all ages between 19-21. To \ndo ALL of this in such young ages is fantastic, hats off to them!!! I feel \nsooooo proud that I am a directioner! I Some people make fun of 1D and I \ntell them you have no right to make fun of One Direction! Now that is the \nreason why I ♡ One Direction and their new album Midnight Memories!!!!! \nI♡1D! xx I would also like to add that I L♥VE Harry Styles!♡!♡!♡!♡!♡! "
  },
  {
     text:"Wow Im a complete directioner and ANYONE who thinks this album is bad needs to \nget there ears checked!!! Its much better than there old ones because they \nget better as they go on!!! THIS IS THE BEST ALBUM I HAVE EVER HEARD!!! "
  },
  {
     text:"There's nothing better than this album! Ok this album is pure perfection. I've been a proud directioner for a long \ntime and this album is PERFECT, so sorry... your arguement is invalid. :) \n~Niam Girl x "
  },
  {
     text:"I love One Direction! Their music is getting better and better as they get older! Compare What \nmakes you beautiful to Midnight Memories or Happily it has matured since \nthen. I love you and never stop! "
  },
  {
     text:"Hate there music I hope your reading this one direction Your music makes my ears bleed it is the crapyist music I have ever \nheard.you are the worst band I have a burning pashin for hating your band \nit's so stupid I hope you actually to your music next time. Look actually \nsing next time. Yours truly the one direction hater "
  },
  {
     text:"Horrific Just appalling. What is the music industry coming to. I have more talent \nin my left testicle 0/5 stars "
  },
  {
     text:"SO BAD! They Are Just In It For The Money ! Ha! Best Song Ever? More Like Worst "
  },
  {
     text:"I LOVE YOU ONE DIRECTION!!! I love this album it always makes me think of Larry. I hope Larry \nStylinson comes out soon because Eleanor is just a piece of . Anyway, im in \n5th rade and my senior trip is tomorrow! I LOVE YOU LARRY STYLINSON!!!! "
  },
  {
     text:"Extremely bland I might actually like 'Story of My Life' if it wasn't so overplayed. As \nfor 'Midnight Memories', I don't understand how anyone could listen to it, \nlet alone enjoy it. "
  },
  {
     text:"ONE DIRECTION I CRYED LISTENING TO THIS ALBUM. SECOND BEST ALBUM FOUR IS THE BEST THAT \nMADE ME CRY WHEN I GOT IT NOW I HAVE ALL OF THEY ALBUMS "
  },
  {
     text:"Best album yet Im so proud of 1D because they learned alot over the years and they're \ncarear has gone far and i know that they have worked very hard on this \nalbum thats why its so good "
  },
  {
     text:"I love it I love their music and songs, they have made another great album. GO ONE \nDIRECTION! And for you haters GET YOUR EARS CHEKED "
  },
  {
     text:"NO NO NO! Don't even think about saying that i suck. I FLIPPING HATE THIS BAND! ITS NOTHING BUT G4Y CRAP CRAP CRAP CRAP CRAP \nCRAP CRAP CRAP CRAP CRAP CRAP CRAP!!! WORST BAND KNOWN TO MAN. AND YOU G4Y \nBOY BAND LOVERS BETTER NOT ARGUE WITH ME! They have greasy hair with lice. \nAlso need to die in hell! Weird thing, \"best song ever\" hah!!! Talk about \nso called! ALL 1D HATERS, JOIN MY ANTI 1D CLAN!!! "
  },
  {
     text:"Fact One direction is worse than garbage. Don't waste your money on this \nrubbish. I feel like my ears will fall off when I listen to them. Who even \nbuys this trash? "
  },
  {
     text:"Sorry but... In my opinion the song midnight memories sounds like a high school musical \nsong. I dont know why but I hate one direction :/ sorry directioners. You \ninly like their looks! Sorry if I have it wrong but, yeah. Im part of 'the \nwanted fanmily' because of their amazing music. Their music actually has \nmeaning! "
  },
  {
     text:"Directioner forever! I love their music. To the people who send hate to them, you're \nirrelevant. Kay, byee. "
  },
  {
     text:"Albume,midnight memories 1D is sooo great,I totally love it,and for those who don't like \nthem,there's something called respect for other people,keep your commemts \nto yourself,you don't have to spread it everywhere,act like a mature person \nfor Gods sake,ughhh "
  },
  {
     text:"Best album ever The best album by the most talented guys (especially you harry!!!!!!!) \nAnyone who says its at all bad must not have heard it :-) you mean the \nworld to me guys (harry the most) keep on being amazing xx (Diana, happily, \nstrong and you & I are my faves) "
  },
  {
     text:"ABSOLUTELY AMAZING!!! Once again, One Direction has made me soooo proud to be a Directioner. I \nlove them all so much an d I cannot wait to go to their concert next year. \nAll 5 of these boys are extremely talented and their music is so \nbeautifully written and sung. Thank you Harry Styles, Zayn Malik, Louis \nTomlinson, Niall Horan, and Liam Payne for making me happy for all these \nyears, and many more to come!!! This is definately an absolutely amazing \nalbum! <3 "
  },
  {
     text:"Album of the year ♥ At their young ages, they have achieved so much. 2 world tours and 1 \nupcoming world stadium tour, 3 albums, the best fan base ever and tonnes of \ncash. This is definitely their best album yet and i will be buying it on \nall devices capable of downloading it. Good job boys ♥ "
  },
  {
     text:"Midnight Memories How can you not love these lads! They're so talented & gorgeous to boot! I \nam a Mum Directioner & my girls love them too! I liked them first! "
  },
  {
     text:"Worst Band Ever Best song ever? Holy think-a-lot-of-yourselves, batman! Man someone needs \nto put these wannabes in their place. Almost as bad as pus-tin beaver and \nmiley 'waste of space ' Cyprus "
  },
  {
     text:"Crap Most of my friends like this crap. Get the taste for Black Veil Brides \nthere not much older and are awesome. "
  },
  {
     text:"CLASSIC STRAIT Another classic album by \"The King of Country\" this one I can listen to a \nlot while having a cold beer & talking with a friend or several of my \nfriends. Which sounds ironic since that is the name of the album itself. A \nCold Beer Conversation. LOL :-) "
  },
  {
     text:"Cold Beer Conversations Pure fantastic! "
  },
  {
     text:"The King of Country, forever They just don't get any better than this boys and girls. "
  },
  {
     text:"Cold Beer Conversation Long live the King that is all. Respect "
  },
  {
     text:"George Strait Simply amazing!!! This is true country with meaning, not hip-hop with \ntwang (Luke Bryan). "
  },
  {
     text:"Good album George is Classic country singer! Great album. The more you listen to \nalbum the you will enjoy it. "
  },
  {
     text:"Zzzz Country all sounds the same. Crap "
  },
  {
     text:"Another great one! It's not possible for George Strait to make a bad album! This is real \ncountry music from a legend. "
  },
  {
     text:"Cheaper than a Shrink Can't stop humming this one, "
  },
  {
     text:"This is what country music should sound like "
  },
  {
     text:"Not his best but it's still way better than most country music being \nreleased these days. "
  },
  {
     text:"Great Songs I love the new songs especially Cold Beer Conversation! "
  },
  {
     text:"Amazing shot of real country About time we got a new album of real country, thanks. "
  },
  {
     text:"George strait , el rey ! 64 platinum albums speaks for itself . "
  },
  {
     text:"Amazing My favorite besides Willie, Hank, Cash, Rogers, and Brooks!! George has \nbeen my favorite since I was a baby!! "
  },
  {
     text:"Oh man George Strait is hands down the best artist to ever sing country. Thank \nGod for George. "
  },
  {
     text:"Awesome! Pure Straight Country! "
  },
  {
     text:"He does it again! I mean, it's George Strait. 5 stars for days! "
  },
  {
     text:"New Album from George Strait Very cool album by him. I love it! "
  },
  {
     text:"Awesome... Someone keepin it real country "
  },
  {
     text:"It's George freaking straight "
  },
  {
     text:"Long Live the King of Country "
  },
  {
     text:"Cold Beer &Conversation \" FANTASTIC, Another Strait WINNER !!!!!!!! "
  },
  {
     text:"Love George Strait! Not one bad song in his career! "
  },
  {
     text:"The King of Country, how would you describe his music? "
  },
  {
     text:"ALWAYS THE BEST!!! Every George Strait album is ALWAYS superior. "
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
