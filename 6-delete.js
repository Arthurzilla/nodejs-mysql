const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    passaword:'',
    database:'senac_bd',
});

connection.connect();

let sql = 'delete from alunos where id = ?';
let id = 11;

connection.query(sql, id, function(error,results, fields){
    if(error) throw error;

    console.log('Aluno deletado com sucesso\nRegistros atualizados: ' + results.affectedRows);

})

connection.end();