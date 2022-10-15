// 抽象クラス
abstract class AbstractClass {
  public templateMethod(): void {
    this.baseOperation1();
    this.requiredOperation1();
    this.baseOperation2();
    this.requiredOperation2();
    this.baseOperation3();
  }

  // 共通の処理
  protected baseOperation1(): void {
    console.log("作業の大部分");
  }
  protected baseOperation2(): void {
    console.log("サブクラスでオーバーライド");
  }
  protected baseOperation3(): void {
    console.log("仕事の大半");
  }

  // クラス毎に異なる処理
  protected abstract requiredOperation1(): void;
  protected abstract requiredOperation2(): void;
}

class Class1 extends AbstractClass {
  protected requiredOperation1(): void {
    console.log("class1 継承されたoperaiton 1");
  }
  protected requiredOperation2(): void {
    console.log("class1 継承されたoperaiton 2");
  }
}

class Class2 extends AbstractClass {
  protected requiredOperation1(): void {
    console.log("class2 継承されたoperaiton 1");
  }
  protected requiredOperation2(): void {
    console.log("class2 継承されたoperaiton 2");
  }
}

function clientCode(abstractClass: AbstractClass) {
  abstractClass.templateMethod();
}

clientCode(new Class1());
console.log("-------");
clientCode(new Class2());