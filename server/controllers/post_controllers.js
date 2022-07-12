const mysql = require('mysql'); 
const pool = require('../db/connection_db')


//Poster un meuble 
const postAFurniture = (categorie, type, prix, etat, hauteur, largeur, profondeur, matiere, couleur, photo1, photo2, photo3) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO meubles (categorie, type, prix, etat, hauteur, largeur, profondeur, matiere, couleur, photo1, photo2, photo3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);', [categorie, type, prix, etat, hauteur, largeur, profondeur, matiere, couleur, photo1, photo2, photo3], (err, results) => {
            if(err) {
                return reject(err); 
            }
            return resolve(results); 
        })
    }); 
}


//Création d'un nouveau user 
const postAPersonProfile = (name, email, password, adresse) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO personne (nom, mail, password, adresse) VALUES (?, ?, ?, ?)', [name, email, password, adresse], (err, results) => {
            if(err) {
                return reject(err); 
            }

            return resolve(results); 
        })
    }); 
}


const postAcheteur = (personne_id, meubles_id) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO acheteur (personne_id, meubles_id) VALUES (?, ?)', [personne_id, meubles_id], (err, results) => {
            if(err) {
                return reject(err); 
            }

            return resolve(results); 
        })
    }); 
}

const postVendeur = (personne_id, meubles_id) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO vendeur (personne_id, meubles_id) VALUES (?, ?)', [personne_id, meubles_id], (err, results) => {
            if(err) {
                return reject(err); 
            }

            return resolve(results); 
        })
    }); 
}

const postBasket = (personne_id, meubles_id) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO panier (personne_id, meubles_id) VALUES (?, ?)', [personne_id, meubles_id], (err, results) => {
            if(err) {
                return reject(err); 
            }

            return resolve(results); 
        })
    }); 
}


const session = require('express-session');

const postLog = (response, request, mail, password) => {
    // let mail = request.body.mail;
	// let password = request.body.password;
	// Ensure the input fields exists and are not empty
    const loggedin = false;
	if (mail && password) {
        
		// Execute SQL query that'll select the account from the database based on the specified email and password
		pool.query('SELECT * FROM personne WHERE mail = ? AND password = ?', [mail, password], function(err, results, fields) {
			// If there is an issue with the query, output the error
			if (err) throw err;
			// If the account exists
			if (results.length > 0) {
				// authenticate the user
				session.loggedin = true;
				session.mail = mail;
				// Redirect to home page
				response.status(200);
			} else {
				response.status(401);
			}			
			response.end();
		});
	} else {
        response.status(401);
		response.end();
	}
};


module.exports = {
    postAFurniture,
    postAPersonProfile,
    postAcheteur,
    postVendeur,
    postBasket,
    postLog
}