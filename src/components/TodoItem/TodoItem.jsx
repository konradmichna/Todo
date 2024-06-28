import binIcon from "../../assets/bin.svg";
import warningIcon from "../../assets/exclamation.svg";

export function TodoItem({
  id,
  text,
  completed,
  important,
  onToggleComplete,
  onDelete,
}) {
  function handleCheckBoxChange() {
    onToggleComplete(id);
  }

  function handleDeleteClick() {
    onDelete(id);
  }

  const textDecoration = completed ? `line-through` : "";

  return (
    <li className="mb-4 flex items-center justify-between rounded-lg border-item-darker bg-item-bg p-4">
      <div className="flex items-center gap-5 p-1">
        <input
          type="checkbox"
          onChange={handleCheckBoxChange}
          className="h-4 w-4 cursor-pointer accent-black"
        />
        <label className={`${textDecoration} font-medium`}>{text}</label>
      </div>

      {!completed && important && (
        <img
          src={warningIcon}
          alt="warning icon"
          className="h-6 w-6 cursor-pointer"
        />
      )}

      {completed && (
        <button onClick={handleDeleteClick}>
          <img
            src={binIcon}
            alt="delete icon"
            className="h-6 w-6 cursor-pointer"
          />
        </button>
      )}
    </li>
  );
}
