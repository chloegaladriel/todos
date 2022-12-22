const initialTodoLists = [
  {
    id: 0,
    name: "Shopping",
    todos: [
      { id: 0, description: "Mushrooms", done: false },
      { id: 1, description: "Salad", done: true },
      {
        id: 2,
        description: "Watermelon",
        done: false,
      },
      { id: 3, description: "Coconut", done: false },
    ],
  },
  {
    id: 1,
    name: "Homework",
    todos: [
      {
        id: 0,
        description: "Mathematics",
        done: true,
      },
      { id: 1, description: "JavaScript", done: false },
    ],
  },
  {
    id: 2,
    name: "XmasGift",
    todos: [
      { id: 0, description: "Macbook", done: false },
      { id: 1, description: "Playstation", done: false },
      { id: 2, description: "Wine glass", done: false },
    ],
  },
]

export default initialTodoLists
