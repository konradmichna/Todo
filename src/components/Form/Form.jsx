import { useState } from "react";

export function Form({ onTodoSubmit, setFormActive }) {
  const [taskText, setTaskText] = useState("");
  const [important, setImportant] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    onTodoSubmit(taskText, false, important);
    setTaskText("");
    setImportant(false);
    setFormActive();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-20 mt-10 flex w-full items-center justify-between max-[1070px]:block"
    >
      <div className="w-9/12 max-[1070px]:w-full">
        <input
          type="text"
          placeholder="Oddać samochód do mechanika..."
          className="w-full rounded-md border border-solid border-item-darker bg-item-bg p-2 italic placeholder-gray-500 outline-none focus:border-item-focus max-[1070px]:mb-6"
          onChange={(e) => setTaskText(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center gap-8 max-[1070px]:flex-row-reverse">
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            name="important"
            className="h-4 w-4 cursor-pointer accent-black"
            onChange={(e) => setImportant(e.target.checked)}
          />
          <label htmlFor="important">ważne</label>
        </div>
        <button
          type="submit"
          className="w-28 cursor-pointer rounded-lg border-none bg-accent px-4 py-2 text-lg font-medium text-white transition-colors hover:bg-accent-light max-[1070px]:order-first"
        >
          Dodaj
        </button>
      </div>
    </form>
  );
}
