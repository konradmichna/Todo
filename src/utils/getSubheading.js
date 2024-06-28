export function getSubheading(taskCount) {
  switch (true) {
    case taskCount == 0:
      return "brak zadań";
    case taskCount == 1:
      return "1 zadanie";
    case taskCount > 1 && taskCount < 5:
      return `${taskCount} zadania`;
    case taskCount >= 5:
      return `${taskCount} zadań`;
  }
}
