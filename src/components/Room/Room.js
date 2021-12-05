import React from "react";
import PropTypes from "prop-types";
import * as Icon from "react-bootstrap-icons";
import { NotificationContainer, NotificationManager } from 'react-notifications';

const Room = (props) => {
  return (
    <tr>
      <td style={{ verticalAlign: "middle" }}>{props.id}</td>
      <td className="justifyView" style={{ borderBottom: "none" }}>{props.space}</td>
      <td style={{ verticalAlign: "middle" }}>{props.spaceLeft}</td>
      <td >
      <div className="justifyRow">
          
                <div onClick = {() => props.showEditForm(props.id)} >
                  <Icon.Pencil display size={30} color="green" className="item" />
                  <i>Edit </i>
                </div>
                <div style={{ display: "block" }}  onClick = {() => props.showDeleteForm(props.id)}  >
                  <Icon.Trash size={30} color="grey" className="item" />
                  <i>Delete </i>
                </div>
        </div>
      </td>
    </tr>
  );
};

Room.propTypes = {
  name: function (props, propName) {
    if (props[propName] === null || props[propName].length < 1) {
      return new Error(propName + " was too short")
    }
  },
  space: PropTypes.number,
  spaceLeft: PropTypes.number,
};

export default Room;