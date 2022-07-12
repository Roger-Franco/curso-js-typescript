export function funcao(
  this: Date,
  argumento1: string,
  argumento2: number,
): void {
  console.log(this);
  console.log(argumento1, argumento2);
}
funcao.call(new Date(), 'roger', 41);
funcao.apply(new Date(), ['roger', 41]);
