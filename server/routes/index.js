const express = require('express'); 
const db = require('../db/connection_db'); 

//create a router
const router = express.Router(); 

//Import controllers 
const  { 
    getAllFurnitures,
    getAFurniture,
    getFurnitureByCat
} = require('../controllers'); 

//Route : récupérer tous les meubles 
router.get('/', async (req, res, next) => {
        //res.json({ test : 'test' }); 
    try {
        let results = await getAllFurnitures();
        res.json(results); 
    } catch(e) {
        console.log(e);
        res.sendStatus(500); 
    }
}); 


//Route : récupérer un meuble en fonction de son id
router.get('/:id', async (req, res, next) => {
    try {
        let results = await getAFurniture(req.params.id);
        res.json(results); 
    } catch(e) {
        console.log(e);
        res.sendStatus(500); 
    }
}); 

//Route : récupérer les meubles en fonction de leur catégorie
router.get('/category/:categorie', async (req, res, next) => {
    try {
        let results = await getFurnitureByCat(req.params.categorie);
        //console.log("params:", req.params.categorie); 
        res.json(results); 
    } catch(e) {
        console.log(e);
        res.sendStatus(500); 
    }
}); 


module.exports = router; 