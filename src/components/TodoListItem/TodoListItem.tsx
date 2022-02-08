import React from "react";
import { ITodo } from "../../types/data";
import './TodoListItem.css'


const TodoListItem = (props: ITodo) => {

    const { title, completed, important} = props

    return (
        <span>{title}</span>
    )
}

export default TodoListItem;