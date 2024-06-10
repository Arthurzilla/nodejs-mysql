const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    passaword:'',
    database:'senac_bd',
});

connection.connect();

let sql = 'update alunos set ? where id = ?';
var aluno = {id: 25, nome:'GUSTAVO LIMA', ano: 2};
let id = aluno.id;

connection.query(sql,[aluno,id], function(error,results, fields){
    if(error) throw error;

    console.log('Aluno atualizado com sucesso\nRegistros atualizados: ' + results.affectedRows);

})

connection.end();