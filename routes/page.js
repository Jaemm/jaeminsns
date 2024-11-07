const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.followerCounter = 0;
    res.locals.followingCount = 0;
    res.locals.followerIdList = [];
    next();
});

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile', {title: '내 정보 - jaeminsns'});
});

router.get('/join', isLoggedIn, (req, res) => {
    res.render('join', {title: '회원가입 - jaeminsns'});
});

router.get('/', (req, res, next) => {
    const twits = [];
    res.render('main', {
        title: 'jaeminsns',
        twits,
    });
});

module.exports = router;