const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "mi_base_datos"
});

connection.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
        return;
    }
    console.log("Conexión establecida con la base de datos.");
});

module.exports = connection;
