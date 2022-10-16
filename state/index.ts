// 状態を管理
class Context {
  private state: State;
  constructor(state: State) {
    this.transitionTo(state);
  }

  // 状態遷移
  public transitionTo(state: State): void {
    console.log(`${(<any>state).constructor.name}.`);
    this.state = state;
    this.state.setContext(this);
  }

  public request1(): void {
    this.state.handle1();
  }
  public request2(): void {
    this.state.handle2();
  }
}

abstract class State {
  protected context: Context;

  public setContext(context: Context) {
    this.context = context;
  }

  // 状態AとBで同じメソッドを用意するが、それらの実装は異なる → 同じメソッドでも、状態によって異なる挙動にできる
  public abstract handle1(): void;
  public abstract handle2(): void;
}

// 状態A
class StateA extends State {
  public handle1(): void {
    console.log("stateA request1");
    this.context.transitionTo(new StateB);
  }

  public handle2(): void {
    console.log("stateA request2");
  }
}
// 状態B
class StateB extends State {
  public handle1(): void {
    console.log("stateB request1");
  }

  public handle2(): void {
    console.log("stateB request2");
    this.context.transitionTo(new StateA);
  }
}

// 初期の状態はA
const context = new Context(new StateA());
context.request1(); // A→Bに変わる (これ自体は重要じゃない。状態変更の実装例を表している)
context.request2(); // B→Aに変わる