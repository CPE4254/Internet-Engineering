let express = require("express"),
    mongoose = require('mongoose'),
    User = require('./model/UserModel'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.port || 3000

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/test')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


let routes = require('./routes/authRoutes')
routes(app)

app.listen(port)

console.log("Server started on port: ", port)