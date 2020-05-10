var identity = require("./identity.js")
var validate = require("./validate.js")
var name = identity.name
var password = identity.password

console.log(identity, validate(name, password))