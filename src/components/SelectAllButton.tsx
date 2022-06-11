export default function SelectAllButton({
  isAllSelected,
  selectAll,
}: {
  isAllSelected: boolean;
  selectAll: (newSelect: boolean) => void;
}) {
  return (
    <button
      className="button button--select"
      onClick={() => selectAll(!isAllSelected)}
    >
      {isAllSelected ? "Unselect all" : "Select all"}
    </button>
  );
}
