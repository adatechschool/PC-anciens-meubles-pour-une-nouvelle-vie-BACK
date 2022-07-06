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

module.exports = {
    postAFurniture,
    postAPersonProfile,
    postAcheteur,
    postVendeur
}