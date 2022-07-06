//Controllers : planification de la construction des routes. Ces fonctions vont être appelées dans le fichier du dossier routes. 

const mysql = require('mysql'); 

//On récupère la connexion db (comme du include dans PHP)
const pool = require('../db/connection_db')


//Structure des fonctions : 
/*
const nomdelafonction = (parametre) => {
    return new Promise((resolve, reject) => {
        //Point d'interrogation permet d'éviter les injections SQL 
        pool.query('SELECT * FROM nomdelatable WHERE nomdelacolonne = ?', [parametre], (err, results) => {
            if(err) {
                return reject(err); 
            }

            return resolve(results); 
        })
    }); 
}
*/


//Afficher tous les meubles   
const getAllFurnitures = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM meubles', (err, results) => {
            if(err) {
                return reject(err); 
            }

            return resolve(results); 
        })
    }); 
}

//Afficher les acheteurs
const getAcheteur = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM acheteur', (err, results) => {
            if(err) {
                return reject(err); 
            }

            return resolve(results); 
        })
    }); 
}

//Afficher les vendeurs
const getVendeur = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM vendeur', (err, results) => {
            if(err) {
                return reject(err); 
            }

            return resolve(results); 
        })
    }); 
}

//Afficher un meuble (en fonction de son id)
const getAFurniture = (id) => {
    return new Promise((resolve, reject) => {
        //Point d'interrogation permet d'éviter les injections SQL 
        pool.query('SELECT * FROM meubles WHERE id = ?', [id], (err, results) => {
            if(err) {
                return reject(err); 
            }

            return resolve(results[0]); //on veut afficher qu'un row 
        })
    }); 
}


//Afficher les meubles d'une catégorie 
const getFurnitureByCat = (category) => {
    return new Promise((resolve, reject) => {
        //Point d'interrogation permet d'éviter les injections SQL 
        pool.query('SELECT * FROM meubles WHERE categorie = ?', [category], (err, results) => {
            if(err) {
                return reject(err); 
            }

            return resolve(results); 
        })
    }); 
}




module.exports = {
    getAllFurnitures,
    getAFurniture,
    getFurnitureByCat,
    getAcheteur,
    getVendeur
}

