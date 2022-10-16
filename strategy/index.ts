namespace Strategy {

  // strategyを管理する
  class Context {
    private strategy: Strategy;
    constructor(strategy: Strategy) {
      this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
      this.strategy = strategy;
    }

    public doSomeBusinessLogic(): void {
      // 自身が保有しているstrategyでアルゴリズムを実行
      const result = this.strategy.doAlgorithm(["a", "b", "c", "d", "e"]);
      console.log(result.join(','));
    }
  }

  // 戦略
  interface Strategy {
    doAlgorithm(data: string[]): string[];
  }

  class StrategyA implements Strategy {
    public doAlgorithm(data: string[]): string[] {
      return data.sort();
    }
  }

  class StrategyB implements Strategy {
    public doAlgorithm(data: string[]): string[] {
      return data.reverse();
    }
  }

  // まずはStrategyAで処理を進める
  const context = new Context(new StrategyA());
  context.doSomeBusinessLogic();
  
  console.log("---------");
  
  // StrategyをBに切り替えて処理を行う
  context.setStrategy(new StrategyB());
  context.doSomeBusinessLogic();
}
