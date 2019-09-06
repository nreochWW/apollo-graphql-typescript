interface Message {
  _id: number;
  text: string;
}

const Query = {
  testMessage: (): Message => {
    return {
      _id: 1,
      text: "Hello World"
    };
  }
};

export default Query;
