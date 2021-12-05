import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import { Redirect } from "react-router-dom";

class AddFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            duration: ''
        };
    }

    onChange(e) {
        var name = e.target.id;
        this.setState({
            [name]: e.target.value
        });
    }
    add = (s) => {
        const { addFilm} = this.props
        const {title,duration} = this.state
        const body = {
          title: title,
          duration: duration,
        };
        addFilm(body);
        this.setState({
            redirect: true
        })
        
      }


    render() {
        const { redirect } = this.state;
        if (redirect === true) {
            return <Redirect to="/allFilms" />
        }
        return (
            <div className="contentToAddForm">
                <div className="header">Add Film</div>
                <div className="addForm">
                    <div className="addFormRow">
                        <div className="addFormElement">
                            <label className="addFormLabel">Title</label>
                            <input className="addFormInput" type="text" placeholder="Enter a title" id="title" onChange={(e) => this.onChange(e)} />
                        </div>

                        <div className="addFormElement">
                            <label className="addFormLabel">Duration</label>
                            <input className="addFormInput" type="number"  id="duration" placeholder="Enter a duration" onChange={(e) => this.onChange(e)} />
                        </div>
                    </div>

                    <div className="addFormRow">
                        <Button variant="secondary" style={{ width: "100%" }} onClick={this.add}>Add Film</Button>
                    </div>
                </div>
            </div >
        );
    }
}


export default AddFilm;