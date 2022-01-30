const express = require('express');
const mysqlconnection = require('../conexion');
const router = express.Router();

const myaqlconnection = require('../conexion');

router.get('/', (req, res) => {
    mysqlconnection.query('Select * from datosusuario', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }
        else{
            console.log("error en usuario");
        }
    });
});
// Filtrar por id
router.get('/:id', (req,res) => {
    const { id } = req.params;
    mysqlconnection.query('Select * from datosusuario where idUsuario = ?',[id],(err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }
        else{
            console.log("error en usuario");
        }
    });
});

module.exports = router;