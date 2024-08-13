import './App.css';
import TodoFrom from './components/TodoFrom';
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {


  const [addTodo, setaddtodo] = useState([]);


  function addData(newTodo) {
    setaddtodo(prevTodo => [...prevTodo, newTodo]);
  }



  const deleteTodos = index => {
    setaddtodo(prevTodo => prevTodo.filter((todo, i) => i !== index));
  };


  return (
    <div className=" w-[100vw] h-[100vh] flex  flex-col bg-gray-800 text-white px-4 py-4">

      <h1 className=' text-center text-3xl capitalize font-bold tracking-wide bg-gray-700 w-[300px] mx-auto px-4
       py-3 border-2 rounded-md text-gray-200'>CheckList</h1>


      <TodoFrom addData={addData} />


      <TodoList addTodo={addTodo} deleteTodos={deleteTodos} />

    </div>
  );
}

export default App;
