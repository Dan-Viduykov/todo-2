import React from "react";
import './SearchPanel.css'

interface SearchPanelProps {
    value: string;
    onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchPanel = (props: SearchPanelProps) => {
    const { value, onChangeSearch } = props
    
    return <input  
                className="search-input form-control"
                placeholder="type to search"
                type='text'
                onChange={onChangeSearch}
                value={value} />
}