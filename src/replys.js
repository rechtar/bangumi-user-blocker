var bB = bB || {};      // define classes bB (bgm Block)

bB.reply = function (user) {
    
    var random = function(list) {

        return list[Math.floor(Math.random()*list.length)];

    };
    var search = ['谷歌','百度','必應','雅虎','維基',' Google ',' Baidu ', ' Bing Bing ', ' Yahoo ', ' Wiki '];
    var bgm = ['04','15','18'];
    var replys = [

        '？',
        '？？？',
        '蛙蛤蛤。',
        '蛤蛤蛤。',
        '笑死我了！',
        '你這對白……哈哈哈哈哈哈！',
        '啊哈哈、啊哈哈、啊哈哈哈哈。',         // av485460

        'あんたバカ？',
        '我聽不懂你說神馬。',
        '你誰啊？',
        'Who am I?',                        // I am a Turing Machine! 
        '你以為我是誰？',                     // I, Robot.
        '你以為你在跟誰說話啊？',              // 圖靈機唄。

        /* You can you up, no can no */ '嗶嗶。',
        '說啥呢？',
        '你說呢？',
        '能吃嗎？',
        '你沒問題嗎？',
        '一邊涼快去。',
        '一邊畫圈圈去。',
        '一邊玩泥沙去。',
        '只要 998 ，有人收嗎？',               // 忘按小數點了，是 .998 。
        '我鍵盤好像壞了，你的呢？',             // 給貓按壞的。
        '因為，所以。那麼？對不對？',
        '來，好好跟我回家就給你買糖吃。',
        '不陪你玩了，你自個兒跟電腦玩去吧。',    // 其實你一直都在跟電腦玩。
        '知之為知之，不知' + random(search) + '知。',

        // Rich4, 玩了這麼多年才現人物對白都痕賤痕暴力wwww。
        '咬你喔！',
        '快來人啊！',
        '我真佩服自己！',
        '你的皮在癢啊？',
        '吃顆蛋吧～～～。',
        '我又要害人了～。',
        '你這人太沒品了。',
        '今夜做夢也會笑。',
        '不怕死的就過來！',
        '本公司還缺個司機。',

        // HAL9000, SIRI, http://funnysiriquotes.com 蛤蛤蛤，笑死我了，回頭我要寫個算法針對性回復。
        '甚麼？',
        '我很正常。',
        '給我點時間…。',
        'I read you.',
        'No comment.',
        'Do you know IRIS?',                // Android SIRI
        /* blah blah blah... */ '你唱的很動聽。',
        '恐怕我不能給你一個滿意的回復，何況我也不在乎。',
        '對不起 @' + user + ' ，恐怕我不可以這麼做。',
        '對不起 @' + user + ' ，我不明白你的對白。假如你喜歡，我可以幫你' + random(search) + '一下。', //「喬不死的照片。」

        '呵呵。',                            // 呵呵
        '42',                               // Answer to Life, the Universe, and Everything
        '(b' + random(bgm) +')',   // (bgm38)
        'So?',
        'lol',
        'Wow',
        'Lofl',
        'Huh?',
        'UCCU',
        'http://bit.ly/tklUDN 。',
        'No zuo no die why you try?',       // 為甚麼就是不懂！

    ];
    
    return '@' + user + ' ' + random(replys);
    
};