
var login = function() {
    return {
        type: 'LOGIN'
    }
}
var logout = function() {
    return {
        type: 'LOGOUT'
    }
}

module.exports = {login, logout};