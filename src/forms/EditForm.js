import React, { Component } from 'react';
import * as Icon from "react-bootstrap-icons";
import { Button } from 'react-bootstrap';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editSpace: props.roomList[props.index].Space,
            editSpaceLeft: props.roomList[props.index].SpaceLeft,
        };
    }

    onChange(e) {
        var name = e.target.id;
        this.setState({
            [name]: e.target.value
        });
    }

    render() {
        const { index, roomList, editRoom, onClose } = this.props;
        return (
            <div className="alertForm">
                <span className="closeButton">
                    <Icon.XCircleFill color="dimgray" size={18} onClick={() => onClose()} />
                </span>
                <div className="roomSpaceEdit">
                    <label className="roomEditLabel">Space</label>
                    <input type="text" id="editSpace" defaultValue={roomList[index].Space} style={{ border: 'solid' }} onChange={(e) => this.onChange(e)} />
                </div>
                <div className="roomDSpaceLeftEdit">
                    <label className="roomEditLabel">SpaceLeft</label>
                    <input type="number" id="editSpaceLeft" defaultValue={roomList[index].SpaceLeft} style={{ border: 'solid' }}  onChange={(e) => this.onChange(e)} />
                </div>
                <div className="roomEditButton">
                    <Button variant="success" onClick={() => editRoom(index, this.state)}>Save</Button>
                </div>
            </div>
        );
    }
}


export default EditForm;