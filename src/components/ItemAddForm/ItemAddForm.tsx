import React, { Component } from "react";
import './ItemAddForm.css'

interface itemAddFormProps {
    addItem: (label: string) => void;
}

interface itemAddFormState {
    value: string;
}

class ItemAddForm extends Component <itemAddFormProps, itemAddFormState> {

    state = {
        value: '',
    }

    onAddInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
            this.setState({
                value: e.target.value
            })
    }

    onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        
        if (this.state.value) {
            this.props.addItem(this.state.value.trim())
            this.setState({
                value: ''
            })
        }
    }

    render() {
        const { value } = this.state
        
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit} >
                <input
                    className="form-control"
                    type='text'
                    value={value}
                    placeholder='what needs to be done'
                    onChange={this.onAddInputChange} />
                <button
                    className="btn btn-outline-secondary"
                    type='submit' >
                    Add
                </button>
            </form>
        )    
    }

}

export default ItemAddForm
