namespace TemplateMethodCmapExample {

  abstract class SchoolDocument {
    
    // これがTemplateMethod
    public exportCSV(): void {
      // CSVに出力するデータセットを取得（今回の例でいうと、求職管理簿ならEntry、求人管理簿ならJobのデータ）
      const data: object[] = this.getData();

      // 各帳票のヘッダーをセット
      const header: string[] = this.setHeader();

      // CSVを作成
      const csv: object = this.createCSV(data, header);
      
      // CSVを返す　send_data
      this.sendCSV(csv);
    }

    // 共通の処理
    protected createCSV(data: object[], header: string[]): object {
      console.log("CSVを作成");
      return {}; // 本当はCSVオブジェクトを返す
    }
    protected sendCSV(csv: object): void {
      console.log("CSVをレスポンスする");
    }

    // クラス毎に異なる処理
    protected abstract getData(): object[];
    protected abstract setHeader(): string[];
  }

  // 求職管理簿
  class JobHuntingList extends SchoolDocument {
    protected getData(): object[] {
      console.log("CSVに出力する活動情報（Entry）を取得");
      return [ {}, {} ];
    }
    protected setHeader(): string[] {
      console.log("求職管理簿用のヘッダーを取得");
      return ["EntryID", "など"];
    }
  }

  // 求人管理簿
  class JobList extends SchoolDocument {
    protected getData(): object[] {
      console.log("CSVに出力する募集情報（Job）を取得");
      return [ {}, {} ];
    }
    protected setHeader(): string[] {
      console.log("求人管理簿用のヘッダーを取得");
      return ["JobID", "など"];
    }
  }

  // <使い方>
  // 求職管理簿をCSVで出力
  new JobHuntingList().exportCSV();
  
  // 求人管理簿をCSVで出力
  new JobList().exportCSV();
}