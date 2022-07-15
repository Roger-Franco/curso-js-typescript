export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '123.123.123-99';
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Roger', 'Franco', 42, '000.000.000-00');
const pessoa1 = Pessoa.criaPessoa('Thuthu', 'Benja');
console.log(pessoa);
console.log(pessoa1);
