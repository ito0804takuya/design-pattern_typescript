namespace FacadeCmapExample {
  // エントリー通知
  class EntryNotifier {
    protected entry: Entry;
    protected slackNotifier: SlackNotifier;
    constructor(entry: Entry, slackNotifier: SlackNotifier) {
      this.entry = entry || new Entry();
      this.slackNotifier = slackNotifier || new SlackNotifier();
    }

    // 2つのクラスの機能を組み合わせて実装したい機能
    public operation(): void {
      this.entry.createEntry();
      this.slackNotifier.sendMessage(this.entry);
      console.log(`ログに残す。< エントリー内容: ${this.entry}, slack通知: ${this.slackNotifier}>`);
    }
  }

  // エントリー
  class Entry {
    public createEntry(): void {
      console.log("選考状況をセットし、エントリー情報をDBに登録");
    }
  }

  // Slack通知
  class SlackNotifier {
    public sendMessage(entry: Entry): void {
      console.log(`slackに通知を送信: <${entry}が登録されました。>`);
    }
  }

  // <使い方>
  // この2つのクラスの機能(メソッド)を使って、1つの処理を行いたい
  const subsystem1 = new Entry();
  const subsystem2 = new SlackNotifier();
  // ここで2つのクラスのメソッドを呼び出すのでなく、行いたい1つの処理を登録したFacadeに処理を依頼
  const facade = new EntryNotifier(subsystem1, subsystem2);
  console.log(facade.operation());
}