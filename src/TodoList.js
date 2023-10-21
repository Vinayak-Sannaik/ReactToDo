import { TodoItem } from "./TodoItem";

// export function TodoList({ todos, toggleTodo, deleteTodo }) {
//   return (
//     <ul className="list">
//       {/* {todos.length === 0 && "No Todos"} */}
//       {todos.map((todo) => {
//         return (
//           <TodoItem
//             id={todo.id}
//             completed={todo.completed}
//             title={todo.title}
//             key={todo.id}
//             toggleTodo = {toggleTodo}
//             deleteTodo = {deleteTodo}
//           />
//         );
//       })}
//     </ul>
//   );
// }


export function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (!todos || todos.length === 0) {
    return <div>No Todos</div>;
  }

  return (
    <ul className="list">
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          completed={todo.completed}
          title={todo.title}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );

}
