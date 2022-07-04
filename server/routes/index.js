const express = require('express');
const db = require('../db/connection_db');

//create a router
const router = express.Router();

//Import GET controllers 
const {
    getAllFurnitures,
    getAFurniture,
    getFurnitureByCat
} = require('../controllers/get_controllers');


//Import POST controllers 
const {
    postAFurniture,
    postAPersonProfile
} = require('../controllers/post_controllers');


//Import delete controllers 
const {
    deleteAFurniture
} = require('../controllers/delete_controllers'); 


//Récupérer tous les meubles 
router.get('/meubles', async (req, res, next) => {
    //res.json({ test : 'test' }); 
    try {
        let results = await getAllFurnitures();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


//Récupérer un meuble en fonction de son id
router.get('/meubles/:id', async (req, res, next) => {
    try {
        let results = await getAFurniture(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


//Récupérer les meubles en fonction de leur catégorie
router.get('/meubles/category/:categorie', async (req, res, next) => {
    try {
        let results = await getFurnitureByCat(req.params.categorie);
        //console.log("params:", req.params.categorie); 
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


//Poster un nouveau meuble 
router.post('/meubles/post', async (req, res, next) => {
    try {
        // chacune des variables récupère une partie des infos envoyées depuis le front 
        const categorie = req.body.categorie;
        const type = req.body.type; 
        const prix = req.body.prix;
        const etat = req.body.etat; 
        const hauteur = req.body.hauteur;
        const largeur = req.body.largeur; 
        const profondeur = req.body.profondeur; 
        const matiere = req.body.matiere; 
        const couleur = req.body.couleur; 
        const photo1 = req.body.photo1; 
        const photo2 = req.body.photo2; 
        const photo3 = req.body.photo3; 
        postAFurniture(categorie, type, prix, etat, hauteur, largeur, profondeur, matiere, couleur, photo1, photo2, photo3) // appel de la fonction de controller ici avec les variables définies juste au dessus
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


//Création d'un nouveau user 
router.post('/signup', async (req, res, next) => {
    try {
        // chacune des variables récupère une partie des infos envoyées depuis le front 
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const adresse = req.body.adresse; 
        postAPersonProfile(name, email, password, adresse) // appel de la fonction de controller ici avec les variables définies juste au dessus
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


//Nouvel achat : nouveau acheteur + nouveau vendeur ? 



//Update un meuble : baisser le stock, modifier les infos ? 



//Delete un meuble 
router.delete('/meubles/:id', async (req, res, next) => {
    try {
        let results = await deleteAFurniture(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router; 