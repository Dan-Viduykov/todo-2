import React from "react";
import './TodoList.css'
import TodoListItem from "../TodoListItem";
import { ITodo } from "../../types/data";

type TodoListProps = {
    todos: ITodo[];
}

const TodoList = ({todos}: TodoListProps) => {

    const elements = todos.map((todo) => {
        const { id, ...itemProps} = todo

        return (
            <li key={id}>
                <TodoListItem {...itemProps} />
            </li>
        )
    })

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default TodoList;