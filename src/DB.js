const fs = require("node:fs");

const userPath = "./data/users";
const sessionsPath = "./data/sessions";

class DB {
    constructor() {
        /*
        A sample object in this users array would look like:
        { "id":1, "name":"Liam Brown", "username":"liam23", "password":"string" }
        */
        this.users = JSON.parse(fs.readFileSync(userPath, "utf-8"));
        
        /*
        A sample object in this sessions array would look like:
        { userId: 1, token: 23423423 }
        */
        this.sessions = JSON.parse(fs.readFileSync(sessionsPath, "utf-8"));
    }
    
    update() {
        this.users = JSON.parse(fs.readFileSync(userPath, "utf-8"));
        this.sessions = JSON.parse(fs.readFileSync(userPath, "utf-8"));
    }
    
    save() {
        fs.writeFileSync(userPath, JSON.stringify(db.users));
        fs.writeFileSync(sessionsPath, JSON.stringify(db.sessions));
    }
}

const db = new DB();
module.exports = db;