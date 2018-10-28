require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');


const passportSetup = require('./config/passportConfig');
const rtsIndex = require('./routes/index.router');
const authRoutes = require('./routes/auth-routes');
var path = require('path');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(bodyParser.json({limit: '50mb'}));
app.use('/api', rtsIndex);
app.use('/auth', authRoutes);


// ngbuild
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'pulic/index.html'));
})
//error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});



// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));