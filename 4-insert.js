const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    passaword:'',
    database:'senac_bd',
});

connection.connect();

let sql = 'insert into alunos set ?'

var novoAluno = {nome: 'Gustavo Lima', ano: 3}

connection.query(sql, novoAluno, function(error,results, fields){
    if(error) throw error;

    console.log('aluno salvo com sucesso ID' + results.insertId)

})

connection.end();