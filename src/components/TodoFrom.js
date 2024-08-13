import React, { useState } from 'react';

const TodoForm = ({ addData }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: ""
    });



    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function taskAddedHandler(event) {
        event.preventDefault();
        console.log(formData);

        addData(formData);  // Correctly add the new todo

        // Clear the form inputs
        setFormData({
            title: "",
            description: ""
        });
    }


    return (
        <div>
            <form onSubmit={taskAddedHandler} className='flex flex-col items-center pt-[3rem] gap-8'>

                <div className='flex flex-col gap-1 items-center'>
                    <label htmlFor='title' className=' text-lg text-white from-neutral-300 font-medium w-full'>Title:</label>
                    <input
                        type='text'
                        name='title'
                        placeholder='Enter Your title'
                        value={formData.title}
                        className='title bg-slate-900 px-4 py-2 border-gray-800 hover:border-none rounded-md'
                        id='title'
                        onChange={changeHandler}
                        required
                    />
                </div>

                <div className='flex flex-col gap-1 items-center'>
                    <label htmlFor='description' className=' text-lg text-white from-neutral-300 font-medium w-full'>Description:</label>
                    <input
                        type='text'
                        name='description'
                        placeholder='Enter Your description'
                        value={formData.description}
                        className='description bg-slate-900 px-4 py-5 border-gray-800 hover:border-none rounded-md'
                        id='description'
                        onChange={changeHandler}
                        required
                    />
                </div>

                <div>
                    <button type="submit" className=' bg-zinc-400 px-4 py-2 text-slate-600 text-2xl font-bold rounded-md'>Add Task</button>
                </div>


            </form>
        </div>
    );
};

export default TodoForm;
