import React from 'react'
import { ITodo } from '../../types/data'
import styles from './ToDoItem.module.css'


interface ToDoItem extends ITodo {
    removeTodo:(id:number) => void;
    toggleTodo:(id:number) =>void;
}

export const ToDoItem:React.FC<ToDoItem> = (props) => {
    const {id, title , complete,removeTodo,toggleTodo} = props
    return (
        <div className={styles.todoItem}>
            <input type='checkbox' checked={complete} onChange={()=>toggleTodo(id)}/>
            <span className={styles.todoTitle}>{title}</span>
            <button className={styles.button} onClick={()=>removeTodo(id)}>x</button>
        </div>
    )
}
