export class Pessoa {
  // superclasse
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  // subclasse
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }
  getNomeCompleto(): string {
    console.log('Fazendo alguma coisa');

    return super.getNomeCompleto();
  }
}
export class Cliente extends Pessoa {
  // subclasse
  getNomeCompleto(): string {
    return 'Isso vem do cliente:' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Roger', 'Franco', 42, '000.000.000.-00');
const cliente = new Cliente('Roger', 'Franco', 42, '000.000.000.-00');
const aluno = new Aluno('Roger', 'Franco', 42, '000.000.000.-00', '0001');

console.log(aluno);
console.log(aluno.getNomeCompleto());
console.log(pessoa.getNomeCompleto());
console.log(cliente.getNomeCompleto());
