class Facade {
  // このFacadeに、どのクラスの機能を使うのかは(当然)事前に決める
  // (「どのクラスでも放り込んだら同じ処理ができるもの」ではない。)
  protected subsystem1: Subsystem1;
  protected subsystem2: Subsystem2;

  constructor(sub1: Subsystem1, sub2: Subsystem2) {
    this.subsystem1 = sub1 || new Subsystem1();
    this.subsystem2 = sub2 || new Subsystem2();
  }

  // 2つのクラスの機能を組み合わせて実装したい機能
  public operation(): string {
    let result = "Result: \n"
    result += this.subsystem1.operation1();
    result += this.subsystem2.operation1();
    result += "----\n"
    result += this.subsystem1.operationN();
    result += this.subsystem2.operationZ();

    return result;
  }
}

class Subsystem1 {
  public operation1(): string {
    return "Subsystem1 start\n";
  }

  public operationN(): string {
    return "Subsystem1 end\n";
  }
}

class Subsystem2 {
  public operation1(): string {
    return "Subsystem2 start\n";
  }

  public operationZ(): string {
    return "Subsystem2 end\n";
  }
}

function clientCode(facade: Facade) {
  console.log(facade.operation());
}

// この2つのクラスの機能(メソッド)を使って、1つの処理を行いたい
const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
// ここで2つのクラスのメソッドを呼び出すのでなく、行いたい1つの処理を登録したFacadeに処理を依頼
const facade = new Facade(subsystem1, subsystem2);
clientCode(facade);