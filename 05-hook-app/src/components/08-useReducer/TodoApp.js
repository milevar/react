import React, {useEffect, useReducer} from 'react';
import './styles.css';
import {todoReducer} from './todoReducer';
import TodoList from "./TodoList";

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

};

const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);


    const handleDelete = (todoId) => {
        console.log(todoId);

        const actionDelete = {
            type: 'delete',
            payload: todoId
        }
        dispatch(actionDelete);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    console.log(todos);
    return (
        <div>
            <h1>TodoApp <small>({todos.length})</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    Todo
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
                <div className="col-5">
                    <TodoApp handleAddTodo={handleAddTodo}/>
                </div>

            </div>
        </div>
    );
};

export default TodoApp;
