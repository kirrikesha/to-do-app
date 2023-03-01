import React, {useState} from 'react';
import TodosItem from "./TodosItem";

const TodosList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todoTitle) => {
        if (!todoTitle || todoTitle === 'I want to do..') {
            alert('You should enter a title name')
        } else {
            const todo = {id: Date.now(), title: todoTitle, completed: false}
            setTodos([...todos, todo])
        }
    }

    const removeTodo = (selectedTodo) => {
        const confirm = window.confirm('Are you sure?')
        if (confirm) {
            const newArray = todos.filter(todo => todo.id !== selectedTodo.id)
            setTodos(newArray)
        }
    }

    return (
        <div className='todos-list'>
            <fieldset>
                {todos.length === 0
                    ?
                    <legend>Your to-do list is clear</legend>
                    :
                    <legend>Your to-do list</legend>
                }
                <div className='todos-container'>
                    {todos.map(todo =>
                        <TodosItem
                            key={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            removeTodo={() => removeTodo(todo)}
                        />
                    )}
                </div>
            </fieldset>
            <button
                className='btn-add'
                onClick={() => addTodo(prompt('', 'I want to do..'))
                }>
                Add something..
            </button>
        </div>
    );
};

export default TodosList;