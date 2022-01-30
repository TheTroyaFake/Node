const express = require('express');
const mysqlconnection = require('../conexion');
const router = express.Router();

const myaqlconnection = require('../conexion');

router.get('/vehicle/user/:id', (req, res) => {
    const { id } = req.params;
    mysqlconnection.query('Select * from listavehiculo where idUsuario = ? ',[id], (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }
        else{
            console.log("error en usuario", id);
        }
    });
});
// Filtrar por id
router.get('/vehicle/:idVehicle', (req,res) => {
    const { idVehicle } = req.params;
    mysqlconnection.query('Select * from listavehiculo where idVehiculo = ?',[idVehicle],(err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }
        else{
            console.log("error en vehiculo");
        }
    });
});

module.exports = router;