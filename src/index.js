const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//routes
app.use(require('./routes/usuarios'))
app.use(require('./routes/vehiculos'))
app.use(require('./routes/servicios'))

app.listen(app.get('port'), ()=>{
    console.log("Server on port",app.get('port'));
});