interface Subject {
  request(): void;
}

class RealSubject implements Subject {
  public request(): void {
    console.log("RealSubject request.");
  }
}

// Proxyというクラス名が他のモジュールと重複していたので、別の名前(ProxyClass)に変えた
class ProxyClass implements Subject {
  private realSubject: RealSubject;
  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  public request(): void {
    // realSubjectのrequest()を実行する前に、独自のロジックを差し込むことができる
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }

  private checkAccess(): boolean {
    console.log("check.");
    return true;
  }

  private logAccess(): void {
    console.log("Logging.");
  }
}

function clientCode(subject: Subject) {
  subject.request();
}

// こういうように直接操作もできるが...
const realSubject = new RealSubject();
clientCode(realSubject);

console.log("------");

// こういうように同じインターフェースでProxyを使うこともできる (本題はこっち)
const proxy = new ProxyClass(realSubject);
clientCode(proxy);