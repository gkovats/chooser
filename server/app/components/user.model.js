const mongoose = require('mongoose');

const EMAIL_MIN = 7;
const EMAIL_MAX = 100;

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minLength: 2,
        maxLength: 80,
        required: [ true, 'You need a name.'],
    },
    email: {
        type: String,
        minLength: [ EMAIL_MIN, `Email must be at least ${EMAIL_MIN} characters` ],
        maxLength: [ EMAIL_MAX, `Email cannot be larger than ${EMAIL_MAX} characters` ],
        unique: true,
        // required: [ true, 'You need an email' ],
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    },
}, {
    collection: 'users',
    timestamps: true
});

UserSchema.index({ email: 1 });

const User = mongoose.model('User', UserSchema);

module.exports = User;
