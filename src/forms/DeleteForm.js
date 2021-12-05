import React from 'react';
import { Button } from 'react-bootstrap';
import * as Icon from "react-bootstrap-icons";

const DeleteForm = (props) => {
    const { deleteRoom, onClose, index } = props;
    return (
        <div className="alertForm">
            <span className="closeButton">
                <Icon.XCircleFill color="dimgray" size={18} onClick={() => onClose()} />
            </span>
            <div className="importantInfoInAlert">
                <Icon.Info size={60} color="#017BFF" />
                Are you sure you want to delete this Room?
            </div>
            <div className="RoomDeleteButtons">
            <Button variant="success" style={{ marginLeft: "10px" }}
                    onClick={() => {
                        deleteRoom(index);
                        onClose();
                    }}>Yes</Button>
                <Button variant="danger" onClick={() => onClose()}>No</Button>
            </div>
        </div>
    );
};

export default DeleteForm;