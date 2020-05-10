var identity = require("./identity.js")
var validate = function() {
    if((identity.name.length < 5) || (identity.password.length < 8)) {
        return false
    }
    else {
        return true
    }
}

module.exports = validate