namespace AbstractFactoryCmapExample {
  interface EntryFactory {
    createEntry(): Entry;
    createMessage(): Message;
  }
  // 募集情報へのエントリー
  class JobEntryFactory implements EntryFactory {
    createEntry(): Entry {
      return new JobEntry();
    }
    createMessage(): Message {
      return new EntryJobMessage();
    }
  }
  // 説明会へのエントリー
  class CorporationEventEntryFactory implements EntryFactory {
    createEntry(): Entry {
      return new CorporationEventEntry();
    }
    createMessage(): Message {
      return new EntryCorporationEventMessage();
    }
  }

  interface Entry {
    entryTarget: string;
  }
  class JobEntry implements Entry {
    entryTarget = "job";
  }
  class CorporationEventEntry implements Entry{
    entryTarget = "session";
  }

  interface Message {
    sendMessage(): void;
  }
  class EntryJobMessage implements Message {
    sendMessage(): void {
      console.log("募集情報へのエントリーがありました。");
    }
  }
  class EntryCorporationEventMessage implements Message {
    sendMessage(): void {
      console.log("説明会へのエントリーがありました。");
    }
  }

  // <使い方>
  function jobEntry() {
    const factory = new JobEntryFactory();
    const entry = factory.createEntry();
    const message = factory.createMessage();
    // 以降、募集へのエントリーならではのビジネスロジック
  }

  function corporationEventEntry() {
    const factory = new CorporationEventEntryFactory();
    const entry = factory.createEntry();
    const message = factory.createMessage();
    // 以降、説明会へのエントリーならではのビジネスロジック
  }
}