export class Empresa {
  public readonly nome: string; // public é reduntante, mas vou deixar como está para facilitar o entendimento
  private readonly funcionarios: Funcionario[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(funcionario: Funcionario): void {
    this.funcionarios.push(funcionario);
  }

  mostrarColaboradores(): void {
    for (const funcionario of this.funcionarios) {
      console.log(funcionario);
      // console.log(this.funcionarios);
    }
  }
}

export class Funcionario {
  constructor(public readonly nome: string, public readonly sobrenome: string) {
    // aqui é um atalho, pois contém nessa linha (nome) o mesmo que a linha 2, 6 e 7 da class acima
  }
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const funcionario1 = new Funcionario('João', 'Silva');
const funcionario2 = new Funcionario('Maria', 'Silva');
const funcionario3 = new Funcionario('Roger', 'Franco');
empresa1.adicionaColaborador(funcionario1);
empresa1.adicionaColaborador(funcionario2);
empresa1.adicionaColaborador(funcionario3);
empresa1.adicionaColaborador({
  nome: 'thu',
  sobrenome: 'zoe',
});
// console.log(funcionario1);
console.log(empresa1);
// console.log(empresa1.nome);

empresa1.mostrarColaboradores();
