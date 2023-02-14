function NotasAlunos(nomeDoAluno, notaDoAluno){

    this.nome = RetornaNota(nomeDoAluno,notaDoAluno)

    function RetornaNota(){
    if (notaDoAluno >= 6){
        return this.nome = nomeDoAluno
    } else{
        return ("O aluno não atingiu a nota mínina")
    }
    }
}

const aluno1 = new NotasAlunos("Alan", 9.1)
const aluno2 = new NotasAlunos("Fabio", 6)
const aluno3 = new NotasAlunos("Carlos", 4.7)
const aluno4 = new NotasAlunos("Claudia", 10)
const aluno5 = new NotasAlunos("Maria", 6.3)
const aluno6 = new NotasAlunos("Ana", 3)

console.log(aluno1)
console.log(aluno2)
console.log(aluno3)
console.log(aluno4)
console.log(aluno5)
console.log(aluno6)