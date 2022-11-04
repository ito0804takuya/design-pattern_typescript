// **募集のエントリー、企業実習のエントリー、説明会のエントリーをしたときに生成されてほしいエントリー、メッセージ、活動記録が異なるはずなので、こういう感じで使えそう。**
// **↑のAbstract Factoryとどちらかを使うことになりそう。どっち使えばいいかわからん。**

interface Builder {
  makePartA(): void;
  makePartB(): void;
  makePartC(): void;
}

// 職人
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

// 職人が作る製品
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
  // 職人を生成して、それを監督と紐付ける
  const builder = new Builder1();
  director.setBuilder(builder);

  console.log('basic product');
  // 監督が作ってほしいものを頼むと、職人が作ってくれる
  director.buildMinimalViableProduct();
  // 職人が作ってくれた製品を取得
  builder.getProduct().listParts();

  console.log('full feature product');
  director.buildFullFeatureProduct();
  builder.getProduct().listParts();

  // 例外的に、監督を介さずに、カスタムした製品を職人自身が作るパターン
  console.log('custom product');
  builder.makePartA();
  builder.makePartC();
  builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);