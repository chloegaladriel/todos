const todosInitialState = {
  todoLists: [
    {
      id: 0,
      name: "Shopping",
      todos: {
        1: {
          description: "Mushrooms",
          done: true,
        },
        2: {
          description: "Salad",
          done: true,
        },
        3: {
          description: "Watermelon",
          done: false,
        },
        4: {
          description: "Coconut",
          done: false,
        },
      },
    },
    {
      id: 1,
      name: "Homework",
      todos: {
        1: {
          description: "Mathematics",
          done: true,
        },
        2: {
          description: "JavaScript",
          done: false,
        },
      },
    },
    {
      id: 2,
      name: "XmasGift",
      todos: {
        1: {
          description: "Macbook",
          done: false,
        },
        2: {
          description: "Playstation",
          done: false,
        },
        3: {
          description: "Wine glass",
          done: false,
        },
      },
    },
  ],
}

export default todosInitialState
