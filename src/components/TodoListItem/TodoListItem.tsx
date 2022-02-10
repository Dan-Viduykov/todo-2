import React from "react";
import { ITodo } from "../../types/data";
import './TodoListItem.css'

const TodoListItem = (props: ITodo) => {

    const { label, done, important, onDeleted, onToggleDone, onToggleImportant } = props;

    let classNames = 'todo-list-item d-flex'

    if (done) classNames += ' done'
    if (important) classNames += ' important'

    return (
        <span className={classNames} >
            <span
                className="todo-list-item-label flex-grow-1"
                onClick={onToggleDone} >
                {label}
            </span>
            <button
                className="btn btn-outline-danger btn-sm"
                type="button"
                onClick={onDeleted} >
                
                <i className="bi bi-trash"></i>
            </button>
            <button
                className="btn btn-outline-success btn-sm"
                type="button"
                onClick={onToggleImportant} >
                <i className="bi bi-exclamation-lg"></i>
            </button>
        </span>
    )
}

export default TodoListItem