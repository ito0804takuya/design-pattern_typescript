interface Builder {
  makePartA(): void;
  makePartB(): void;
  makePartC(): void;
}

class Builder1 implements Builder {
  private product: Product1;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product1();
  }

  public makePartA(): void {
    this.product.parts.push('PartA1');
  }
  public makePartB(): void {
    this.product.parts.push('PartB1');
  }
  public makePartC(): void {
    this.product.parts.push('PartC1');
  }

  public getProduct(): Product1 {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Product1 {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Product ${this.parts.join(', ')}`);
  }
}

// 監督
class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalViableProduct(): void {
    this.builder.makePartA();
  }

  public buildFullFeatureProduct(): void {
    this.builder.makePartA();
    this.builder.makePartB();
    this.builder.makePartC();
  }
}

function clientCode(director: Director) {
  const builder = new Builder1();
  director.setBuilder(builder);

  console.log('basic product');
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log('full feature product');
  director.buildFullFeatureProduct();
  builder.getProduct().listParts();

  console.log('custom product');
  builder.makePartA();
  builder.makePartC();
  builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);