const User = require('./user.model.js');


const controller = {
    create: (req, res) => {

        console.info( req );

        // Validate request
        if(!req.body.name) {
            return res.status(400).send({
                message: 'Name required'
            });
        }

        // Create a User
        const user = new User({
            name: req.body.name || 'Untitled User',
            email: req.body.email,
        });

        // Save User in the database
        user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the User.'
            });
        });

    },

    all: (req, res) => {

        User.find()
            .then(users => {
                res.send(users);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving users."
                });
            });

    }

}

module.exports = controller;
