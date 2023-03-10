import React from 'react'

import { ToDoItem } from '../ToDoItem/Index'

import { ITodo } from '../../types/data'


interface ITodoListProps {
    items:ITodo[];
    toggleTodo:(id:number)=>void;
    removeTodo:(id:number)=>void;
}

export const ToDoList:React.FC<ITodoListProps> = (props) => {
    const {items, toggleTodo,removeTodo} = props;
    return (
        <div>
            {
                items.map(todo => (<ToDoItem key={todo.id} {...todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>))
            }
        </div>
    )
}
