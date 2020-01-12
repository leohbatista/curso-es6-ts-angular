class Carro {
  private modelo: string;
  private numPortas: number;
  private velocidade: number = 0;

  constructor(modelo: string, numPortas: number) {
    this.modelo = modelo;
    this.numPortas = numPortas;
  }

  public acelerar(): void {
    this.velocidade += 10;
  }

  public freiar(): void {
    this.velocidade -= this.velocidade > 0 ? 10 : 0;
  }

  public getVelocidade(): number {
    return this.velocidade;
  }

  public getModelo = () => this.modelo;
}

class Concessionaria {
  private endereco: string;
  private listaDeCarros: any;

  constructor(endereco: string, listaDeCarros: Array<Carro>) {
    this.endereco = endereco;
    this.listaDeCarros = listaDeCarros;
  }

  public fornecerEndereco(): string {
    return this.endereco;
  }

  public mostrarListaDeCarros(): any {
    return this.listaDeCarros;
  }
}

class Pessoa {
  private nome: string;
  private carroPreferido: string;
  private carro?: Carro;

  constructor(nome: string, carroPreferido: string) {
    this.nome = nome;
    this.carroPreferido = carroPreferido;
  }

  public dizerNome(): string {
    return this.nome;
  }

  public dizerCarroPreferido(): string {
    return this.carroPreferido;
  }

  public comprarCarro(carro: Carro): void {
    this.carro = carro;
  }

  public dizerCarroQueTem(): string {
    return this.carro ? this.carro.getModelo() : '';
  }
}

let carro1 = new Carro('Gol',2);
let carro2 = new Carro('Fox',4);
let carro3 = new Carro('T-Cross',4);

let listaCarros: Array<Carro> = [];
listaCarros.push(carro1);
listaCarros.push(carro2);
listaCarros.push(carro3);

let concessionaria = new Concessionaria('Av. Paulista', listaCarros);
console.log(concessionaria);

let pessoa = new Pessoa("Leo", "T-Cross");
console.log(pessoa);

concessionaria.mostrarListaDeCarros().forEach((carro: Carro) => {
  if(carro.getModelo() === pessoa.dizerCarroPreferido()) {
    pessoa.comprarCarro(carro);
  }
});
console.log(pessoa);


