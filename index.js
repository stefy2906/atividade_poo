class Retangulo{
  constructor(altura,largura){
    this.altura=altura;
    this.largura=largura;
  }
  calcularArea(){
    return this.altura * this.largura
  }
  mostrarArea(){
    return this.calcularArea()
  }
}
let retangulo = new Retangulo(50,50);
console.log(retangulo.calcularArea());

let retangulu = new Retangulo(40,40);
console.log(retangulu.calcularArea());

