// Require the controllers
var users = require('./../controllers/users.js');
var list = require('./../controllers/lists.js');

module.exports = function(app) {

    app.post('/user', users.create);
    app.get('/users', users.index);
    app.post('/finduser', users.find);
    app.post('/show', users.show);
    app.post('/FindUserByID', users.findid)

    app.post('/list', list.create);
    app.get('/lists', list.index);
    app.get('/get/list/:id', list.find);
    app.delete('/lists/:id', list.delete);
    app.get('/list/check/:id', list.check);
    app.get('/list/uncheck/:id', list.uncheck);
}
