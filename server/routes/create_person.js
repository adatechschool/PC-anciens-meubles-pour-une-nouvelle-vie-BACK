const express = require('express'); 
const db = require('../db/connection_db'); 

//create a router
const router = express.Router(); 

//Import controllers 
const  { 
    postAPersonProfile
} = require('../controllers'); 

router.post('/signup', async (req, res, next) => {
    //res.json({ test : 'test' }); 
try { 
    // chacune des variables récupère une partie des infos envoyées depuis le front 
    const name  = req.body.name;
    const email = req.body.email;
    const password = req.body.password; 
    postAPersonProfile(name, email, password) // appel de la fonction de controller ici avec les variables définies juste au dessus
} catch(e) {
    console.log(e);
    res.sendStatus(500); 
}
});