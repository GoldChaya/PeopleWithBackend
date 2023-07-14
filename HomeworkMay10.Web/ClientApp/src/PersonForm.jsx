import React from 'react';
import PersonRow from './PersonRow';
import axios from 'axios';

class PersonForm extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        },
        people: [],
        isChecked: false
    }
    getAllPeople = () => {
        axios.get('api/people/getall').then(response => {
            this.setState({ people: response.data });
        });
    }
    componentDidMount = () => {
        this.getAllPeople();
    }


    onTextChange = (e) => {
        const copy = { ...this.state.person };
        copy[e.target.name] = e.target.value;
        this.setState({ person: copy });
    }
    onAddClick = () => {
        axios.post('api/people/add', this.state.person).then(() => {
            this.getAllPeople();
            this.AddPerson();
        });
    }
    AddPerson = () => {

        this.setState({
            person:
            {
                firstName: '',
                lastName: '',
                age: ''
            }
        })

    }
    onDeleteClick = p => {
        axios.post('api/people/delete', {p}).then(() => {
            this.getAllPeople();
        });
    }   



    render() {
        const { firstName, lastName, age, id } = this.state.person;
        const { people, isChecked } = this.state;
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <div className="row" style={{ marginBottom: 20 }}>
                    <div className="col-md-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            name="firstName"
                            onChange={this.onTextChange}
                            value={firstName}
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={this.onTextChange}
                            value={lastName}

                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Age"
                            name="age"
                            onChange={this.onTextChange}
                            value={age}

                        />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary w-100" onClick={this.onAddClick}>Add</button>
                    </div>
                </div>
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th style={{ width: "15%" }}>
                                <button className="btn btn-danger w-100">Delete All</button>
                                <button className="btn btn-outline-danger w-100 mt-2">Check All</button>
                                <button className="btn btn-outline-danger w-100 mt-2">Uncheck All</button>
                            </th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((p) => <PersonRow key={p.id} person={p} isChecked={isChecked} onDeleteClick={this.onDeleteClick}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
};
export default PersonForm;