const express = require('express');
const db = require('../db/connection_db');

//create a router
const router = express.Router();

//Import GET controllers 
const {
    getAllFurnitures,
    getAFurniture,
    getFurnitureByCat,
    getPersonne,
    getBasket
} = require('../controllers/get_controllers');


//Import POST controllers 
const {
    postAFurniture,
    postAPersonProfile,
    postAcheteur,
    postVendeur,
    postBasket
} = require('../controllers/post_controllers');


//Import delete controllers 
const {
    deleteAFurniture,
    deletePersonne,
    deleteBasket
} = require('../controllers/delete_controllers'); 


//Import update controllers 
const {
    updateAFurniture,
    updatePersonne
} = require('../controllers/update_controllers'); 


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

//Récupérer toutes les personnes
router.get('/personne', async (req, res, next) => {
    //res.json({ test : 'test' }); 
    try {
        let results = await getPersonne();
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


//Création d'un nouveau user ("personne")
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


//Nouvel achat : nouveau acheteur
router.post('/acheteur/post', async (req, res, next) => {
    try {
        const personne_id = req.body.personne_id;
        const meubles_id = req.body.meubles_id;
        postAcheteur(personne_id, meubles_id)
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//route vendeur
router.post('/vendeur/post', async (req, res, next) => {
    try {
        const personne_id = req.body.personne_id;
        const meubles_id = req.body.meubles_id;
        postVendeur(personne_id, meubles_id) 
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


//Update un meuble : baisser le stock, modifier les infos ? 

router.put('/meubles/put/:id', async (req, res, next) => {
    try {
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
        updateAFurniture(categorie, type, prix, etat, hauteur, largeur, profondeur, matiere, couleur, photo1, photo2, photo3, req.params.id);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//Update une personne
router.put('/personne/put/:id', async (req, res, next) => {
    try {
        // chacune des variables récupère une partie des infos envoyées depuis le front 
        const id = req.body.id
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const adresse = req.body.adresse; 
        updatePersonne(id, name, email, password, adresse) // appel de la fonction de controller ici avec les variables définies juste au dessus
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//Delete un meuble 
router.delete('/meubles/delete/:id', async (req, res, next) => {
    try {
        let results = await deleteAFurniture(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//Delete une personne
router.delete('/personne/:id', async (req, res, next) => {
    try {
        let results = await deletePersonne(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/panier/delete/:id', async (req, res, next) => {
    try {
        let results = await deleteBasket(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/panier/:id', async (req, res, next) => {
    //res.json({ test : 'test' }); 
    try {
        let results = await getBasket(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/panier/post', async (req, res, next) => {
    try {
        const personne_id = req.body.personne_id;
        const meubles_id = req.body.meubles_id;
        postBasket(personne_id, meubles_id) 
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


//A partir de là, c'est le login

const app = express();

// http://localhost:3001/
app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
});

// http://localhost:3001/auth
app.post('/auth', function(request, response) {
	// Capture the input fields
	let mail = request.body.mail;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (mail && password) {
		// Execute SQL query that'll select the account from the database based on the specified email and password
		connection.query('SELECT * FROM personne WHERE mail = ? AND password = ?', [mail, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.mail = mail;
				// Redirect to home page
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

// http://localhost:3001/home
app.get('/home', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Welcome back, ' + request.session.name + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});

module.exports = router; 