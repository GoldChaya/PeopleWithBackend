import React from "react";
import PersonForm from "./PersonForm";
import axios from "axios";

class PersonRow extends React.Component {
    state = {

    }
    ChangeCheckStatus = () => {

    }
    
    render() {
        const { firstName, lastName, age, id } = this.props.person
        return (
            <tr key={id}>
                <td>
                    <div className="d-flex justify-content-center align-items-center">
                        <input type="checkbox" className="form-check-input mt-2" checked={this.props.isChecked} onChange={this.props.onCheckboxClick} style={{ transform: "scale(1.5)" }} />
                    </div>
                </td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{age}</td>
                <td>
                    <button className="btn btn-warning" value={id} onClick={this.props.onEditClick}>Edit</button>
                    <button className="btn btn-danger" value={id} style={{ marginLeft: 10 }} onClick={this.props.onDeleteClick}>Delete</button>
                </td>
            </tr>)
    }
};
export default PersonRow;