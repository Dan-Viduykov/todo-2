import React from "react";
import './StatusFilter.css'

const StatusFilter: React.FC = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-info" type="button">All</button>
            <button className="btn btn-outline-secondary" type="button">Active</button>
            <button className="btn btn-outline-secondary" type="button">Done</button>
        </div>
    )
}

export default StatusFilter