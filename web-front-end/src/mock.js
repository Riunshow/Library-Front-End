const Mock = require('mockjs');
const Random = Mock.Random;

// 登录
const loginUser = (opt) => {
    const options = JSON.parse(opt.body)
    let user = {}
    if (options.userid == 'user') {
        let newUserObject = {
            username: 'user',
            readingTime: '213h',
            integral: 320,
            recentlyBook: {
                title: 'CSS世界',
                chapter: '1-1',
                chpaterHead: '概述'
            },
            code: 0,
        }
        user = newUserObject
    } else {
        let newUserObject = {
            code: -1,
        }
        user = newUserObject
    }
    return user;
}

Mock.mock('/user/login', 'post', loginUser);

// 退出
const logout = () => {
    let user = {}
    return user
}

Mock.mock('/user/logout', 'get', logout);

// 获取图书推荐
const recommandBook = () => {
    let book = [{
        img: require('./../static/1.jpg'),
        name: '失乐园',
        info: '渡边淳一代表作，长期雄踞日本畅销书排行榜榜首，由黑木瞳、役所广司主演的电影引发“失乐园”热。此次的全新林少华译本，将带你体味不一样的渡边淳一，不一样的失乐园。',
        cateName: '玄幻奇幻',
        view: '123',
    }, {
        img: require('./../static/2.jpg'),
        name: '我不',
        info: '百万级畅销书作家大冰2017年新书！用温暖的故事结一段小善缘，陪你微笑着对命运说：我不！不屈不挠、不破不立，他们因不，而不同，乃至不凡！随书奉送20余首有钱也买不到的民谣。',
        cateName: '现代都市',
        view: '345',
    }, {
        img: require('./../static/3.jpg'),
        name: '岛上书店',
        info: '现象级全球畅销书！一年之内畅销美英德法日等30国！感动全球千万读者的阳光治愈小说！美国独立书商推荐阅读桂冠、美国图书馆推荐阅读桂冠。每个人的生命中，都有无比艰难的那一年，将人生变得美好而辽阔。读客出品',
        cateName: '武侠仙侠',
        view: '5566',
    }, {
        img: require('./../static/4.jpg'),
        name: '夏日终曲',
        info: '2018奥斯卡获奖影片Call me by your name原著小说。十七岁的爱情以身伺火，三十七岁时却温暖余生 睽违二十年的漫长告白：请以你的名字呼唤我',
        cateName: '现代言情',
        view: '784',
    }, {
        img: require('./../static/5.jpg'),
        name: '摆渡人2：重返荒原',
        info: '百万畅销心灵治愈小说《摆渡人》第二季重磅来袭！如果生命进入再次的轮回，你又愿意为此付出怎样的代价？）白马时光',
        cateName: '穿越重生',
        view: '554',
    }]
    return book;
}

Mock.mock('/book/recommand', 'get', recommandBook);

// 获取文章及评论
const article = () => {
    let _article = [{
        title: '什么情况下你会毫不犹豫地辞职？',
        content: '在校期间我的大部分精力花在c++上，但是也比较擅长js，校招的时候阴差阳错得做了前端，感觉自己的c++水平无用武之地，怎么破？只知道可以写webassembly，node拓展，但是工作中根本没有应用场景，大家都是在什么情况下用到c++的？在校期间我的大部分精力花在c++上，但是也比较擅长js，校招的时候阴差阳错得做了前端，感觉自己的c++水平无用武之地，怎么破？只知道可以写webassembly，node拓展，但是工作中根本没有应用场景，大家都是在什么情况下用到c++的？',
        agreeCount: 10,
        commentsCount: 6,
        comments: [{
            headImg: require('./../static/logo.png'),
            name: 'utchi12138',
            time: '3 天前',
            content: '我觉得不错',
            like: '30',
        }, {
            headImg: require('./../static/logo.png'),
            name: 'utchi12138',
            time: '3 天前',
            content: '我觉得不错',
            like: '30',
        }, {
            headImg: require('./../static/logo.png'),
            name: 'utchi12138',
            time: '3 天前',
            content: '我觉得不错',
            like: '30',
        }, {
            headImg: require('./../static/logo.png'),
            name: 'utchi12138',
            time: '3 天前',
            content: '我觉得不错',
            like: '30',
        }, {
            headImg: require('./../static/logo.png'),
            name: 'utchi12138',
            time: '3 天前',
            content: '我觉得不错',
            like: '30',
        }, {
            headImg: require('./../static/logo.png'),
            name: 'utchi12138',
            time: '3 天前',
            content: '我觉得不错',
            like: '30',
        }],
    }, {
        title: 'C++中cout一个地址可以固定一个值吗？',
        content: '你一直都没改过len的值。我猜，因为你cout了len的地址，使得len这个变量存在了，而不是全部被替换成5。至于后面访问地len是不是真的去读变量而没有直接用5代替，你还得反汇编一下才知道。可能因为一个从来不会读的len变量的存在，使得你的越界的后果不见了。',
        commentsCount: 0,
        agreeCount: 30,
    }, {
        title: '什么情况下你会毫不犹豫地辞职？',
        content: '在校期间我的大部分精力花在c++上，但是也比较擅长js，校招的时候阴差阳错得做了前端，感觉自己的c++水平无用武之地，怎么破？只知道可以写webassembly，node拓展，但是工作中根本没有应用场景，大家都是在什么情况下用到c++的？在校期间我的大部分精力花在c++上，但是也比较擅长js，校招的时候阴差阳错得做了前端，感觉自己的c++水平无用武之地，怎么破？只知道可以写webassembly，node拓展，但是工作中根本没有应用场景，大家都是在什么情况下用到c++的？',
        agreeCount: 10,
        commentsCount: 6,
        comments: [{
            headImg: require('./../static/logo.png'),
            name: 'utchi12138',
            time: '3 天前',
            content: '我觉得不错',
            like: '30',
        }, {
            headImg: require('./../static/logo.png'),
            name: 'utchi12138',
            time: '3 天前',
            content: '我觉得不错',
            like: '30',
        }, {
            headImg: require('./../static/logo.png'),
            name: 'utchi12138',
            time: '3 天前',
            content: '我觉得不错',
            like: '30',
        }, {
            headImg: require('./../static/logo.png'),
            name: 'utchi12138',
            time: '3 天前',
            content: '我觉得不错',
            like: '30',
        }, {
            headImg: require('./../static/logo.png'),
            name: 'utchi12138',
            time: '3 天前',
            content: '我觉得不错',
            like: '30',
        }, {
            headImg: require('./../static/logo.png'),
            name: 'utchi12138',
            time: '3 天前',
            content: '我觉得不错',
            like: '30',
        }],
    }]
    return _article;
}

Mock.mock('/article', 'get', article);

// 最近阅读
const nearlyRead = () => {
    let book = [{
            year: '2018',
            date: '4月26日',
            img: require("./../static/1.jpg"),
            name: '失乐园',
            progress: '10%',
            where: '1-1 序言',
        },
        {
            year: '2018',
            date: '4月26日',
            img: require("./../static/4.jpg"),
            name: '失乐园',
            progress: '10%',
            where: '1-1 序言',
        }
    ]
    return book
}

Mock.mock('/user/nearlyread', 'get', nearlyRead);

// 我的收藏
const myCollect = () => {
    let book = [{
            year: '2018',
            date: '4月26日',
            img: require("./../static/3.jpg"),
            name: '岛上书店',
            progress: '10%',
            where: '1-1 序言',
        },
        {
            year: '2018',
            date: '4月26日',
            img: require("./../static/2.jpg"),
            name: '我不',
            progress: '10%',
            where: '1-1 序言',
        }, {
            year: '2018',
            date: '4月26日',
            img: require("./../static/4.jpg"),
            name: '失乐园',
            progress: '10%',
            where: '1-1 序言',
        }
    ]
    return book
}

Mock.mock('/user/mycollect', 'get', myCollect);