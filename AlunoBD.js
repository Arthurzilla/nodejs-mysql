const mysql = require('mysql');
class AlunoBD {

    static connect(){
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'senac_bd'

            //connection é um objeto
        });

        connection.connect();
        //aplica o método ao objeto

        //retorna o objeto
        return connection;
    }

    static getAlunos(callback){
        let connection = AlunoBD.connect();
        let query = 'select * from alunos';

        connection.query(query, function(error, results, fields){
            if(error) throw error;
            let alunos = results;
            callback(alunos);
        })
        connection.end()
    }

    static getAlunoById(id, callback){
        let connection = AlunoBD.connect();

        let sql = 'select * from alunos where id = ?';
        connection.query(sql, id, function(error, results, fields,){
            if(error) throw error;
    
            if(results.length == 0){
                console.log('Nenhum aluno encontrado');
                return;
            }

            let aluno = results[0];
            callback(aluno);
        })
        connection.end()
    }
}

module.exports = AlunoBD;