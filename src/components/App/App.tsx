import React from "react"
import './App.css'

import AppHeader from "../AppHeader"
import SearchPanel from "../SearchPanel"
import TodoList from "../TodoList"

import { ITodo } from "../../types/data"
import StatusFilter from "../StatusFilter"

const App: React.FC = () => {

    const todoData: ITodo[] = [
        {id: 1, label: 'lorem', important: false, completed: false},
        {id: 2, label: 'lorem ipsum', important: true, completed: false},
        {id: 3, label: 'lorem', important: false, completed: false},
    ]

    return (
        <div className="app">
            <AppHeader todo={todoData.length} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <StatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div>
    )
}

export default App