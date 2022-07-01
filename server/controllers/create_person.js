const mysql = require('mysql'); 

//On récupère la connexion db (comme du include dans PHP)
const pool = require('../db/connection_db');


const postAPersonProfile = (name, email, password) => {
    return new Promise((resolve, reject) => {
        //Point d'interrogation permet d'éviter les injections SQL 
        pool.query('INSERT INTO personne (nom, mail, mot_de_passe) VALUES ? ', [name, email, password], (err, results) => {
            if(err) {
                return reject(err); 
            }

            return resolve(results); 
        })
    }); 
}

module.exports = {
    postAPersonProfile
}