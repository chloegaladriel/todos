const todosInitialState = {
  todoLists: [
    {
      id: 1,
      name: "Shopping",
      totalTodos: 4,
      completedTodos: 2,
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
      id: 2,
      name: "Homework",
      totalTodos: 2,
      completedTodos: 1,
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
      id: 3,
      name: "XmasGift",
      totalTodos: 3,
      completedTodos: 0,
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
