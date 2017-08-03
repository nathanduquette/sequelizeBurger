// require
var orm = require("../config/orm.js");

var veggie = {
    all: function(cb) {
        orm.all("veggie_burger", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb){
        orm.create("veggie_burger", cols, vals, function(res){
            cb(res);
        });
    
    },
    update: function(objColVals, condition, cb) {
        orm.update("veggie_burger", objColVals, condition, function(res){
            cb(res);
        });
    }
}

// export
module.exports = veggie;