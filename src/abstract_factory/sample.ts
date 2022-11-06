// 抽象的なFactory
interface AbstractFactory {
  createProductA(): AbstractProductA; // AbstractProductA を返す createProductA()関数 の実装を強制
  createProductB(): AbstractProductB;
}

// Product 1 を作る工場 (AbstractFactoryインターフェース の実装)
class Factory1 implements AbstractFactory {
  
  // ProductA1 を作る
  // ProductはFactoryのcreateProductメソッドからしか生成しない
  public createProductA(): AbstractProductA {
    return new ProductA1();
  }
  
  public createProductB(): AbstractProductB {
    return new ProductB1();
  }
}

// Product 2 を作る工場
class Factory2 implements AbstractFactory {
  
  // Factory1 の同じメソッドと同じインターフェースのものが生成される (互換性があるProductができる)
  public createProductA(): AbstractProductA {
    return new ProductA2();
  }
  
  public createProductB(): AbstractProductB {
    return new ProductB2();
  }
}

// ------------------------------------------------------------------

interface AbstractProductA {
  usefulFunctionA(): string;
}

// Factory1 で作るProduct
class ProductA1 implements AbstractProductA {
  public usefulFunctionA(): string {
    return "product A1";
  }
}

// Factory2 で作るProduct
class ProductA2 implements AbstractProductA {
  public usefulFunctionA(): string {
    return "product A2";
  }
}

// ------------------------------------------------------------------

interface AbstractProductB {
  usefulFunctionB(): string;

  // Aとコラボ
  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

// Factory1 で作るProduct
class ProductB1 implements AbstractProductB {
  public usefulFunctionB(): string {
    return "product B1";
  }

  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `B1 collaborating with ${result}`;
  }
}

// Factory2 で作るProduct
class ProductB2 implements AbstractProductB {
  public usefulFunctionB(): string {
    return "product B2";
  }

  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `B2 collaborating with ${result}`;
  }
}


// ------------------------------------------------------------------

function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
}

// 別のFactory(1, 2)に対して、同じコードが実行できる
clientCode(new Factory1());
console.log("---------");
clientCode(new Factory2());