const AlunoBD = require('./dataBase/AlunoBD');
var id = 12
var callback = function(aluno){
    console.log(aluno.id + ' - ' + aluno.nome);
}

AlunoBD.getAlunoById(id, callback)