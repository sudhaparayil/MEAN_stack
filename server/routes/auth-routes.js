const router = require('express').Router();
const passport = require('passport');
// const User = require("../model/user");

// // auth login
// router.get('/login', (req, res) => {
//     // res.render('login', { user: req.user });
// });

// // auth logout
// router.get('/logout', (req, res) => {
//     // handle with passport
//     // res.send('logging out'); 
//     req.session = nullnn
//     //  req.logout();
//      return res.json({value:true})

// });

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile','email']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // console.log('you reached the redirect URI');
    console.log(req.user.id)
    // return res.redirect("/profile" );
    return res.redirect("/googleprofile/" + req.user.id);
    // res.redirect('/profile');
});

module.exports = router;