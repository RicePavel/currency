
var upload = function() {
    return {
        type: 'UPLOAD'
    }
}
var load_ok = function(data) {
    return {
        type: 'LOAD_OK',
        data
    }
}

module.exports = {upload, load_ok};