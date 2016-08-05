var watson = require('watson-developer-cloud');
var alchemy_language = watson.alchemy_language({
  api_key: '3a24fe0b26899623c12675e18b576a5fb882a0fa'
});

var URLS = [
  {
     text:"Amazing angel He is freaking ah-mazing his voice is so soothing and angelic. I <33333 \nhim. I could play this album all day everyday & never get tired of it! "
  },
  {
     text:"Ginger jesus He is so perf, I love you need me I don't need you, lego house, a team, \nand little bird. I am a hardcore sheerio its not even funny. He is so \namazing and beyond talented. Ilysm. "
  },
  {
     text:"Chronic penguin Thid album is legit amazing...i only bought one song, heard it m just \nbought the whole album...great music is hard to find nowadays amazing work "
  },
  {
     text:"amazing I love ed much I know everything about him and one day I will meet him lol \npeople ask wh do you love ed like that they hate him so I give them my \nphone wih my headphones and make them listen to this cd and then they never \nsay anything .... see its true ed mkes everyone breathless; "
  },
  {
     text:"He's amazing Every single one of his songs are amazing I listen to them every day. His \nsinging is amazing and his voice is perfect for the song. "
  },
  {
     text:"Ed is amazing. Omg his songs r so touching they will make u cry if u relate to them, even \nif u don't. He is just amazing. "
  },
  {
     text:"Ed Sheeran is Amazing Anyone who says Ed Sheeran is annoying are wrong he is a role model and \nhis songs are lessons A Team is great and the rhymes are good not \ndisgusting you need to find your music taste mate he is brilliant and you \ncant judge his songs because if you tried it would be difficult and the \nresult would be poor. "
  },
  {
     text:"What a debut album! My favourite songs are drunk uni give me love and my personal favourite is \nsmall bump "
  },
  {
     text:"Blinking love him... XD I love Ed Sherran favourite singer evah!!!! xD. Owwwww go on YouTube and \nget the full album free just type in Ed Sherran live then click the first \none that pops up "
  },
  {
     text:"Love it. Love it ginger, ya make me cry, sing, scream, smile, etc... Love your \nlyrics, songs, videos and much more. Don't ever stop singing, you are \namazayn. (1D quote XD) Love ya!!! "
  },
  {
     text:"LOVE THIS GUY. Love this! Such beautiful music by a awesome singer! "
  },
  {
     text:"Amazing! Ed is a wonderful and passionate singer!! I love him and his music! "
  },
  {
     text:"I'm very upset. I have tried to download 2 or 3 separate albums from this \napp and Google play will not work. It keeps force closing and freezing \nafter I type in my password. I am mad. But I love the music "
  },
  {
     text:"Not Worth the Cash I havent got a problem with the song I have a problem with the price. I \nseriously think that $6.99 is expensive for this album. I found Loud by \nRihanna for cheaper. The price is just outta order. Dont get me wrong I \nlove Ed Sheeran and all but not the price. "
  },
  {
     text:"Ed Sheeran's album \"+\" = Hell Yeah! I LOVE this album. Ed is genuinely talented on multiple levels - as a \nsinger, songwriter/lyricist AND additionally as a musician and producer as \nwell. He really DOES it ALL. And he does it SO WELL! His lyrics alone are \nworth the listen; heartfelt, soulful, intelligent and often times ingenious \nin their composition and simplicity and are, beyond all else, REAL. Nothing \nabout him or his music is forced or fake. He reminds me of times when \nunadulterated, raw talent and creativity were what made music GOOD. "
  },
  {
     text:"Love it!!! I love Ed Sheeran. I love his taste and style. His lyrics are memorable. \nAll of his songs are fantastic.He writes what is in his heart and mind. I \nadmire him deeply.His music will always be known for his beautiful \nmeaningful lyrics.Overall he.is very talented and keep it up.Love your \nmusic "
  },
  {
     text:"Plz dont kill me He may not be the cutest but hes a songbird and hes friend with 1D "
  },
  {
     text:"Amazing I have fallen down this guy's rabbit hole. He tells life past, present, & \nfuture. He is still learning how to live life & who he should love. "
  },
  {
     text:"Love Ed!!! I find his voice so soothing!! I just love everything he sings and its not \noften I find an artist that I enjoy everything they sing! I can't get \nenough! \"I See Fire\" (not on this album I know) and \"Give Me Love\" are on \nrepeat constantly and I can't get enough!! Thank you for such wonderful \nmusic!! :) Small Bump almost brings tears to my eyes! "
  },
  {
     text:"Love Ed Sheeran is amazing!! He is the best artist I have ever heard. Love you \nEd <3 "
  },
  {
     text:"Great I like most of the songs. I love the song \"You need me, I don't need you\" \nthe only problem is sometimes I focus on Ed Sheeran's gasps for air to rap \nagain. Still love the song, just thought I'd mention it... "
  },
  {
     text:"He Has A Soul!! His lyrics are so beautiful, sometimes I cry and his guitar playing on \nthis record is amazing. Who doesn't love him? That's like not loving the \nmoon or the stars. Cause his talent surpasses the moon and stars "
  },
  {
     text:"not good. AMAZING!!!!!!!!! he has an amazing voice and he is my #1 favorite singer tied w/ one \ndirection "
  },
  {
     text:"Wow Ed is awesome he might not be that cute but his writing makes him cute and \nbeautiful "
  },
  {
     text:"+ Is amazing. Ed is amazing ♥ You have no idea how long I've waited for this!!! Its all been covers! Ed! \nMy love is in the play store! I had to buy the album off Amazon because it \nwasn't here! Its here!! + is in the play store!!!! HOLY CHIZ WHY IS + ONLY \n4.9 ? WHOS THE IDIOT WHO DIDNT GIVE IT 5/5? WATCH YO BACK. "
  },
  {
     text:"Amazing Didn't dissapoint on a single song , just perfect !! Great job Ed , keep \nUp the Good work :-) "
  },
  {
     text:"Best singer out there right now! This man is one awesome singer. His songs are soothing and delicate. He \nhas soul and is a genius when it comes to writing music. Love this album \nand can't wait to hear more. "
  },
  {
     text:"Lovely guy He is absolutely amazing artist, and is pure talent. If you like this \nalbum you definitely need to check out his other ones! "
  },
  {
     text:"New, Unique Album Ed Sheeran has a really interesting sound. I'm not a fan, but I love a \ncouple of his songs, like A Team, Grade 8, and UNI. It's a really unique, \nfolk-like sound, and I think some of them are really drowsy, but he's a \nreally talented artist. You just have to have a taste for him. Anyways, \nbought A Team, love it, if you haven't heard it check it out! "
  },
  {
     text:"<3 Tell your mom, tell your wife and kids! . Eddie (were close) is amazing ! "
  },
  {
     text:"+=AMAZING! This album is AMAZING! I can't stop listening to it.. his slow songs are \nperfect and his fun fast songs are catchy. Best album I've ever bought (: "
  },
  {
     text:"Ratenator Best album ever made justin bieber betta watch out for ed sheeran will \ntune his ears out "
  },
  {
     text:"Aaliyah white ed Sheeran is a legendary ginger. he is a hard working man and admirably \norange . we all enjoy his love for nandos and lego . I and many hope his \nwork continues on for a long time. "
  },
  {
     text:"What can I say? You only have to see the name of ths artist to know that this album is a \ncracker. Even three years after its release, it remains successful and \nunbelievably current- a true credit to Ed Sheeran and his sound!! "
  },
  {
     text:"Give me love I hate to be a spoiler but the secret song at the end of give me love (the \nparting glass) is one of my favorite songs. I don't understand how this \nalbum is not 5 stars "
  },
  {
     text:"Amazing Pretty much the best dam thing you will ever listen to "
  },
  {
     text:"Amazing! He's pure beauty. I love his music. Give me love is by far my favorite! "
  },
  {
     text:"British lover. I love Ed Sheeran! He features in a song with Taylor Swift, as part of \nTaylor's album \"Red\". "
  },
  {
     text:"Love this album ♡♡♡♡♡♡love♡♡♡♡♡♡♡♡♡♡love♡♡♡♡♡♡love♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡love♡♡♡♡♡♡ "
  },
  {
     text:"My type of country Love it. "
  },
  {
     text:"LANA DEL REY<333333 I'm sooooo in love and obsessed with Lana and her amazing music. This is \ndefinitely a must have!...\"WILL YOU STILL LOVE ME WHEN IM NO LONGER YOUNG & \nBEAUTIFUL...\" <3333333333 "
  },
  {
     text:"5 stars I can't get enough of her soothing and sultry ways... She is simply \namazing. Melding styles from several genres into a full on onslaught of \ndeliciousness. I <3 Lana. "
  },
  {
     text:"Amazing Singer Every song of hers is something different and amazing. I've been with her \nfor awhile, and now that she is getting popular everyone will talk about \nher. "
  },
  {
     text:"Love, love, love it!! She has the best songs & I love her music! Great artist. "
  },
  {
     text:"Amazing Brought this album just for summer sadness and was surprised to find out \nevery track was amazing can't stop listening to this album love it if your \non the fence about buying it don't be hit that purchase button "
  },
  {
     text:"More-than-worthy Pop debut Never mind the hype or the vitriol. Video Games was pure magic, and the \nwhole album stands up comfortably through multiple listens (though nothing \nelse soars quite so high). Whatever you do, don't cheat yourself out of it. "
  },
  {
     text:"Amazing Pure pop, music like from a dream, you swear you'veheard it before but not \nas good. Lana is amazing. "
  },
  {
     text:"One of the best albums ever. I love this album so much. Her beautiful voice along with the lyrics.. \nPerfection. "
  },
  {
     text:"Perfection Lana Del Rey, if you read these reviews, I want you to know that you and \nyour musical works are perfect. This music is captivating, and hard to stop \nlistening to it. Please keep up your amazing work. "
  },
  {
     text:"Amazing This album is great. I love listening to real music among all of the \ntalentless garbage streaming the airways. Lana is fantastic! "
  },
  {
     text:"Great vocals, inventive song writing Great songs sung by a different style of singer. Very inviting "
  },
  {
     text:"Spoiled rich girl uses daddy's $ to buy fame after flopping on her own This is garbage music but a good litmus see if you can tell a fraud from \nthe real thing. If you like it ... have fun with the tea party and Jay \nLeno, because like you, they lack taste. "
  },
  {
     text:"Amazing Lana Del Rey is a wonderful artist, I've known about her for a while now \nand I'm surprised that her old album is becoming so popular. But majority \nof the comments are talking about her \"new song\" Summertime Saddness, lol \nit's not new and the version you are all hearing is a remix (on the radio \nand mtv). Anyways this is a great album and that's all I'm going to say \nbefore I start talking about how I'm kind of upset that she's becoming \n\"big\". "
  },
  {
     text:"Same song over and over Her live performance at SNL was worse than her album because she didn't \nhave the aid of the digital synthesizers to make her voice bearable. No, \nshe doesn't have a great voice and all her songs sound the same and she \nconstantly uses hi-low pitch switches as her voice doesn't have the range \nof a decent singer. The only reason this \"singer\" is getting any attention \nis because she's a pretty red head who has a constant and practiced \"I am \nhigh and about to get into bed with you\" expression on her face. Don't \nwaste your money on this one trick pony... "
  },
  {
     text:"Definitely worth buying Lana is a real artist... Its not just about her vocal talent.. Which is \namazing anyway. All her are so are so deep and raw! Ahhh i love her. She is \nan enchanting songstress. definitely worth buying her album. "
  },
  {
     text:"Dead Even though she has not made a great first impression on her first live \nAmerican TV performance on SNL this album speaks volumes of what she has to \noffer as an artist. Every track is unique when it comes to the lyrics, the \nmelodic tones and surprising hip hop influences. I love it and is a smash. "
  },
  {
     text:"Lana Del Rey is a Genius I am utterly impressed and obssessed with her music. She is legendary. "
  },
  {
     text:"Fan-fkn-tastic! I listen to mainly metal, screaming&breakdowns&loud offensive lyrics. But \nthis...THIS RIGHT HERE...probably one of my favorite artists of all time. \nThis album is beautiful. If you havent bought...or got this album yet, do \nso NOW. "
  },
  {
     text:"dont hate appreciate To all you people out there hating on lana for her performance on snl i \nwould love to see you do better in front of millions of people there is no \nsuch thing as bad music there is only music you dont like kudos to the \npeople who actually appreciate lana's amazing voice and to you haters screw \nyou guys "
  },
  {
     text:"LaLaLoveLanaDelRey!!! She's my total love and I am always SO musically inspired in my own \nsongwriting by her. Some of her lyrics depress me, but I view it as her \ndiary expressed to the world. I will ALWAYS LOVE LOVE LOVE my girl, Lana \nDel Rey! "
  },
  {
     text:"loved this album worth every penny lana can do know wrong; beautiful yet haunting soothing voice "
  },
  {
     text:"AMAZING not what you expect I am a strait male teenager that likes hip hop and dubstep but I had \nstumbeled upon her music while surfing YouTube one day. Her songs are dark \nand have a sinister undertone which is suprising because she looks like \njust another retarted pop singing bimbo. But she's far far far from it. An \namazing artist. "
  },
  {
     text:"Flawless. About time for real music, tired of that fake gaga pop bullshit. "
  },
  {
     text:"Worth your time and listening Legit voice and music. I don't feel comfortable with her music being \nclassified as \"Pop\". It has more of a indie feel with a slight dash of hip \nhop even. Her voice, to myself at least, is refreshing and she can hold a \nnote unlike other \"singers\" of today. I wouldn't go as far as 5 starts \nbecause I admit that a few of her songs almost have the same feel. But if \nyou look past that, each song will make you think and see what's she's \nsinging about. Blue Jeans made me space out when the song was on repeat. "
  },
  {
     text:"lizzy grant is my queen :* I am in love with everything about lana del rey from her tranquil voice to \nher sophisticated retro look. her music is beautiful passionate and every \nsong conveys a heartfelt poignant message. very soothing and emotional. "
  },
  {
     text:"One of the best albums ever! This is the first album I have ever brought and is still the best to date! \nEvery song on this albums has a deep meaning behind it; like summertime \nsadness is about her best friend tragically dying at 19 and lana wrote a \npoem which inspired summertime sadnes and born to die. This album showcases \nher true talent, this made me fall in love with lana del rey and all her \nmusic. This album is only the start of her story! Please buy!!! "
  },
  {
     text:"AMAZING! I found out about her on an app and really liked the song so I looked her \nup on You Tube and fell in love with her music. I love her music cuz its \ndifferent it sounds like old music her voice is Amazing. I hope to hear \nmore music from her in the future! "
  },
  {
     text:"This girl is amazing I cant believe I've never listened to her before. I've never listened to \nan album and liked every song on it. Either I have bad taste or she's \nfreakin amazing!!!! Im officially in love, Lana is my new favorite artist. "
  },
  {
     text:"No words This album is the best thing that has ever happens to me. J am truly \nimpressed. This is my every day album "
  },
  {
     text:"Love her music!! I love lana's songs and her music is so pretty! Any rude comments should \nput their head in a dumpster cuz thats where it belongs. Just sayin "
  },
  {
     text:"Love Love Love! ❤❤❤ One of my favorite albums! Lana Del Rey has the most beautiful voice she \nis so talented and has so many different sounds. There are only a few \nartists who actually have amazing voices and she is definitely one of em! \nHer songs are original, real & emotional & raw. In an interview she said \nthis album was a tribute to that darker time in her life. My top favs on \nhere are Born to Die, Blue Jeans, Summertime Sadness and Gods & Monsters. "
  },
  {
     text:"Amazing Voice Came here for Summertime Sadness but her voice is addicting... Awesome \nAlbum got it on replay "
  },
  {
     text:"Incredible talent I never thought I would like her. She irritated me until I finally \nlistened to her in May. I have never been so wrong. Every song is a little \nblessing, I have the majority of her music (even some from her pre-lana \ndays). If you just think she's some fake, spoiled, talentless girl, you're \nso wrong. She really isn't, and it's a shame you may think of her that way. "
  },
  {
     text:"Perfect The album is perfection, but screw Google play! I payed good money for \nthis album and as I switch phones. It says I gotta pay all over again. The \nonly reason I don't rate this a 1 is Lana. Her album doesn't deserve that. \nBuy the physical cd people. "
  },
  {
     text:"Haunting, perfect, etherial, part of my soul. The songwriting is beyond \nwords. I SO \"get it \" and feel that someone or something... \"gets me\". This \nalbum is a true \"gift\" for my soul and is one that will always be with and \npart of me. My best friend of over 34 years passed away last year. The week \nbefore she died, she turned me on to Lana Del Rey. I got the CD, it is like \nit is about us and our story. I can not believe how deeply it has touched \nme. Ironically named \"Born to Die\"...Love hard, life is short. "
  },
  {
     text:"Beautiful Great album, this is for people who love good and real music! "
  },
  {
     text:"Can't stop listening Tool is my favorite band and I love rock, but this has got to be the best \nalbum I have heard this year. Despite what career-haters say, this is a \nreal album with real songs that melds genres like no other. I can't stop \nlistening to this album. "
  },
  {
     text:"UNIQUE Absolutely love her. Her voice is so rare. Amazing singer and song writer. \nWe need more artists like Lana! "
  },
  {
     text:"Simply amazing! Every song on this album conveyed emotions ranging from the darkest \nsadness to the bright joy and everything in between. A wonderful album with \nwonderful songs, what more could you ask for? "
  },
  {
     text:"Cool I like it but It also makes me cry. Cool "
  },
  {
     text:"Great Album This greatest hits album shows the diversity of their music. I love that \nevery song doesn't sound the same. Every album is great!! I was hooked the \nfirst time I heard them and I love that they do songs with other artists. \nEven though I already own the albums these songs came from, I am getting \nthis one too!!! "
  },
  {
     text:"Love ZBB! Sounds so great, every song has harmony and never get tired of hearing \nthem! "
  },
  {
     text:"Heart of Country The Zac Brown Band's Chicken Fried got me hooked on country a long while \nback with the sweet honey sounds of their violins, intricate guitar \npicking, and lovely knack to pour an abundance of emotion into one song to \nmake you want to sing along. I know the words to every song on this album \nby heart, and it is definitely worth purchasing. These songs are the \nquintessential American heart of country songs, illustrating the wonders \nlove, hardships, and the simple life. "
  },
  {
     text:"Great selection of great songs Great artist/band, great selection of great songs that make you feel good, \nsongs that get you singing along, songs that you want to hear then hear \nagain. That's Zac Brown Band in a nutshell. My only negative statement if I \ntruly had to give one, is that these are not newly recorded versions of \nthese great songs (that is, they had not re-recorded for this album) but \nrather a compilation from previous albums. Still superb music, sound, and \nvibe. "
  },
  {
     text:"I have always loved Zach Brown Band Ever since I was 8, now I'm 17 and I still love all these songs so much!! "
  },
  {
     text:"The most amazing album, EVER! Honestly, Zac Brown Band is one if the best bands ever in history ,and \nthis album is great: all of the songs are better than great. You definitely \nshould get this album. "
  },
  {
     text:"Not standard country fare Zac Brown and company serve up a good variety of sophisticated, catchy \ncountry tunes featuring clever lyrics. "
  },
  {
     text:"Love Zac Brown Band. You can't beat 99 cents for this album either! "
  },
  {
     text:"zac brown band is one of my favorite artists so i had to get the album "
  },
  {
     text:"Love Zac Brown Band Best of the best..love these tunes! "
  },
  {
     text:"Wonderful words, beautiful music... Good! Great! Simply the \"Best\"! "
  },
  {
     text:"Wow! I got this for Christmas, and it's the best album I've ever had! "
  },
  {
     text:"Great Album Talented Musicians in a sea of synthesized garbage we call music now... "
  },
  {
     text:"I hate country music I hate country music but somehow I really like this band. "
  },
  {
     text:"Favorite Bands Luv your music keep up the good work "
  },
  {
     text:"Zac! Zac! Zac! I love all of your songs! You are the best country singer I've EVER heard "
  },
  {
     text:"Keith Odom Too sweet, I'm sure he knows what a real gift has been given. Very \ntalenter "
  },
  {
     text:"Simple & Genuine American Jam They are their own genre. "
  },
  {
     text:"They're Awesome Best country artist I'm my opinion. "
  },
  {
     text:"Yes I luv these guys. Just reminds me of summer "
  },
  {
     text:"Elizabeth Shove Love, love LOVE ZAC BROWN BAND!!!! "
  },
  {
     text:"This album wakes me up in the morning and makes me feel good it is a great \na alblum "
  },
  {
     text:"Awesome Great to hear country music without a rapper. I like rap but when I want \nto listen to country I want country "
  },
  {
     text:"Talented Band All of their songs are great. Cant wait for them to throw out a new full \nlength abum soon. "
  },
  {
     text:"LOVE THEM All my favorites on one album ... =) "
  },
  {
     text:"Awesome Great song writing and just a fantastic band "
  },
  {
     text:"Zac Brown band Greatest hits so far "
  },
  {
     text:"Greatest Hits So Far Zac Brown Band "
  },
  {
     text:"Good song This is james pearson` s sons song. "
  },
  {
     text:"zac I love all country songs. "
  },
  {
     text:"This is my all-time favorite album - every song! "
  },
  {
     text:"Zac Brown Band All great tunes "
  },
  {
     text:"This album made me live country! "
  },
  {
     text:"Gratest Hts So Far Zac Brown Band "
  },
  {
     text:"Good ol fashion music Worthy to own "
  },
  {
     text:"Amazing album Sac brown is the best. Amazing music "
  },
  {
     text:"C'mon man!!! Where's \"Jolene?\" "
  },
  {
     text:"AWESOME They are the reason I started listening to country. "
  },
  {
     text:"Zac Brown Band has done it again Another awesome album... Love it! Thanks ZBB "
  },
  {
     text:"I love you Zack Brown Band "
  },
  {
     text:"Good Awesome. Everything about this album makes me feel good. I love the style "
  },
  {
     text:"Very Traditional Very refreshing to hear something so pure and emotional. That with Joys \nexceptional talent, creates a beautiful album worth many listens. So. Many. \nlistens! "
  },
  {
     text:"Just great music, perfect album I'm not going to say much but if you're into alternative/indie this album \njust about tops the charts and it's so inexpensive too. Go treat yourself. \nYou'll love it. "
  },
  {
     text:"Unbelievable Catchy and thought provoking, these songs either make me want to mellow \nand listen to every syllable or they make me want to dance my butt off "
  },
  {
     text:"Refreshing I saw it for 99¢ and I couldn't help but buy it. This is my favorite \npurchase of the year so far. "
  },
  {
     text:"An amazing talent! Never heard of this artist until now. I usually don't buy anything on \nhere, but you can't beat the price, or pass this talent up! Thanks Google! \n:) "
  },
  {
     text:"This is amazing I love the sound of Riptide and the Ep. I'm ecstatic that Vance put out an \nalbum surrounding that sound. I hope that we can see more of this in the \nupcoming future. "
  },
  {
     text:"Riptide I was scared of dentists and the dark until I listened to this song \n(you'll get it if you've heard it) "
  },
  {
     text:"Love it love it love it Soothing tunes. Lovely relatable lyrics. An amazing artist. "
  },
  {
     text:"Love this CD ... he is a awesome artist and all of the songs are just amazing I can listen \nto this CD all the way through without skipping love it "
  },
  {
     text:"Your best song is literally your worst Riptide is just an \"eh\" song. Almost every other song in this album is \nmiles better; I'm just glad they aren't playing those ones repeatedly on \nthe radio. "
  },
  {
     text:"Can't go wrong One of those artists like Imagine Dragons who just can't make a bad song "
  },
  {
     text:"Unbelievable I have been listening to this for about 3 days on repeat. I've yet to skip \na song. Great album. Red eye, wasted time and Georgia stand out for me. "
  },
  {
     text:"wonderful album thank you so much for making wonderful music affordable to us all. I love \nthis album. refreshing vocal in the music world "
  },
  {
     text:"Dream your life away I love this album my favorite song is riptide, "
  },
  {
     text:"LoveLoveLove Vance joy's music is a must have, this album is beautiful if I could rate \nit more stars I would "
  },
  {
     text:"Never knew about this guy before I heard riptide. He sucks but riptide \nsounds cool and it reminds me of Percy Jackson. So yes 2 seems bad but \nhey...I cant please everyone "
  },
  {
     text:"Like the mood of it Enjoy listening to this one at home relaxing or in the office. Really \nchill which is nice...reminds me of swell season. "
  },
  {
     text:"Amazing artist I don't know what it is about this it just makes me think and question my \nlife "
  },
  {
     text:"It's okay. It was more or less worth the dollar I paid for it. However, you would \nthink technicians would at least work on pitch problems before release. \nStill pretty good "
  },
  {
     text:"I love these songs...... But they won't load or sync "
  },
  {
     text:"Amazing Concert Saw him live when he opened for Young the Giant; been waiting for this \nalbum to come out. "
  },
  {
     text:"Fairly Good Who am I & Riptide are definitely the best. "
  },
  {
     text:"Amazing I loved how he pours his heart and soul into everything he does. Amazing \nwork again James! "
  },
  {
     text:"Its great!!! The songs are so funky and chilled out, definitely worth listening to!!! "
  },
  {
     text:"Dream your life away Soothing and very poetic. Its very easy to relate to and understand the \nmusic. "
  },
  {
     text:"Summer breeze filled with love This guy is a treasure. I hope there is somewhere to improve in variaty of \nmelodies.... but the feeling, what he sais and how he does 5 star!! Im \nhappy to get this album! :) "
  },
  {
     text:"Amazing Cant wait to see him in a couple of weeks!! "
  },
  {
     text:"Wow... great sound! I especially like Riptide. Loving this! "
  },
  {
     text:"Stellar Great album. Saw him perform this record in NY and did an interview for \nVh1..Really good guy making really good music. "
  },
  {
     text:"GALAXYBACON2 GS4 II Not bad at all for, .99č!!!! Great Voice & Lyrics "
  },
  {
     text:"✌ I love just Riptide from this album "
  },
  {
     text:"Masterpiece He's so underrated one of the greatest singers out there "
  },
  {
     text:"Loved it So good. I loved it. "
  },
  {
     text:"Absolutely Love It! I absolutely love it! Love this guy! I've listened to this album on \nrepeat, about one million times now. No regrets! "
  },
  {
     text:"The best album heard It was great the songs were nice and peaceful and calm "
  },
  {
     text:"I love him and his songs. "
  },
  {
     text:"Ecstacy His music will make you feel feeling you never knew you had "
  },
  {
     text:"BEST SONG YET!! It Has so many tunes i love!!! Its not like many of his other songs that's \nwhy I like it so much!!! Best song ever I am buying it right now!!:-) "
  },
  {
     text:"Mess is mine I loved it "
  },
  {
     text:"Incredible This is real country with a heavy dose of the blues. This is not the pop \nstuff that has ruined the genre. Emotional and real. Stapleton hits notes \nthat most can't. His guitar work is nothing short of mastery. His wife's \nharmonies are on point, and she reminds me of Stevie Nicks. If you like \nREAL country, have a listen. Also check out Cody Jinks. "
  },
  {
     text:"Awesome!!! The fact i never hear any of these songs on the radio with one of the top \nrated country stations in the nation in my town and instead I hear the same \n15 songs over shows what they know. Great mix of country, southern rock, \nand blues. "
  },
  {
     text:"Traveller Thank you CMA'S! I didn't know who he was before the awards and I am in \nlove with his voice! I would love for him and JT to record those two songs \ntogether. Very powerful voice! "
  },
  {
     text:"There's nothing or.. No one, in the business right now that I consider hotter than Chris. He's \nmaking my state look like an absolute gold mine. I loved his bluegrass band \nfrom a few years ago, and I love his stuff now. This is true lyrical and \nmusical genius quality stuff. I own the digital album and I ordered the \nbundle from his website. He will always have my support. "
  },
  {
     text:"Love the heart and soul. I think this is one of the best things to happen to Nashville they need a \nbreak from all the crap they have been signing. Don't like how most \ncomments say they heard of him from CMA. If that's where u go for music \nstop and get into Texas country not so much red dirt but guys like Reckless \nKelly, Ryan Bingham, Bleu Edmondson, Turnpike Troubadours, Robert Earl \nKeen, the guys Nashville don't want to sign but better than and ole Colt \nFord, Big Smo, Brantly Gilbert, Luke Bryan crap who is about the money "
  },
  {
     text:"CMA just sold me this album. Never heard of him but when I watched the CMA's I was star stricken. \nThanks Chris for bringing country back "
  },
  {
     text:"Stapleton has a country, blues, and bluegrass sound that is refreshing in \ntoday's world of \"pop country\". I was actually surprised that my local \ncountry station played \"Nobody to Blame\" as it sounded so different. This \nguy is the real deal and I've got at least 40 plays on each song on this \nalbum -- they're all excellent! If you like this album, I'd also give \nStapleton's old bluegrass band The SteelDrivers a listen. They've got a new \nlead singer on the last couple of albums but they're still great. "
  },
  {
     text:"Greatness It's hard to find music that will make you shake your head at how good it \nis. Chris does it. The only thing better is his live performances. Chills "
  },
  {
     text:"Glad he went out for his own time I heard of him when he wrote songs for other country artists. So when I \nheard he made his own album I already knew it'd be the best country album \naround. So happy he went after it for himself "
  },
  {
     text:"I had no idea who this guy was until a new friend recently introduced me to \nhim. He played Tennessee Whiskey and I was absolutely blown away by his \nvoice. I couldn't add his music to my collection fast enough. I am \ndefinitely a new fan of this amazing artist named Chris Stapleton. He'll be \nperforming in Tampa this month and I'm seriously contemplating being there! "
  },
  {
     text:"Fell in love Also have to thank CMA's for turning me into a Chris Stapleton FAN! "
  },
  {
     text:"Addicted I'm afraid to listen to this album anymore because I don't want to ruin it \nfor myself. I'm addicted. I will keep rooting for talented, genuine country \nartist like Chris to storm back and reclaim country music from \nmainstream-pop-hacks. Beautiful vocals, sweet harmonies, thoughtful lyrics. \nAhhhh what the hell... Now I gotta listen to it again! "
  },
  {
     text:"Chris Stapleton is incredible What a great album, he has an emotionally powerful voice that only comes \naround once or so in a generation. The songs sound great, a perfect solo \ndebut, hopefully he tours in Los Angeles soon! "
  },
  {
     text:"I listen to a Chris Stapleton song really quick on iheartradio. The first \nsong did not sold me. I listen to a next one. I was starting to warm up. I \ntook a quick snippet on Google Play of \"Nobody to Blame.\" Now, I am really \nin love! His vocals are raw and raspy. Nothing pretty like Luke Bryan. Just \nstraight raw country. Good music and legit lyrics about real life. Now, \nthis is country! Thanks for doing country music a solid, Chris! "
  },
  {
     text:"Beautiful and country ! Chris Stapleton reminds me of driving when I was a kid with my dad , \nlistening to country music and enjoying carefree days. I love his \ntraditional country sound , not like the rock/country you hear so often \nnow. I am definitely a fan and looking forward to hearing more from this \nawesome artist ! He really reminds me of where country music began with the \nmusic of Willy , Hank , and so many other great artists. I bet Merle is \nlistening with a smile ! "
  },
  {
     text:"You can't describe his sound, his words. This is the kind of music that \nmakes you realize you have a soul. "
  },
  {
     text:"Fantastic Not normally a country fan, Stapleton challenged this with a well crafted \nblues inspired collection of soulful brilliance. "
  },
  {
     text:"5 stars 5 stars 5 friggin stars! Rolling Stone Magazine said Chris Stapleton has the \"BADDEST VOICE IN \nCOUNTRY MUSIC\". I say he simply has the baddest voice in music. Period. "
  },
  {
     text:"Y'all, seriously...make love to this music It's Waylon, Hank, Kenny, Willie, Johnny, and Charlie all in one man's \nvoice! So tender, soulful, and heartfelt... music that makes you yearn to \nhear him keep singing! My sweet man dedicated \"Tennessee Whiskey\" to me, \nand stole my heart... "
  },
  {
     text:"Best album in many years Chris Stapleton is a musical force to be reckoned with. This album is \ngoing to be a go to for many years to come. It has everything from badass \noutlaw songs to love songs to some of the saddest music out there. both \nNashville and the music industry as a whole needed this album to begin to \nbring real music back to the mainstream. If music trends back in this \ndirection, I may turn the radio back on. "
  },
  {
     text:"Incredible This is absolutely, hands down the BEST album I have ever heard. Never \nbeen moved by anyone's music like that before. Listened to it in full and \nwas completely speechless. "
  },
  {
     text:"Chris Stapleton Definitely not country pop, which is good. Don't know how much air play \nhe'll get because of Nashville's infatuation with anything that sells and \nnot necessarily anything that's real.....case in point...Fla/Ga line and \nPuke Bryan. "
  },
  {
     text:"Magnificent Can't get enough of this guy's voice. Tennessee Whiskey just touches you; \na true slow, making love song. "
  },
  {
     text:"Love, Love! Listening to Chris brings sensations all through my body like little \nElectric shock waves of deep forgotten feelings "
  },
  {
     text:"Chris Stapleton is the country music Jesus that Eric Church sang about, \nit's about time he put out his own album! "
  },
  {
     text:"A real country singer Don't be fooled by all of the controversy country and CRAP (country rap) \nout on the radio, there is still genuine country music being made. Artists \nlike Chris, Sturgill Simpson, Stoney LaRue, Whiskey Meyers and Mickey and \nthe Motorcars are still rooted in country music and they will rise up and \nretake the throne just like when Randy Travis brought it back in the 80's. \nBuy this album! "
  },
  {
     text:"Love it!!! I've never bought a whole album so quick in my life. I absolutely love \nthis guy! Amazing this is country music. "
  },
  {
     text:"Best album I've heard in a long time I just got done listening to this album at NPR's first listen. And I'm \nhappy to say this is what country should be. If you have been missing true \ncountry music like I have. Music inspired by family story's and lessons \nlearned by hard times, this album Is for you. If your looking for a party \nalbum about big pick up trucks and a little rap turn on the radio. I can \nonly hope this album inspires today's new artist to go back to the routes \nof country. Do yourself a favor and pre order this you won't be let down "
  },
  {
     text:"Outlaw music on the rise The next waylon jennings right here way to chris hope rhe next album has \nthe true country fell like this one did "
  },
  {
     text:"Fantastic Chris Stapleton brings back a long forgotten talent in both writing paired \nwith an amazing voice. Country is cool and great again "
  },
  {
     text:"Love it I'm not a fan of a whole cd usually nor am I a country fan but I love this \nguy. Just sit and listen and relax:-) "
  },
  {
     text:"Wow. .. I didn't know who he was and watched him on CMA awards. Wow! Had to find \nhis album and what a great find! What amazing voice and story teller. "
  },
  {
     text:"Love Chris Stapleton. The country music wrapped up in the blues genre \nalways hits the spot for me and the dudes voice is off the charts. He is my \nabsolute favorite country music artist today. Or should I say country/blues \nartist. "
  },
  {
     text:"Exactly what country needed Chris is exactly what county music has been needing. A new artist that has \ngotten back to country roots and sings country, not pop. If u like country \nthis is a must buy album. "
  },
  {
     text:"The Real Deal Finally the wait is over! This album is phenomenal! This is what country \nmusic is supposed to be. Stapleton is a genius. Great musician and I could \nlisten to him sing the phone book. Buy the album. You won't be \ndisappointed. Album of the year for sure. "
  },
  {
     text:"Chris Stapleton is tha man!! Best singer/songwriter in the business. Great vocals. He's a music \nmagician! Loved him since the 1st time I heard him. He's a force to be \nreckon with. Wish more people knew him and how many hit songs he has \nwritten. Too bad the songwriter doesn't get all the attention & fame that \nthe singers do. But I'm proud to say I'm his #1 fan and supporter. I would \nlove to see him jamming live & have a few shots of whiskey with him. Lol "
  },
  {
     text:"Thanks CMA's! Country music isn't dead after all! Chris Singleton has saved it single \nhandedly. If not for the CMA's, I never would've discovered him. He is \ngreat! "
  },
  {
     text:"Great Album Love his voice. Very unique sound to country music. Great songs. "
  },
  {
     text:"It's not often you find an entire album you could live and die to. Chris \nStapleton's voice is incredible! "
  },
  {
     text:"Real country A true country artist that can write and sing from the heart. Not to \nmention having the chops to sing with one of today's leading vocalist. "
  }];

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
