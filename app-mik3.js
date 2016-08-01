var watson = require('watson-developer-cloud');
var alchemy_language = watson.alchemy_language({
  api_key: '3a24fe0b26899623c12675e18b576a5fb882a0fa'
});

var URLS= [
  {
     text:"I LOVE HER SONGS!! Her voice is so beautiful!! I love the sound that she makes!! And my \nfavorite song is ex's and oh's bcuz it's soo catchy!!! "
  },
  {
     text:"BULLSHIT SONGS most of all xs and ohs "
  },
  {
     text:"Bought it but didn't get it! I purchased this song, you took the money and it will not download "
  },
  {
     text:"Amazing sound!!! I don't quite know how to describe her raspy rocking country sound and \ndoing justice. I know for sure she's got a new fan . "
  },
  {
     text:"One of the best debut albums ever! Listen start to finish, it's an \nexperience, not just songs gathered together. LOVE ELLE!! Bring us more \ngirl! "
  },
  {
     text:"Just heard Elle King on The Late Late Show with James Corden. Immediately \nbought the album. Love it! "
  },
  {
     text:"New and great! Great to know great new music is still coming out!!!! Love the raspy \nvoice! Will be a fan! "
  },
  {
     text:"Crap Bought this three times and it wont play "
  },
  {
     text:"Fun song It's corny, but you got to love it! "
  },
  {
     text:"I love this song! EX'S AND OHS I really recommend buying EX'S AND OHS because it is the BEST SONG EVER!!! "
  },
  {
     text:"Amazing I've been waiting ages for a full length album ! "
  },
  {
     text:"Love it! My aunt past last March. You help me stay strong throughout my surgeries. \nThank you Elle! "
  },
  {
     text:"Problem My song isn't working "
  },
  {
     text:"Ugly lyrics, ugly songs "
  },
  {
     text:"Amazing She's fresh and new!!! She's been my favorite artist for a awhile! "
  },
  {
     text:"Under the Influence Great song, love her style and Ora "
  },
  {
     text:"I love this song but now it's gone nowhere to be found on my phone and I'm \nangry!! This song is an anthem "
  },
  {
     text:"Elle King Beautiful new album. Right twangy sound for a quirky woman. "
  },
  {
     text:"Two things 1. Suzanne collins should write a book from Peetas point of view \nduring this whole fiasco. 2. Every time i hear this song i think of poor \nPhilip Semour Hoffman, who died just a week before filming was complete. \nMay he R.I.P. He was a great actor in his part of Plutarch Heavensbee, the \nmovie was dedicated to him, he lived an amazingly beautiful life. "
  },
  {
     text:"Hanging tree is a great song but... The only problem with the song is that the volume it was recorded at isn't \nhigh enough because I have to turn it up a lot higher on that song than any \nof my other songs. It's just super quiet but works great with head phones! "
  },
  {
     text:"Amazing! The song The Hanging Tree was amazing! My spanish teacher's son's \ngirlfriend was an extra and also she sung the high \"ahhhh\"'s at the end and \nit gave it a new level of amazing. Truy love the trilogy and the songs. I \ncannot express in words how addicted I am to this song and trilogy. "
  },
  {
     text:"Beautiful score :) I first heard The Hanging Tree on the local pop station. It was a \ndifferent variation but enough to make me want to buy the song. I like this \nversion better. It's the strings. I'm a sucker for a movie orchestral \npiece. Well, this score was so moving, it made me tear up a little. I \nalready love the HG movies. "
  },
  {
     text:"The Hanging Tree I love the hanging tree more than the others because it has that creepy \nfeel like if you don't go to the hanging tree something very bad is going \nto happen. It makes me me get goosebumps every time I hear it. "
  },
  {
     text:"Amazing For the people saying she should stick to acting you're wrong. She sounded \nvery good seeing as it wasn't auto tuned or anything. The film was \nfantastic and I'm a huge fan over the Hunger games! Five stars all \naround!!! "
  },
  {
     text:"Its OK but not worth the money J Law should just stick to acting. This wasn't really a good song and J \nLaw doesn't really sing all that good. Like I said she should just stick to \nacting. Try Hanging tree Rebel Remix. Its much better. "
  },
  {
     text:"The hanging tree Number 8, incoming bombers is like a star-wars-type song. OMG I WANNA SING \nTHE HANGING TREE AT SCHOOL ITS SO GOOD "
  },
  {
     text:"HOLY CRAP. Best song ever! The sound quality is just... OMG! The song is beautiful \nand morbid at the same time. I'm only 10 years old and I love it. I watch \nit at least once a day on YouTube. 3 words. Like a boss. :3 "
  },
  {
     text:"I hate this... So i am beyond furious with this song... I absolutely love it but i was \nable to listen to it for 3 days on youtube and now i cannot. I hate that \nnow we have to pay in order to listen to music. "
  },
  {
     text:"The hanging tree Are you, are you coming to the tree? Where I told you to run so we'd both \nbe free. Strange things did happen here, no stranger would it be. If we met \nat midnight in the hanging tree. LOVE IT! "
  },
  {
     text:"Holy craaapp! Best song EVER I'm totally in love with the hanging tree. When I saw the very first \nshowing of mocking jay the night before it came out, I drove straight home \nand downloaded this song! "
  },
  {
     text:"Amazing Score and Eventful Movie! So many dramatic things happened in the movie! It was so good! The score \nis also mysterious and there is so much tension. Both the score and the \nmovie are grim but entertaining! Jen's Voice is amazing in The Hanging \nTree! Five Stars for everything!!!!! "
  },
  {
     text:"Love the movie I hate when Katniss found peater like that and when he got mad at her. I \nthink he didnt mean to do that, he was just mad at her bc he got beaten \nfrom the state. "
  },
  {
     text:"Won't play The first song I downloaded works but this one says error and won't play \nI'd buy more music if this one worked.. I'm really disappointed cause I \nlove this song if it gets fixed I will definitely change my rating \n(probably to five stars) "
  },
  {
     text:"Hunger Game Trilogy As a huge fan of the hunger game Trilogy, I really love this album because \nthe music does a really good job of capturing what happens and adds clímax \nto the whole movie/book "
  },
  {
     text:"The Hanging Chestnut Tree So I just realized that Suzanne Collins took yet another \"inspiration\" \nfrom another great dystopian work of art and just added her own twist. In \nNineteen Eighty-Four, there's a song that plays that goes: under the \nspreading chestnut tree/I sold you and you sold me/there lie they, and here \nlie we/under the spreading chestnut tree. Which in turn is Orwell's take of \na poem by Harry Wadsworth Longfellow. Why did she have to precisely use a \ntree song as motiff in her book? "
  },
  {
     text:"Amazing This is a great album that goes along with the movie so well. The only \nthing is I would not recemend it for kids under the age of eight because of \nsome of the songs "
  },
  {
     text:"Hunger games is amazing Hanging tree is the best but the movie is sad when peeta ( that's how you \nspell his name) attacks Katniss because the capital drugged him so he would \nlose it and want to kill her "
  },
  {
     text:"FANTABULOUS Dis was amazing. I hate how Jennifer Lawrence said she didn't sing well. \nShe sounds amazing and hanging tree was such an inspiration in the \ndistricts. I can't get it out of my head. "
  },
  {
     text:"Hmmmm... interesting..... The Hanging Tree sounds different than the one done by Sam Cushion. I was \nkind of expecting the tune of the one by Sam Cushion but I don't really \ncare. :) "
  },
  {
     text:"Hunger Games Album for part 1 Downloaded Hanging Tree (my new ringtone) absoluetly loved the movie and \nwith the sound track, even better "
  },
  {
     text:"Mocking Jay sound track Omg I loved this movie, can't wait to get it on DVD, I would totally \nrecommend this sound track to anyone and the movie to anyone. It was \namazing "
  },
  {
     text:"The Hunger Games Mockin My favorite song out of this album is hanging tree. "
  },
  {
     text:"I loved the movie The hanging tree is my favorite one "
  },
  {
     text:"The hanging tree There's something about the song that is so good it gets stuck in your \nhead! This whole album is great and I'm happy to say I love it! "
  },
  {
     text:"I love this so much!!! Are you are you singing these songs too? There stuck in my head. Theres \nnothing i can do! "
  },
  {
     text:"Great album One of the best motion picture albums I've heard in a long while. Great \nscores, great rhythms, great movie in general if you haven't see it or \nbought the cd please do you self a favor and do both. Will not regret it "
  },
  {
     text:"Omg! Hanging tree is the best song! Omg! Buy hanging tree. Jennifer was all worried about being a horrible \nsinger and I have no idea what she is talking about!!! She is amazing!!!!! \nI sing this song like all day! Its my favorite scene in the movie!!!! Such \nan amazing song! "
  },
  {
     text:"The hanging tree is better here I listen to other but this one is best I watched hunger games mocking jay \npart 1 and I love the song I wish it was free though also for Christmas.Its \ngreat. "
  },
  {
     text:"hunger games mocking jay movie songs LOVE it so much "
  },
  {
     text:"The hanging tree I'd my favorite song like are you? Are you? The movie is awesome but I got \nreally mad when my friend said prim and finnick die in pt 2 but I hope not "
  },
  {
     text:"I absolutely am infatuated with the hunger games and couldn't live without \nit. This soundtrack just helps with my addiction to it until the next one \ncomes out. "
  },
  {
     text:"Mocking jay This is the best song ever "
  },
  {
     text:"Brilliant Clap yourself on the back all of you. Fine work. The music is brilliant \nand the movie is great to much better than the book and it's only part 1 "
  },
  {
     text:"The Hunger Games: Mockingjay Very great album. To like it more, you should watch the film. "
  },
  {
     text:"The Hanging Tree I love the song. It's The Hunger Games version of Do You Hear The People \nSing. "
  },
  {
     text:"The Hunger Games Mockingjay Part I- The Hanging Tree Such a great song! Jennifer Lawrence's voice makes it so chilling, which \nis what exactly the way it is suppose to be! "
  },
  {
     text:"OMG My favorite song from Mocking Jay is and always will be The Hanging Tree. \nThat song is so sad but so beautiful! Amazing! "
  },
  {
     text:"Good music but This album gives away the movie if you pay at tension and it's not bad but \nI'm just saying. "
  },
  {
     text:"Great film, decent album. The overall narrative of this experiment is brilliant unfortunately the \nambition causes the album to lack the same hard hitting packed style that \nChildish Gambino has always had going for him. "
  },
  {
     text:"Truly enjoyable Amazing album, not just a album but a full masterpiece of art. Including \nscreenplay, linking video clips and little hints and connections \nintertwined into everything Donald Glover does. An amazing experience. "
  },
  {
     text:"Album of the Year for me. This is on par with camp and in parts, even better. Highlights are crawl, \n3005, life: the biggest troll, and the party "
  },
  {
     text:"Crazy! To my embarrassment I had never heard of this fellow and after hearing \nthis album I wish had a lot sooner! Next level. "
  },
  {
     text:"Truly a creative masterpiece I hate hip hop.. But this is actually an incredible album... Reminds me of \nPink Floyd. "
  },
  {
     text:"First of its kind. Hopefully not the last. Probably would have given the album a 3.5/4 if not for reading the \naccompanying screen play. Hope they make a movie for it. "
  },
  {
     text:"Its okay I think all of his songs should be more like 'V. 3005' or 'The worst guys' \nthey have a brighter mood and his voice goes well with the genre of the \nsong, the other songs are still good but that is just my personal opinion \nbut this guy never fails to keep giving quality songs "
  },
  {
     text:"OMG!! this is so amazing! I have a new music graze now hip-hop and rap! now one of my fav artisits "
  },
  {
     text:"Are you eating though? This album goes ham, but not like average noughties rap its deeper than \nyou think "
  },
  {
     text:"My favourite album ever. Not a single bad song with some great highlights like Worldstar and \nTelegraph Avenue. "
  },
  {
     text:"Album of the year! So creative, nothing remotely like it "
  },
  {
     text:"fresh So different to what I was expecting, brilliant album. Looking forward to \nhis new stuff "
  },
  {
     text:"First times Ok tunes "
  },
  {
     text:"Meh Weak rap on a decent beat "
  },
  {
     text:"Childish Gambino Listen to this. "
  },
  {
     text:"Fantastic ITunes did this as there free song and absolutely love it! Great that \nandroid market have done the same "
  },
  {
     text:"Good album. Just nothing that stood out to me. Hard to beat an album as good as camp \nthough. "
  },
  {
     text:"M That's the dude from community! "
  },
  {
     text:"Jesus. The artist, reborn "
  },
  {
     text:"That Bino the releast. "
  },
  {
     text:"The album is below his average. But still good "
  },
  {
     text:"This album, is so good I fully rate this "
  },
  {
     text:"I love gambino But he needs to do a song with Iggy Azalea! "
  },
  {
     text:"3005 is good But dont like the rest "
  },
  {
     text:"Amazing rapper <3 Highlight deffo 3005 "
  },
  {
     text:"Loved It CG is the bomb "
  },
  {
     text:"Good album Herd on radio had to get it "
  },
  {
     text:"Fuck yeahh "
  },
  {
     text:"Underground music "
  },
  {
     text:"Because of the internet "
  },
  {
     text:"Sweatpants is the only good song "
  },
  {
     text:"These songs are life "
  },
  {
     text:":) Yess "
  },
  {
     text:"Perfect Must buy "
  },
  {
     text:"Sweet It was great "
  },
  {
     text:"Amazing Love. "
  },
  {
     text:"gambinooooo "
  },
  {
     text:"Good Epic "
  },
  {
     text:"Amazing Brilliant "
  },
  {
     text:"Lyrical genius "
  },
  {
     text:"Pretty Good Album As far as pop albums go, I've heard much worse than Echosmith's \"Talking \nDreams.\" While I wouldn't go far enough to call each song life changing, \nthere is enough pop goodness here to make for an interesting listen. I \ndidn't regret my purchase of this album. In fact, I'm listening to it right \nnow, almost a month after I bought it. That says a lot. "
  },
  {
     text:"Fantastic album across the board This band's debut album embodies the feelings of those who have been left \nout or are in a rough patch. Wishing they could be part of society that \neveryone knows and likes and not be shunned upon for being themselves. \nTalking Dreams is an album that appeals to a different alternative crowd, \none that many can relate to. This album is platinum worthy not just because \nI like it, but because it serves a good purpose, with a positive message. \nTake a listen, and really listen. You won't be disappointed. "
  },
  {
     text:"Really? I'm a big fan of Paramore and Metric, and this just seems like they're \ntrying to be the next in a string of successful and talented groups. News \nflash; no one likes a one trick puppy. I don't mean to be harsh, but this \nband just seems like a bad copy of Metric. "
  },
  {
     text:"Great Alternative! I tend to jump on stuff further off from mainstream, and Echosmith \ncertainly caters to that desire. I twisted my ankle something awful today \nand finding this album for .99 while I was laid up was a great surprise. \nEvery song is cheerful and enjoyable, I think March Into the Sun is my \nfavorite. ❤❤❤❤ Thanks for something different from the rest! "
  },
  {
     text:"Cool kids I love the song the cool kids. It kinda makes sense the cool kids do fit \nin and I think we all fit in some were not be cool. If u r hating on this \nsong then u have no taste in music "
  },
  {
     text:"Very good indie Really good....I mean yea some of it seems repetitive but its a good album \nand very catchy. I only knew cool kids then I looked them up and they \nremind of me of paramore whom I like a lot, she has a really good voice and \nI hope they do good with whatever they come out with next "
  },
  {
     text:"Cool Kids This is my #1 song becuz me and My friend were listen to this song good \nmembers and my friend is a girl she is so kul. And it tells me u dnt have \nto be a cool kid and be yourself not to be sumone u arent jus yurself!! "
  },
  {
     text:"Refreshing and Well done! This is a great album and very impressive considering it was recorded by \nmostly teenagers. The songs are well written and recorded. Reminds me at \ntimes of Taylor Swift. Great pop music. I paid $7.99 in iTunes and am happy \nto support good hard working musicians as I've been in their shoes. I'm \nsure that the nay-sayers all base their \"expert\" opinion on the Cool Kids \nsong but even that song is interesting and fun. Echosmith has already \naccomplished more than these negative nancies ever will. Looking forward to \nmore great music from this young group! "
  },
  {
     text:"Lisyen For the commenter who said the sound is boring, try something new... \nListen to the words. These guys could be the modern day Partridge family \nand I say that with all respect and gladness. "
  },
  {
     text:"Ugh God this is so boring! We need new exciting rock n roll not whatever this \nis! The sound is so bland and overdone! "
  },
  {
     text:"Best album I've ever heard Never in my life have I heard so many songs in one album that I enjoyed. \nEach song has a different feel and they don't sound the same. The tune is \namazing in all of the songs and I believe that this album is \ngroundbreaking. I especially love the song \"Tell Her You Love Her\". Props. "
  },
  {
     text:"You Homos HOW CAN YALL JUST COME AND TOP KING KENDRICK LIKE THAT. PEOPLE BOUGHT YOUR \nALBUM JUST TO LISTEN TO THAT ONE SINGLE. WHY YOUR ALBUM MAKE ME WANNA GO \nINTO A DEPRESSION "
  },
  {
     text:"good sound I bought the deluxe version of this album but i see it's no longer \navailable for sale this is a good band. pretty pop rock music. reminds me \nof the 80s. "
  },
  {
     text:"? Kudo's for the whole family group thing. But be like one of the cool kids \nand..... Not put out another album:) pretty please! "
  },
  {
     text:"Found echosmith at warped tour pnc bank art center 2012 I got their mixtape/lp for free just for signing up for their emailing \nlist at warped tour. Nobody even knew they existed at the time. A lot of \nbands were there that day so I didn't get a chance to see them live (5 \ndifferent stages with 5 different schedules. Either way I gave the cd a \nlisten a couple days later and was immediately attracted to the song \"cool \nkids\". Heard them on the radio about a year later and was like \"I know that \nsong\". Couldn't wait to tell everybody I knew and the rest is history! :) "
  },
  {
     text:"One of my favorite bands. Great sound and style. I don't get some of the comments people put. \"They \nneed to find their own sound/ style?\" I know one of their pieces whenever \nit comes on because they have a distinct sound different from other groups. \nAnd the one about Cool Kids encouraging people to fit in, they clearly \ndidn't listen too closely, because the song is about exactly the opposite. \n\"They're driving fast cars, but they don't know where they're going. In the \nfast lane, living life without knowing.\" Brilliant, subtle song. "
  },
  {
     text:"This Album Grew On Me I loved cool kids so i started listening more and now i can't stop. I love \nthis album. "
  },
  {
     text:"This is my song cool kid's When I'm sad or jest had a hard day i hard this song and it makes my heart \npump by the second's go by this song.This song is world's best song. "
  },
  {
     text:"Accual Cool kids!! It's sad when there are poeple out there that can't appreciate GOOD \nhearted music then take the time to tear it apart... great album echosmith "
  },
  {
     text:"Really sucks Holy crap bad music keeps coming n idiots keep buying it. Really ud have \nto have severe head trauma to enjoy this boring music. Really it's the \nworst "
  },
  {
     text:"Excellent debut Reminds me of lots of bands from the 80's & 90's who managed to mix some \npop with some great melodies and simple guitar riffs and rhythms and a \nlittle melancholy here and there. It's very evocative, in a good way. "
  },
  {
     text:"Reminds me of Paramore I like the sound. Reminds me a lot of Paramore before they broke up. Keep \nup the good work. "
  },
  {
     text:"No offense. I admire what they're doing at this age and i think they have potential, \nbut they sound like every other band in this genre. They need to find their \nown sound. "
  },
  {
     text:"positive viiibes!! this album finds comfort in the happy times rather than in darkness like \nothers. Quite interesting. her voice reminds me of 2010 taylor swift as \nwell!! they have room to grow, but gr8 debut album!! "
  },
  {
     text:"Hate cool kidSsssss THIS SONG IS ALL THEY PLAY ON THE RADIO THAT SONG SUCKS ITS NOT GOOD AT \nALLLLLLLL "
  },
  {
     text:"Music is perfect! But Why I can't listen it in my country??? It's terrible! "
  },
  {
     text:"Inspiring\" I really love all their songs, their songs are so beautifully written, I \nlove echosmith you can really relate to where they are coming from♥ "
  },
  {
     text:"He he ok if u say so Just saying cool = constipated over raded out sided loser "
  },
  {
     text:"ASDFGHJKL omg new fave band! I absolutely LOVE \"Tell Her You Love Her\" and \"Bright\". \nIt's not supposed to be rock music; it's just really chill and pretty indie \nmusic. And I love it ♥ "
  },
  {
     text:"I read that the female singer here has been compared to Ellie Goulding. I \ndon't think she sounds like her at all. I would compare her to Hayley \nWilliams from Paramore. "
  },
  {
     text:"Great Album I love how Google Play is offering entire albums for $0.99. This album is \nreally good and for $0.99 you can't go wrong!! :) "
  },
  {
     text:"So proud I have been with them since before Cool Kids made a HUGE success and I \njust want to say they're completely worth it to follow and to buy the album \nfrom. Will always be a fan of Echosmith!! "
  },
  {
     text:"Bored Come on Google. Play. Golf. Is more. Exciting. On TV "
  },
  {
     text:"Amazing Band What makes this band amazing, among many other things, is how young they \nall are. Their drummer is 15 or 16 and main singer around 20. This is \namazing talent for being so young, "
  },
  {
     text:"\"Cool Kids\" is pointless The song just doesn't appeal to me, there is nothing interesting about it, \nand because of that turn off, I will not buy your album. "
  },
  {
     text:"Best new band I have the song cool kids stuck in my head. The rest of the album is good \nas well. I would definitely recommend. "
  },
  {
     text:"Amazing!!!! This song should always be 5 star rated .I'm one of those kids in school \nthat always gets teased and hurt alot so this song always lifts me up when \nI feel that way. "
  },
  {
     text:"It's OK I like it,if i had just listened to the reviews i wouldn't have gotten \nit,but it's not bad. "
  },
  {
     text:"Something fresh Cool sound - some deep thoughts but not overdoing it. It feels fresh and \nnew - yet somehow familiar. They're shockingly young... but they know their \nmusic "
  },
  {
     text:"New favorite band Can't remember the last time I bought a whole album trusting I was gonna a \nlove the songs I ha nt heard, and wasn't disappointed! "
  },
  {
     text:"Jeri Inks Larson I don't see a looser in the bunch. this combination is bridging a \ngeneration gap in the slickest way possible. Tony is a renown entertainer \nand has been for decades; Lady G is ruling the world now and introduced a \nstage presence that mirrors a musical production with all of her shows and \nthe two together and enjoying it is just magical. I can't wait to hear the \nwhole thing as it will be history in the making and hold so much deeper a \nmeaning than just good music. Love them both and wish them big success! \ngramma gg "
  },
  {
     text:"I smell Grammy Album of the Year and new-found respect! After hearing the first two preorder songs on iTunes/YouTube (Anything \nGoes & I Can't Give You), I can honestly say that this album is going to \ngain her a newfound respect as an artist! I've always respected her as the \nmost freely creative pop star of mainstream pop today, she is clearly more \ncreative, less manufacturerd and more different than most female pop stars \ntoday. This new jazz direction sounds raw, beautiful & musical! It's good \nto see a pop star push the 'venture-into different-genres' boundary! "
  },
  {
     text:"A beautiful combination! So lovely to have a popular artist not afraid to put herself 'out of her \nelement' and change things up. Such a lovely and light collection of songs \n- perfect for people sick of all the crap music nowadays! I couldn't be \nhappier or prouder to be a Gaga fan. ^____^ "
  },
  {
     text:"This Makes Up For Everything Never been a fan of Lady Gaga's previous work. This album? Absolutely \nphenomenal. Gaga has an amazing jazz voice. Had she been born half a \ncentury back, she'd have been one of the greats; no doubt in my mind. Great \nalbum, completely recommended. "
  },
  {
     text:"Wow. You know, Lady Gaga had planted this image in my mind that she was just an \nartist who made music for the money, but this whole album changed my \nperspective. I can feel her soul through this music, this album, and I can \nwithout a doubt say that she has won my heart by giving me and her music \nwhat other \"artists\" of this generation lack, and that's soul. "
  },
  {
     text:"Incredible and Singular For the all bad critics about lady gaga choices , I think cheek to cheek \nis a brilliant idea to show the next generations what the beautiful and \nintrinsic jazz means. Thanks so much Tony Bennet and Lady Gaga for give \nback the jazz to us and shake again! "
  },
  {
     text:"Was expecting trash, instead, I got class! Introducing classy jazz music to our young generation! I love track #1 & \n#4, BUT.... theyre all awesome! Gaga and Tony sound GREAT together! Coming \nfrom a 13 yr old, I love it! "
  },
  {
     text:"Amazing Just bought cheek to cheek deluxe album. I'm gonna listen to it all night. \nI been a little monster since 2009. I always knew you could sing! By the \nway, I smell Grammy's! #pawsup "
  },
  {
     text:"Amazeballs It's nothing like any other artist have done or accomplished. \nTony+Gaga=Art Both their voices compliment each other's. Never a fan of \njazz until I heard Lady Is A Tramp can't wait for it to be released. Most \ndef buying it "
  },
  {
     text:"It Don't Mean a Thing If it ain't got that swing! This album is absolute GOLD. All the remakes \nformed beautifully with the touch of Lady Gaga. I also find I like her \nvoice much better in this genre. Tony Bennett forever. ♥ "
  },
  {
     text:"Gaga at her best Despite this album not being her \"ussual\" gaga has never sounded better. \nHer voice is beyond beautiful in this album and Tony's Voice compliments it \nquite well. Well done Gaga. This album wont sell as much as her others \nsimply because it is jazz based... BUT it will finally prove that she will \nbe ageless and her voice will carry through the decades. This album can be \nsummed up as PURE. RAW. TALENT. "
  },
  {
     text:"Amazing Who though she could take a 1933's song and put it as beautiful as it is. \nLush life is one of my favorite song of the album. It's a breathtaking \nmasterpiece from the one and only Gaga. Thanks so much for bringing to us \nsuch power and beauty into our lives. I recommend this album to anyone who \never doubt the voice of this great Woman and of course to all the fans of \nclassic jazz music and the fans of Gaga ou Bennet. "
  },
  {
     text:"Perfect but too soon. I thing Lady Gaga and Tony go Really great with each other. This album \ndeserved it's #1 place. But I don't like the fact that it's Lady gagas 5th \nalbum in 7 years. And came way too soon after Artpop (less than a year). I \nfeel like she's moving a bit too fast. I love the theme and style of the \nalbum but just settle a bit "
  },
  {
     text:"Awesome I freaking adore you Mother Monster. Michael Jackson since I was a baby \nand then Lady Gaga since my confusing, she making it then an empowering, \nadolescence. Both of them forever for me. <3 can't wait for this tour :)))) "
  },
  {
     text:"Anyone who needs a reminder that Gaga is more than pageantry will get a \nrefresher with this album. She and Tony sound amazing together and breath \nlife back into songs that have slipped from mainstream consciousness. Lady \nGaga has an amazing and versatile voice and I think this album will appeal \nto Little Monsters as we as non-Little Monsters alike. "
  },
  {
     text:"I love Gaga!! But this album photo is ugly. Tony is a rapist looker. And gaga looks \nfunny. "
  },
  {
     text:"Great intro to jazz for this young generation Having Lady Gaga on this album with the amazing Tony Bennett bridges the \ngenerational gap in an brilliant way. She was phenomenal on his Duets 2 \nalbum, and so this collection doesn't surprise me. Great intro to jazz \nstandards. "
  },
  {
     text:"Jazz? Will she do anything to make money. How unoriginal !!! "
  },
  {
     text:"Wow Gaga is a lady on this album and Tony a gentleman as always. Vocals are \n100% amazing. Remember the songs were recored live with no autotune.So far \n,this album gets 5 stars out of five. Great job! Jazz 4 ever. "
  },
  {
     text:"Love It Been Looking Forward To This Album Since Lady is A Tramp! Lady Gaga slays \nThe Jazz Genre, Expecting Grammy's soon... "
  },
  {
     text:"Love this album is one of the most best jazz albums I ever heard especially \nwith Lady Gaga you can actually hear her jazz voice in the album and she \nsounds very unique. also I have never heard Tony Bennett and Lady Gaga used \ntheir voice together in one album and they both sound very amazing and it's \nsuch a beautiful album, what I love about this album is that you can use it \nwith all through the year, it's good for Valentines Day, Christmas, Easter, \nThanksgiving, and even parties and it's such a lovely album "
  },
  {
     text:"I think this album is the best this year. Lady Gaga is amazing on this and blends vocally so well with Tony Bennett \nI love her solos too vocals sound so pure and great! "
  },
  {
     text:"Fresh and Classic This is the album I've been waiting for! Ever since I heard these two belt \nout \"Lady Is A Tramp,\" I've been dying to hear a full album featuring these \ntwo powerful, relaxing, and unique voices. It's sure to surprise and win \nover many who do not call themselves \"Little Monsters.\" Finally an album \nthat will reach younger parts of societies ears and maybe, just maybe, \nculture them. I hope this album brings you as much joy as it does me! "
  },
  {
     text:"Lady Gaga....I would love to see her perform in a beautiful gown with her hair \nlong and straight (and her natural color) and No crazy makeup to take away \nfrom her natural looks, & Tony as nice as he always looks.... and do a \nwonderful performance...that would be something. "
  },
  {
     text:"pure magic! they sound amazing! & lady gaga blows my mind! what a great thing these \ntwo created. ❤❤ "
  },
  {
     text:"Two legends ♡ Lady Gaga has a versatile voice, it fits in all genres she wants to sing. \nAnd this jazz album with Tony Benett it's something I can't wait to hear. "
  },
  {
     text:"Perfeito Um album que mostra toda a versatilidade musical de Lady Gaga e o controle \nquase monodico de Mr.Benett. Cheek to Cheek ja é considerado um clássico \npoucos dias após seu lançamento e, certamente será um daqueles que sempre \nestará na boca de todos por muito tempo. "
  },
  {
     text:"I love that this album finally came out! I have been hoping for a jazz \nalbum of Lady Gaga and Tony Bennett ever since they did \"Lady is a Tramp.\" \nThe songs on the album are great, and they didn't disappoint me at all. "
  },
  {
     text:"This Album Is Everything You Need In Life I listened the first time and I fell in love with this it's so relaxing \nand smooth and soft good music going to my ears and I'm enjoying every \ncrumb of this amazing duet of Tony and GAGA "
  },
  {
     text:"Cheek to Cheek Vocals are amazing. Not a fan of jazz, but have new found respect for it \nafter hearing some songs off the album. An instant classic! "
  },
  {
     text:"WHERE'S BANG BANG?! From all the songs I've heard so far I just know this album's going to be \namazing but how come on iTunes you get an extra song (Bang Bang), which I \nknow is a song that Gaga will ace, so I'd really like it if that was added, \nthanks! "
  },
  {
     text:"Awful She failed in pop now she failed in jazz. She's just a failure in life. "
  },
  {
     text:"Gaga & Bennett.. Are music Genius'. These two are a force to be reckoned with. Gaga's \nvocals definitely shine on this record and Bennett is just amazing. Great \nalbum for anyone who enjoys Gaga! "
  },
  {
     text:"Gorgeous! I'm a jazz singer and Cheek to Cheek is on my own album. This \nTony/Gaga version is stunning along with the rest of this album. He is a \nlegend but I truly had no idea she could sing like this! "
  },
  {
     text:"Sublime 2 Grandes artistas se unen y crean una verdadera joya. Lady Gaga es la \nartista actual más completa. "
  },
  {
     text:"STUNNING I loooove this album so much!! Gaga...?!!!! Wowed me!! Completely wowed me \nwith her amazing vocals.And Tony, Man his sound is still so sexy and raw \nand....I never thought I'd like this..But I am won over.Gives me chills!! I \nlove cheek to cheek.Thrilled!!!! "
  },
  {
     text:"Wow I wasn't expecting lady gaga I've gotta say she looks great out of her \ncrazy clothes and makeup "
  },
  {
     text:"Simply Amazing I am not big on jazz, but this album, it has changed my perspective on \nthis genre, and this wasn't about her wanting to make money, she has \nadmitted that she has always loved jazz and she had been trained in jazz \nsince she was little "
  },
  {
     text:"Best album ever Recently I'm big fan of jazz, and I've been Little Monster for a long time \nand I think that this album is the best, pure perfection, absolutely \ngorgeous! Paws up Lady Gaga! "
  },
  {
     text:"Crap More rubbish music from a reductive idiot. "
  },
  {
     text:"Amazing Foo's as expected, but nothing out of the ordinary. The Foo's rock out with this one too. So kudos to them for this. Sounds \ngreat, the songs really have the classic Foo Fighters sound, it's amazing \nwhat these guys can do. But overall I don't think there's anything \nhit-worthy I could put my finger on...and to be fair after listening to the \nwhole album I couldn't say I remember one particular song that stood out. \nOr I don't know, maybe \"Outside\". So the sound, the music is great, but \noverall just the regular Foo Fighters without anything really standing out. "
  },
  {
     text:"Awesome! First of all, why did you people pre-order for? Did you think they would \nrun out of downloads lmao! wow. Anyway, this album rocks! Love the \nintegration of rick nielsen, gary clark jr, zack brown etc guest starring \non various tracks. They represented the numerous cities they traveled to \nrecord in well. Thats what this is all about, a love letter to the great \nmusic scenes of America. Buy it. "
  },
  {
     text:"Love it! I've been watching Sonic Highways on HBO and every time they played a \nsong, I kept wanting to hear more. Decided to look it up to find this album \nand I cannot get enough of it. Foo Fighters are amazing and I'm lucky to \nhave seen them live. They never ever disappoint. <33333 :) "
  },
  {
     text:"Foo Fighters culture shock This took a few listens to get into, but I am hooked now. After watching \nthe HBO documentary, you know how much the Foo FIghters love music. They do \ntake on a slightly new sound from song to song, but they still stay true to \n\"their\" sound in the end. "
  },
  {
     text:"Where is my download??? I've heard the first three songs, and they're brilliant and I know the \nrest will be also. But Google please dont turn me away from buying music \nfrom you... I Pre-ordered the album in October, you took money from me on \n9th November, how hard is it to give me access to it on the 11th November \nespecially as the date listed under the title says 10th November. I'll give \nit 5 stars cause it's the Foo Fighters and they deserve nothing less. But \nthis will be the last time I Pre-order any album from you. "
  },
  {
     text:"Foo Fighters never disappoint They are as good as they ever have been. Saw them at Voodoo Fest in New \nOrleans days before this album was released and they teased us with one \nsong. If you love them, learn the story behind the making of this album! "
  },
  {
     text:"This is amazing! I can't even choose a favorite song... I am very happy with how they have \nevolved. The songs on here are longer, so I believe that is why there are \neight. I think it is ridiculous not to at least try to listen to this just \nbecause there are only eight songs. "
  },
  {
     text:"Great Album Maybe not be an instant like for people who loved Wasting Light due to \nonly half the record being all out hard rock, but this album is amazing \nbecause the other half brings back the 90s foo fighters with soft melody \nrock too. This album reaches the quality of both The Color and the Shape \nand Wasting Light which I consider the two best stand out albums by them \neven though I own and love all their albums. "
  },
  {
     text:"Does Not Dissapoint!! Leave it to the Foo Fighters, to come out with an album so high in quality \nafter all the years they've been together. They haven't lost it, and I \nhighly doubt they ever will. Great album, fantastic band. "
  },
  {
     text:"Another fantastic foos album Great album. Sometimes has trouble flowing together and seems shorter than \nmost ff albums, but that could be me. Highlights: Something From Nothing, \nFeast and the Famine, and I Am A River "
  },
  {
     text:"... Wasting light didn't impress me, and I hate to say it but this one is even \nworse. Don't understand how they went from echoes to these last two. \nCongregation's chorus has a cool chord progression, and that's about it... "
  },
  {
     text:"Pure class again How the foo's keep delivering more and better just defies belief. Dave \ndidn't just pop in the studio and presto another album of more the same, \nits a masterpiece of musical depth inspired from his road trip for the \nAmerican Rock ... "
  },
  {
     text:"Ton of respect for Dave G. His picture should be in the dictionary next to the word Rock! The Foos \nare a great band just like his others (nirvana, probot, them crooked \nvultures). And he never mixes the music, every band is original. This album \nis great, it just keeps growing on me. Fun idea of writting and recording a \nnew song in every city. Rock on Dave, Taylor, Pat, Chris, and Nate. "
  },
  {
     text:"Am I too old? Never knew much about the talented David Grohl until I saw the BBC Sound \nCity TV documentary and read his autobiography 'This Is A Call' . Now wish \nI look listened to my nearly 40 year old son's Nirvana vinyl / CDs . Love \nthe \"Sonic Highways\" TV series at present showing on BBC TV and BBC i \nplayer. Educating so many about USA roots. Am I too old to buy this at 61? "
  },
  {
     text:"It's Official.... The Foo Fighters have never put out a bad album! I really love the \nstructure of this album. 8 great songs and no fluff or bonus tracks. Just \nlike bands used to do back in the day. Great job guys! "
  },
  {
     text:"Disappointed I've been a Foo Fighters fan from the beginning and believe they are \ngreat. But I was disappointed with Sonic Highway because of the lack of \nmaterial. 8 songs. And out of those there are 4 worth. listening to - \nFeast/Famine, Congregation, Outside, In The Clear. The others are rehashed \nof old Foo, or songs made by canabalizing Dio and/or Lynyrd Skynyrd. \nSomething to put out before Christmas for the marketing executives I guess. "
  },
  {
     text:"Another great one My dad introduced me to the foo fighters at about age ten with one by one \nand I can't get enough, love the new album and I'm gonna go see them live \nasap. "
  },
  {
     text:"Sonic highways I love the foo fighters . But this new cd is horrible. Daves worst lyrics \never. I have ever foo cd and been to like 6 concerts. I can't support this. \nPlease make a new crooked vultures cd and take some time off. Foo is much \nbetter then this. "
  },
  {
     text:"I have been watching \"Sonic Highways\" on HBO The three episodes so far have been amazing as well as the songs. If you \nlike the Foo Fighters music anyway, watch Sonic Highways and you will fall \nin love. Cant wait for the release! "
  },
  {
     text:"Great Rock and Roll The Foo Fighters are nothing if not consistent. They do straight up Rock \nand they do it well. And Sonic Highways is no exception. It doesn't sound \nlike there is any standout no.1 hits. But as a total album it is pretty \ndarn good. Not perfect, but good. "
  },
  {
     text:"A return to roots I have loved all the foo fighters work but the early albums through \n\"nothing left to lose\" were better than the following ones. \"Sonic \nHighways\" feels like it fits in with those early albums perfectly combining \na perfect mix of hard rock and softer songs. It is gritty, honest and \nbeautiful and a new favorite! "
  },
  {
     text:"Yassss ABSOLUTELY AMAZING. Loved every second of it. Something from nothing is \ngonna be a hit, that song live is great. I really love all the songs so \nmuch. I think they did really good on this album. Personally enjoy 'the \nfeast and the famine' most "
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
