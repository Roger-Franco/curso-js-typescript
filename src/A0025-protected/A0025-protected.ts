export class Empresa {
  public readonly nome: string; // public é reduntante, mas vou deixar como está para facilitar o entendimento
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
      // console.log(this.colaboradores);
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {
    // aqui é um atalho, pois contém nessa linha (nome) o mesmo que a linha 2, 6 e 7 da class acima
    //  Se for usar o atalho, precisa deixar o nome public
  }
}

// const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const empresa2 = new Udemy();
const colaborador1 = new Colaborador('João', 'Silva');
const colaborador2 = new Colaborador('Maria', 'Silva');
const colaborador3 = new Colaborador('Roger', 'Franco');
empresa2.adicionaColaborador(colaborador1);
empresa2.adicionaColaborador(colaborador2);
empresa2.adicionaColaborador(colaborador3);
const colaboradorRemovido = empresa2.popColaborador();
console.log(colaboradorRemovido);

// empresa1.adicionaColaborador({
//   nome: 'thu',
//   sobrenome: 'zoe',
// });
// console.log(colaborador1);
// console.log(empresa1);
console.log(empresa2);
// console.log(empresa1.nome);

// empresa1.mostrarColaboradores();
