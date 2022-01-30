const express = require('express');
const mysqlconnection = require('../conexion');
const router = express.Router();

const myaqlconnection = require('../conexion');

router.get('/servicio/user/:id', (req, res) => {
    const { id } = req.params;
    mysqlconnection.query('Select * from listaservicios where idServicio = ? ',[id], (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }
        else{
            console.log("error en servicio", id);
        }
    });
});

module.exports = router;