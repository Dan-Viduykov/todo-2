import React, { Component } from "react";
import './StatusFilter.css'

class StatusFilter extends Component {
    render(): React.ReactNode {
        return (
            <div className="btn-group">
                <button className="btn btn-info" type="button">All</button>
                <button className="btn btn-outline-secondary" type="button">Active</button>
                <button className="btn btn-outline-secondary" type="button">Done</button>
            </div>
        )
    }
}

export default StatusFilter