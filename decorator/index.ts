interface Component {
  operation(): string;
}

// 標準機能(何も機能が追加されていない、プレーンな状態。これからラッパーで機能追加していく)
class ConcreteComponent implements Component {
  public operation(): string {
    return 'ConcreteComponent';
  }
}

// ラッパー(wrapper) の 共通部分
class Decorator implements Component {
  // (自身もComponentだが) 他のComponentをフィールドとして持つ
  // → これが「集約」
  protected component: Component;
  constructor(component: Component) {
    this.component = component;
  }

  public operation(): string {
    return this.component.operation();
  }
}

// ラッパーA
class ConcreteDecoratorA extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorA (${super.operation()})`;
  }
}
// ラッパーB
class ConcreteDecoratorB extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorB (${super.operation()})`;
  }
}

function clientCode(component: Component) {
  console.log(`Result: ${component.operation()}`);
}

// 標準機能
const simple = new ConcreteComponent();
clientCode(simple);

// 機能追加
const decorator1 = new ConcreteDecoratorA(simple);
clientCode(decorator1);
const decorator2 = new ConcreteDecoratorB(simple);
clientCode(decorator2);