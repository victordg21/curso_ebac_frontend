function Funcionarios(nome, cargo, anosDeEmpresa) {
    this.nome = nome
    this.cargo = cargo
    this.anosDeEmpresa = anosDeEmpresa
    this.nivel = NivelDoCargo(nome, cargo, anosDeEmpresa)
        

    function NivelDoCargo(nome, cargo, anosDeEmpresa){
        if (anosDeEmpresa <= 2) {
            const nivelJunior = "Júnior"
            return(`${nome} é desenvolvedor(a) ${cargo} de nível ${nivelJunior}`)
        } else if (anosDeEmpresa > 2 && anosDeEmpresa < 5) {
            const nivelPleno = "Pleno"
            return(`${nome} é desenvolvedor(a) ${cargo} de nível ${nivelPleno}`)
        } else {
            const nivelSenior = "Sênior"
            return(`${nome} é desenvolvedor(a) ${cargo} de nível ${nivelSenior}`)
        }
    }
    
}


const funcionario1 = new Funcionarios("Pedro", "Back End", 2)
const funcionario2 = new Funcionarios("Camila","Front End", 4)
const funcionario3 = new Funcionarios("Mario", "Back End", 1)
const funcionario4 = new Funcionarios("Maria", "Front End", 10)

console.log(funcionario1)
console.log(funcionario2)
console.log(funcionario3)
console.log(funcionario4)







