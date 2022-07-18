//  Quando você usa programação funcional, a tendência é usar type ao invés de
// interface. Se for programação orientada a objetos, a tendência é usar interface.
interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa2 = {
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
  nome: 'Roger',
  sobrenome: 'Franco',
};

const pessoa = new Pessoa('Roger', 'Franco');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
