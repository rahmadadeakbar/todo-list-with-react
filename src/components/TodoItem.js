const TodoItem = ({ todo, setRefresh }) => {
  //   update data todo melalui API ketika todo diklik
  const updateTodo = () => {
    todo.done = !todo.done;

    fetch("http://localhost:8000/todos/" + todo.id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todo),
    }).then(() => {
      console.log("todo updated.");
      setRefresh(true);
    });
  };

  // hapus data todo melalui API ketika tombol x diklik
  const deleteTodo = () => {
    fetch("http://localhost:8000/todos/" + todo.id, {
      method: "DELETE",
    }).then(() => {
      console.log("todo Deleted.");
      setRefresh(true);
    });
  };

  return (
    // tambahkan class checked ketika todo.done bernilai true
    <li className={`${todo.done ? "checked" : ""}`}>
      <div onClick={updateTodo}>{todo.title} </div>
      <span className="close" onClick={deleteTodo}>
        x
      </span>
    </li>
  );
};

export default TodoItem;
