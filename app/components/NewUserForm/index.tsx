"use client";

const NewUserForm = () => {
  // const [newTodo, setNewTodo] = useState<string>("");
  // const [todoList, setTodolist] = useState<Todo[]>([]);
  const handleOnSubmitEdit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    fetch("/api/user/create", {
      method: "POST",
      body: JSON.stringify({
        username: formData.get("username"),
        email: formData.get("email"),
      }),
    });
  };
  // const handleOnAddTodo = () => {};
  return (
    <form
      onSubmit={handleOnSubmitEdit}
      className="border-2 border-purple-400 hover:border-purple-600"
    >
      <label htmlFor="username">
        username:
        <input type="text" name="username" placeholder="Username" />
      </label>
      <label htmlFor="email">
        email:
        <input type="email" name="email" placeholder="Email" />
      </label>
      {/* <label>
        Add new todo:
        <input
          type="text"
          name="todo"
          placeholder="Add new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleOnAddTodo}>Add new TODO</button>
      </label>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.description}</li>
        ))}
      </ul> */}

      <button type="submit">Create user</button>
    </form>
  );
};

export default NewUserForm;
