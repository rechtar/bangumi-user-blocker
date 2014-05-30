var bB = bB || {};      // define classes bB (bgm Block)

bB.reply = function (user, input) {
    
    var random = function(list) {

        return list[Math.floor(Math.random()*list.length)];

    };
    var chance = function() {
        return Math.random();
    };
    var output;
        
    // http://
    if ( chance() < 0.5 && input.match(/http/) ) {

        output = random([

            '我不要機器中毒。',
            '無法分析網址……。',
            '別老是上小黄網了，你媽喊你回家吃晚飯。',
            '對不起，老師說不能亂打開別人給的網址。',
            '需要我幫你下載一個 ' + random(['IE6','Lynx','Netscape 1.0','BB Browser','360瀏覽器']) + ' 打開這個網址嗎？',
            '請先付款 0.01 BTC 到 12538，我們會把網址內容發到您的註冊手機裏的，要註冊手機請先付款 0.01 BTC 到 12538。謝謝惠顧。',

        ]);

    }
    
    // ???
    else if ( chance() < 0.3 && input.match(/(？|\?|﹖)/) ) {

        var aToZ = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        var search = ['谷歌','百度','必應','雅虎','維基',' Google ',' Baidu ', ' Bing Bing ', ' Yahoo ', ' Wiki '];

        output = random([
            
            '42',                                           // Answer to Life, the Universe, and Everything
            '啊？你問我！？',
            '還有其他問題嗎？',
            '讓我思考思考，八百萬年後你們再回來問吧。',           // 42 續
            '恐怕我不能給你一個滿意的回復，何況我也不在乎。',
            'Sorry, no answer avaiable in the memory.',
            '知之為知之，不知' + random(search) + '知。',
            '這個啊……你認為我放到' + random(search) + '裏能給你一個答復嗎？',
            '這個問題太有難度了，建議你去問一下 doctor ' + random(aToZ) + ' 。',
            '對不起 @' + user + ' ，我不明白你的問題。假如你喜歡，我可以幫你' + random(search) + '一下。', //「喬不死的照片。」
            
        ]);

    }
            
    // bgm38
    else if ( chance() < 0.1 && input.match(/(=_,=|ಠ＿ಠ|=◡=|=_=)/) ) {

        var bgm = ['03','04','13','15','18','19','20','21','22','84'];
        output = '(bgm' + random(bgm) +')';

    }

    // jackpot
    else if ( chance() < 0.005 ) {

        output = '㳟喜你！你搖中 0.5% 的獎了，請到 http://bangumi.tv/blog/43672#post_33934 查收代碼。機器人是 24/7/365 年終無休的，歡迎繼續調戲。';

    }

    // mini-jackpot
    else if ( chance() < 0.05 ) {

        output = random([

            'Do you know IRIS?',                // Android SIRI
            'Who am I?',                        // I am a Turing Machine! 
            '你以為我是誰？',                     // I, Robot.
            '你以為你在跟誰說話啊？',              // 圖靈機唄。
            '我不是你想像中的「人」。',
            '看着像是兩個機器人對話啊。',
            '你知道嗎？屏蔽插件痕好用！',
            '你有沒有感覺這些對白有些奇怪？',
            '汝為汝，吾非吾，既知之，何棄療。',
            '你開始語無倫次了，你是不是機器人？',
            '不陪你玩了，你自個兒跟電腦玩去吧。',    // 其實你一直都在跟電腦玩。
            
        ]);

    }
            
    // default
    else { 

        output = random([

            '？',
            '？？？',
            '蛙蛤蛤。',
            '蛤蛤蛤。',
            '笑死我了！',
            '你這對白……哈哈哈哈哈哈！',
            '啊哈哈、啊哈哈、啊哈哈哈哈。',         // av485460

            /* You can you up, no can no */ '嗶嗶。',
            '說啥呢？',
            '你說呢？',
            '能吃嗎？',
            '你誰啊？',
            'あんたバカ？',
            '你沒問題嗎？',
            '一邊涼快去。',
            '一邊畫圈圈去。',
            '一邊玩泥沙去。',
            '我聽不懂你說神馬。',
            '只要 998 ，有人收嗎？',               // 忘按小數點了，是 .998 。
            '我鍵盤好像壞了，你的呢？',             // 給貓按壞的。
            '因為，所以。那麼？對不對？',
            '來，好好跟我回家就給你買糖吃。',

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
            /* blah blah blah... */ '你唱的很動聽。',
            '對不起 @' + user + ' ，恐怕我不可以這麼做。',
            'I\' sorry ' + user + ', I\'m afraid I can\'t do that.',

            '呵呵。',                            // 呵呵
            'So?',
            'lol',
            'Wow',
            'Lofl',
            'Huh?',
            'UCCU',
            'http://bit.ly/tklUDN 。',
            'No zuo no die why you try?',       // 為甚麼就是不懂！

        ]);

    };

    return '@' + user + ' ' + output;
    
};