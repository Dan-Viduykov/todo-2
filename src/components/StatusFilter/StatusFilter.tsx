import React from "react";
import './StatusFilter.css'

interface StatusFilterProps {
    onChangeFilter: (e: React.MouseEvent<HTMLDivElement>) => void;
    filter: string;
}

interface buttonType {
    name: string;
    label: string;
}

export const StatusFilter = (props: StatusFilterProps) => {

    const { onChangeFilter, filter } = props

    const buttonsList: buttonType[] = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ]

    const buttons = buttonsList.map(({ name, label }: buttonType): React.ReactElement => {
        const isActive = filter === name;
        const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
        return (
            <button 
                className={`btn ${clazz}`}
                type='button'
                name={name}
                key={name} >
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group" onClick={onChangeFilter}>
            {buttons}
        </div>
    )
}