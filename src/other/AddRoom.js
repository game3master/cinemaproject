import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import { Redirect } from "react-router-dom";

class AddRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            space: '',
            spaceLeft: ''
        };
    }

    onChange(e) {
        var name = e.target.id;
        this.setState({
            [name]: e.target.value
        });
    }

    add = (s) => {
        const { addRoom} = this.props
        const {space,spaceLeft} = this.state
        const body = {
          space: space,
          spaceLeft: spaceLeft,
        };
        addRoom(body);
        this.setState({
            redirect: true
        })
        
      }

      render() {
        const { redirect } = this.state;
        if (redirect === true) {
            return <Redirect to="/allRooms" />
        }
        return (
            <div className="contentToAddForm">
                <div className="header">Add Room</div>
                <div className="addForm">
                    <div className="addFormRow">
                        <div className="addFormElement">
                            <label className="addFormLabel">Space</label>
                            <input className="addFormInput" type="number" placeholder="Enter a space" id="space" onChange={(e) => this.onChange(e)} />
                        </div>

                        <div className="addFormElement">
                            <label className="addFormLabel">Space Left</label>
                            <input className="addFormInput" type="number"  id="duration" placeholder="SpaceLeft" onChange={(e) => this.onChange(e)} />
                        </div>
                    </div>

                    <div className="addFormRow">
                        <Button variant="secondary" style={{ width: "100%" }} onClick={this.add}>Add Room</Button>
                    </div>
                </div>
            </div >
        );
    }
}


export default AddRoom;