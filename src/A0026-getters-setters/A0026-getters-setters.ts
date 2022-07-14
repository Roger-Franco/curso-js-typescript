export class Pessoa {
  // superclasse
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {}

  // setCpf(valor: string): void { // modo antigo
  //   this.cpf = valor;
  // }
  set cpf(valor: string) {
    this._cpf = valor;
  }

  // getCpf(): string {
  //   return this.cpf.replace(/\D/g, '');
  // }
  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Roger', 'Franco', 42, '000.000.000-00');
// pessoa.setCpf('000.000.000-99'); // modo antigo
pessoa.cpf = '000.000.000-99';
// console.log(pessoa.getCpf()); // modo antigo
console.log(pessoa.cpf);
