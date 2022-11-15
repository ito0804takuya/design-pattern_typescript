namespace AbstractFactoryCmapExample {
  interface EntryFactory {
    createEntry(): Entry;
    createMessage(): Message;
    createActivity(): Activity;
  }
  // 募集情報へのエントリー
  class JobEntryFactory implements EntryFactory {
    public createEntry(): Entry {
      return new Entry("job");
    }
    public createMessage(): Message {
      return new Message("job");
    }
    public createActivity(): Activity {
      return new Activity("job");
    }
  }
  // 説明会へのエントリー
  class CorporationEventEntryFactory implements EntryFactory {
    public createEntry(): Entry {
      return new Entry("internship");
    }
    public createMessage(): Message {
      return new Message("internship");
    }
    public createActivity(): Activity {
      return new Activity("internship");
    }
  }

  class Entry  {
    protected entry_target: string;
    public constructor(value: string) {
      this.entry_target = value;
    }
    // ...
  }
  class Message {
    // ...
  }
  class Activity{
    // ...
  }

  // <使い方>
  function jobEntry() {
    const factory = new JobEntryFactory();
    const entry = factory.createEntry();
    const message = factory.createMessage();
    const activity = factory.createActivity();
    // 以降、募集へのエントリーならではのビジネスロジック
  }

  function corporationEventEntry() {
    const factory = new CorporationEventEntryFactory();
    const entry = factory.createEntry();
    const message = factory.createMessage();
    const activity = factory.createActivity();
    // 以降、説明会へのエントリーならではのビジネスロジック
  }
}