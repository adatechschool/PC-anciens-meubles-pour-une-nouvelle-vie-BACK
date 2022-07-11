const express = require('express'); 
//on importe le rooter
const apiRouter = require('./server/routes');
const cors = require('cors');
//Session 
const app = express();
const session = require('express-session');
const path = require('path');

//Body converted to json
app.use(express.json()); 

app.use(cors())

//Indication de la route de base à utiliser 
app.use('/', apiRouter); 

//we listen on a port 
app.listen(process.env.PORT || '3001', () => {
    console.log(`Server is running on : ${process.env.PORT || '3001'}`); 
}); 


//Login
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));