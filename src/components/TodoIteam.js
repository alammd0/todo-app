import React from 'react';

const TodoItem = ({ todo, index, deleteTodos }) => {
  console.log('todo:', todo); // Debugging line to check the individual todo item

  return (
    <li className="gap-5">
      {/* {todo} */}

      <h1 className="">{todo.title}</h1>

      <p>{todo.description}</p>

      <button className=' bg-red-700 px-3 text-yellow-50 text-sm font-bold rounded-md mt-2' onClick={() => deleteTodos(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
