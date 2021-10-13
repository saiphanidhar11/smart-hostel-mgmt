var sqlite = require("sqlite3");

var db = new sqlite.Database("database")

db.get('select * from users where rowid=99',[],function(err,row){
    if(err){
        console.log(err);
    } else {
        console.log(row);
    }
})