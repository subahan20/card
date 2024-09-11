 const Todo = () => {
    const todosList = []
  for (let i = 0; i < 10; i++) {
    const newObj = {
      id: i,
      text: `Iten${i}`,
    };
    todosList.push(newObj)
  }
  return todosList
};
Todo();
export default Todo