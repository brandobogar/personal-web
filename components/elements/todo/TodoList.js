function TodoList({ children }) {
  return (
    <div
      className={`w-1/2 overflow-x-auto h-80 phone:w-full px-4 `}
      id="table-todo"
    >
      <table
        className={`table border-slate-300 table-auto table-sm table-pin-rows `}
      >
        <thead>
          <tr>
            <th className="w-4">No</th>
            <th>Todo</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default TodoList;
