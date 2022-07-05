const mysql = require('mysql'); 

//Création connexion db 
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost", 
    user: "root",
    password: "root", //Vérifier votre mdp 
    database: "furniture_platform",
    port: "3306", //Vérifier le port de votre serveur PHPMYADMIN
    //socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

module.exports = pool; 