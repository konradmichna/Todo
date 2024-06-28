import { getSubheading } from "../../utils/getSubheading.js";

export function Header({ taskCount, setFormActive, buttonActive }) {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-[40px] font-bold">Do zrobienia</h1>
        <h2 className="text-2xl">{getSubheading(taskCount)}</h2>
      </div>
      {!buttonActive && (
        <button
          onClick={setFormActive}
          className="aspect-square w-14 cursor-pointer rounded-full border-none bg-accent text-4xl text-white transition-colors hover:bg-accent-light"
        >
          +
        </button>
      )}
    </header>
  );
}
