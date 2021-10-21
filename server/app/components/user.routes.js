
module.exports = (app) => {
    const user = require('./user.controller.js');

    // Create a new Note
    app.post('/users', user.create);

    // // Retrieve all Notes
    app.get('/users', user.all);

    // // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);

    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);

    // // Delete a Note with noteId
    // app.delete('/notes/:noteId', notes.delete);
}