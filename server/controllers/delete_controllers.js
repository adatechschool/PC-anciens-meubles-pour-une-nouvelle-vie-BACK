const mysql = require('mysql'); 
const pool = require('../db/connection_db')

const deletePersonne = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM personne WHERE id = ?;', [id], (err, results) => {
            if(err) {
                return reject(err); 
            }
            return resolve(results); 
        })
    }); 
}
const deleteAFurniture = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM meubles WHERE id = ?;', [id], (err, results) => {
            if(err) {
                return reject(err); 
            }
            return resolve(results); 
        })
    }); 
}

module.exports = {
    deleteAFurniture,
    deletePersonne
}