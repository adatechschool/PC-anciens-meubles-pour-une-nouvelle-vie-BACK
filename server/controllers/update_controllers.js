const mysql = require('mysql'); 
const pool = require('../db/connection_db')

const updateAFurniture = (categorie, type, prix, etat, hauteur, largeur, profondeur, matiere, couleur, photo1, photo2, photo3, id) => {
    return new Promise((resolve, reject) => {
        pool.query('UPDATE meubles SET categorie = ?, type = ?, prix = ?, etat = ?, hauteur = ?, largeur = ?, profondeur = ?, matiere = ?, couleur = ?, photo1 = ?, photo2 = ?, photo3 = ? WHERE id= ?;', [categorie, type, prix, etat, hauteur, largeur, profondeur, matiere, couleur, photo1, photo2, photo3, id], (err, results) => {
            if(err) {
                return reject(err); 
            }
            return resolve(results); 
        })
    }); 
}

const updatePersonne = (id, nom, mail, password, adresse) => {
    return new Promise((resolve, reject) => {
        pool.query('UPDATE personne SET nom = ?, mail = ?, password = ?, adresse = ? WHERE id= ?;', [nom, mail, password, adresse, id], (err, results) => {
            if(err) {
                return reject(err); 
            }
            return resolve(results); 
        })
    }); 
}


module.exports = {
    updateAFurniture,
    updatePersonne
}