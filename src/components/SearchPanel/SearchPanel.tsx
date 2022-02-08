import React from "react";
import './SearchPanel.css'

const SearchPanel: React.FC = () => {
    return <input className="search-input form-control"
                    placeholder="type to search"
                    type='text' />
}

export default SearchPanel;