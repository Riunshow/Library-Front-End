const Mock = require('mockjs');
const Random = Mock.Random;

// 登录
const loginUser = (opt) => {
    const options = JSON.parse(opt.body)
    let user = {}
    if (options.user_num == 'user') {
        let newUserObject = {
            username: 'user',
            experience: 1200,
            integral: 320,
            memoryBook: {
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

// 退出
const logout = () => {
    let user = {}
    return user
}

Mock.mock('/user/login', 'post', loginUser);
Mock.mock('/user/logout', 'post', logout);