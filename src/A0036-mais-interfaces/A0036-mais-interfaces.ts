interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  idade?: number;
  readonly enderecos: readonly string[];
}

const pessoa: Pessoa = {
  nome: 'João',
  sobrenome: 'Silva',
  enderecos: ['Av. Brasil'],
};

pessoa.enderecos.push('Rua Nova');
console.log(pessoa);
