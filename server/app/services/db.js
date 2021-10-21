const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect('mongodb://localhost:27017/chooser', {
    useNewUrlParser: true
}).then(() => {

    // @TODO: run this from a one time script
    var User = require('../components/user.model');
    User.init();

    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});