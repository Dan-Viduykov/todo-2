import React from "react";
import './AppHeader.css'

interface HeaderProps {
    todo: number;
    done: number;
}

const AppHeader = ({todo, done}: HeaderProps) => {
    return (
        <div className="app-header d-flex">
            <h1>Todo List</h1>
            <h2>{todo} more to do, {done} done</h2>
        </div>
    )
}

export default AppHeader;