'use strict'
const Port = 4000;
const app = require('./config/config');
const db = require('./config/database');


//Connect to db
db.authenticate()
    .then(() => {
        //Server
        app.listen(Port,()=>{
            console.log('Conectection established and server up in localhost:4000');
        });
    })
    .catch((err)=> {
        console.log(err);
    });
   