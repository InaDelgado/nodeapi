const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '<port>',
    user: 'root',
    password: '<password>',
    database: 'agenda-petshop'
});

module.exports = conexao;
