import React, { Component } from 'react';
import * as Icon from "react-bootstrap-icons";
import { Button } from 'react-bootstrap';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editTitle: props.filmList[props.index].title,
            editDuration: props.filmList[props.index].duration,
        };
    }

    onChange(e) {
        var name = e.target.id;
        this.setState({
            [name]: e.target.value
        });
    }

    render() {
        const { index, filmList, editFilm, onClose } = this.props;
        return (
            <div className="alertForm">
                <span className="closeButton">
                    <Icon.XCircleFill color="dimgray" size={18} onClick={() => onClose()} />
                </span>
                <div className="filmTitleEdit">
                    <label className="filmEditLabel">Title</label>
                    <input type="text" id="editTitle" defaultValue={filmList[index].title} style={{ border: 'solid' }} onChange={(e) => this.onChange(e)} />
                </div>
                <div className="filmDurationEdit">
                    <label className="filmEditLabel">Duration</label>
                    <input type="number" id="editDuration" defaultValue={filmList[index].duration} style={{ border: 'solid' }}  onChange={(e) => this.onChange(e)} />
                </div>
                <div className="filmEditButton">
                    <Button variant="success" onClick={() => editFilm(index, this.state)}>Save</Button>
                </div>
            </div>
        );
    }
}


export default EditForm;