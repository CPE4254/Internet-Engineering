'use strict'

module.exports = (app, authenticate) => {
    let auth = require('../controller/authController')

    app.route('/login')
        .post(auth.login)
    
    app.route('/register')
        .post(auth.register)

    app.route('/profile')
        .get(authenticate(), auth.profile)
    
    app.route('/users')
        .post(authenticate(), auth.sugestUsers)

    app.route('/username')
        .post(authenticate(), auth.username)

    app.route('/usernames')
        .post(authenticate(), auth.usernames)

    app.route("/userProfile")
        .post(authenticate(), auth.findUser)
}