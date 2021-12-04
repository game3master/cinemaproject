import React from 'react';
import { Button } from 'react-bootstrap';
import * as Icon from "react-bootstrap-icons";

const DeleteForm = (props) => {
    const { deleteFilm, onClose, index } = props;
    return (
        <div className="alertForm">
            <span className="closeButton">
                <Icon.XCircleFill color="dimgray" size={18} onClick={() => onClose()} />
            </span>
            <div className="importantInfoInAlert">
                <Icon.Info size={60} color="#017BFF" />
                Are you sure you want to delete this film?
            </div>
            <div className="filmDeleteButtons">
            <Button variant="success" style={{ marginLeft: "10px" }}
                    onClick={() => {
                        deleteFilm(index);
                        onClose();
                    }}>Yes</Button>
                <Button variant="danger" onClick={() => onClose()}>No</Button>
            </div>
        </div>
    );
};

export default DeleteForm;