const initialState = {
  lastTodoListId: 3,
  todoLists: {
    1: {
      id: 1,
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
      },
    },
    2: {
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
    3: {
      id: 1,
      name: "Xmas Gifts",
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
  },
}
export default initialState
