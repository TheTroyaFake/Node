const mysql = require('mysql');

const mysqlconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prueba_node'
});

mysqlconnection.connect(function(err){
    if(err){
        console.log("error al conectar");
        return;
    }else{
        console.log("Se ha conectado");
    }
});

module.exports = mysqlconnection;