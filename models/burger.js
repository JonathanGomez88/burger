var orm = require("../config/orm");

var burger = {
    all: function(cb) {
      orm.all(function(res) {
        cb(res);
      });
    },
    
    create: function(name, cb) {
        orm.create("burgers", ["burger_name", "devoured"], 
        [name, false], cb);
    },
    update: function(id, cb) {
      var condition = "id= " + id;
      orm.update("burgers", { devoured: true}, condition, cb)
    }
  }

  module.exports = burger;