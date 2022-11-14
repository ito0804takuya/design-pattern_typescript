namespace Factory {
  
  abstract class Factory {
    public abstract factoryMethod(): Product;

    // Productを作って、それに何らかの操作をする
    public someOperation(): string {
      const product = this.factoryMethod();
      return `CreatorのsomeOperation: ${product.operation()}`;
    }
  }
  class Factory1 extends Factory {
    public factoryMethod(): Product1 {
      return new Product1();
    }
  }
  // someOperation()の処理がFactory1と同じであれば、このようにFactory2を作って拡張できる
  class Factory2 extends Factory {
    public factoryMethod(): Product1 {
      return new Product2();
    }
  }

  interface Product {
    operation(): string;
  }
  class Product1 implements Product {
    public operation(): string {
      return "ConcreteProduct1のoperation";
    }
  }
  class Product2 implements Product {
    public operation(): string {
      return "ConcreteProduct2のoperation";
    }
  }

  console.log(new Factory1().someOperation());
  console.log("----------------");
  console.log(new Factory2().someOperation());
}