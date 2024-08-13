import React from 'react';
import TodoItem from './TodoIteam';

const TodoList = ({ addTodo, deleteTodos }) => {
    console.log('addTodo:', addTodo); // Debugging line to check if data is passed correctly

    return (
        <div className="pt-8 flex flex-col gap-3 justify-center items-center">
            <h2 className=' text-xl font-medium'>List items</h2>
            {addTodo.length > 0 ? (
                <ul>
                    {addTodo.map((todo, index) => (
                        <TodoItem
                            key={index}
                            todo={todo}
                            index={index}
                            deleteTodos={deleteTodos}
                        />
                    ))}
                </ul>
            ) : (
                <p>No tasks available</p>
            )}
        </div>
    );
};

export default TodoList;
