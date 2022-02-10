import React, { Component } from "react"
import './App.css'

import AppHeader from "../AppHeader"
import SearchPanel from "../SearchPanel"
import TodoList from "../TodoList"
import StatusFilter from "../StatusFilter"
import ItemAddForm from "../ItemAddForm"

import { ITodo } from "../../types/data"

interface AppState {
    todoData: ITodo[];
    searchValue: string;
    filterType: string;
}

class App extends Component <{}, AppState> {

    maxId = 100

    state = {
        todoData: [
            this.createItem('drink coffee'),
            this.createItem('build react app'),
            this.createItem('drink coffee'),
        ],
        searchValue: '',
        filterType: 'all'
    };

    createItem (label: string): ITodo {
        this.maxId += 1

        return {
            id: this.maxId,
            label,
            important: false,
            done: false,
        }
    }

    deleteItem = (id: number | undefined): void => {
        this.setState(({ todoData }) => {
            const idx: number = todoData.findIndex((el) => el.id === id);
            const newArray: ITodo[] = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            }
        })
    }

    addItem = (label: string): void => {
        this.setState(({ todoData }) => {
            const newTodo: ITodo = this.createItem(label)
            const newArray: ITodo[] = [
                ...todoData.slice(0),
                newTodo
            ]

            return {
                todoData: newArray
            }
        })
    }

    toggleProperty (arr: ITodo[], id: number | undefined, propName: keyof ITodo): ITodo[] {
        const idx: number = arr.findIndex((el: ITodo) => el.id === id);
        const oldItem: ITodo = arr[idx];
        const newItem: ITodo = {
            ...oldItem,
            [propName]: !oldItem[propName]
        } 

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }

    onToggleImportant = (id: number | undefined): void => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    onToggleDone = (id: number | undefined): void => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    onChangeFilter = (e: React.MouseEvent<HTMLDivElement>): void => {
        this.setState({
            filterType: (e.target as HTMLButtonElement).name,
        })
    }
    
    onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            searchValue: e.target.value
        })
    }

    render(): React.ReactNode {
        const { todoData, searchValue, filterType } = this.state

        const doneCount: number = todoData.filter((el) => el.done).length
        const todoCount: number = todoData.length - doneCount

        return (
            <div className="app">
                <AppHeader todo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel
                        value={searchValue}
                        onChangeSearch={this.onChangeSearch} />
                    <StatusFilter
                        onChangeFilter={this.onChangeFilter}
                        filter={filterType} />
                </div>
                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant} 
                    onToggleDone={this.onToggleDone}
                    filterType={filterType}
                    search={searchValue} />

                <ItemAddForm
                    addItem={this.addItem} />
            </div>
        )
    }
}

export default App