import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

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


    render() {
        return (
            <Table striped bordered>
          <tbody>
            <tr>
            <td colSpan="3" style={{ textAlign: "center" }}><i><b>Add new room</b></i></td>
            </tr>
            <tr>
              <td><input type="number" placeholder="numer of chairs" id="space" onChange={(e) => this.onChange(e)} /></td>
              <td><input type="number"  id="spaceLeft"  onChange={(e) => this.onChange(e)}></input> </td>          
              <td><Button variant="secondary"  onClick={() => this.props.addRoom(this.state)}>Add Room</Button></td>
            </tr>
          </tbody>
        </Table>
        );
    }
}


export default AddRoom;