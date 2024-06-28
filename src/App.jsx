import { useState } from "react";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { Header } from "./components/Header/Header";

const initialState = [
  { id: 1, text: "Spacer z psem", completed: false, important: false },
  { id: 2, text: "Zrobić obiad", completed: false, important: false },
];

function App() {
  const [todos, setTodos] = useState(initialState);
  const [formActive, setFormActive] = useState(false);

  function handleTodoSubmit(text, completed, important) {
    const newTodo = {
      id: todos.length + 1,
      text: text,
      completed: completed,
      important: important,
    };

    setTodos([newTodo, ...todos]);
  }

  function handleToggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="mx-auto my-40 w-[1100px] rounded-xl bg-secondary px-9 py-12 max-[1130px]:w-full">
      <Header
        taskCount={todos.length}
        setFormActive={() => setFormActive((prevValue) => !prevValue)}
        buttonActive={formActive}
      />
      {formActive && (
        <Form
          onTodoSubmit={handleTodoSubmit}
          setFormActive={() => setFormActive((prevValue) => !prevValue)}
        />
      )}
      <ul className="mt-16">
        {todos.map(({ id, text, completed, important }) => (
          <TodoItem
            key={id}
            id={id}
            text={text}
            completed={completed}
            important={important}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
