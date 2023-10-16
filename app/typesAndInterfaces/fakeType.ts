type MyEvent =
  | {
      event: KeyboardEvent;
    }
  | {
      event: React.ChangeEvent<HTMLInputElement>;
    };
