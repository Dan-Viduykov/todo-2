import React, { Component } from "react";
import { ITodo } from "../../types/data";
import './TodoListItem.css'



class TodoListItem extends Component<ITodo> {
    
    render(): React.ReactNode {
        const { label, completed, important } = this.props;

        return (
            <span className="todo-list-item d-flex" >
                <span className="todo-list-item-label flex-grow-1" >
                    {label}
                </span>
    
                <button className="btn btn-outline-success btn-sm" type="button">
                    <i className="bi bi-exclamation-lg"></i>
                </button>
    
                <button className="btn btn-outline-danger btn-sm" type="button">
                    <i className="bi bi-trash"></i>
                </button>
            </span>
        )
    }
}

export default TodoListItem