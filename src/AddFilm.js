import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

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


    render() {
        return (
            <Table striped bordered>
          <tbody>
            <tr>
            <td colSpan="3" style={{ textAlign: "center" }}><i><b>Add new film</b></i></td>
            </tr>
            <tr>
              <td><input type="text" placeholder="Title of film" id="title" onChange={(e) => this.onChange(e)} /></td>
              <td><input type="number"  id="duration"  onChange={(e) => this.onChange(e)}></input> </td>          
              <td><Button variant="secondary"  onClick={() => this.props.addFilm(this.state)}>Add film</Button></td>
            </tr>
          </tbody>
        </Table>
        );
    }
}


export default AddFilm;