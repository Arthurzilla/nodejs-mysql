
const AlunoBD = require('./dataBase/AlunoBD');

var callback = function(alunos){
    for(let i = 0; i < alunos.length; i++){
        console.log(alunos[i].id + ' - '+ alunos[i].nome);
    }
}


AlunoBD.getAlunos(callback);


