import React from "react"
import './App.css'

import AppHeader from "../AppHeader"
import SearchPanel from "../SearchPanel"
import TodoList from "../TodoList"

import { ITodo } from "../../types/data"

const App: React.FC = () => {

    const todoData: ITodo[] = [
        {id: 1, title: 'lorem', important: false, completed: false},
        {id: 2, title: 'lorem ipsum', important: true, completed: false},
        {id: 3, title: 'lorem', important: false, completed: false},
    ]

    return (
        <div className="app">
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    )
}

export default App