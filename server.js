const express = require('express'); 
//on importe le rooter
const apiRouter = require('./server/routes')
const app = express(); 

//Body converted to json
app.use(express.json()); 

//Indication de la route de base à utiliser 
app.use('/', apiRouter); 

//we listen on a port 
app.listen(process.env.PORT || '3001', () => {
    console.log(`Server is running on : ${process.env.PORT || '3001'}`); 
}); 