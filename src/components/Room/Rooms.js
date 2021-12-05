import  React, {Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Room from "./Room";
import { Table, Button } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import nextId from "react-id-generator";
import RoomClass from "../../class/RoomClass";
import EditRoomForm from "../../forms/EditRoomForm"
import DeleteRoomForm from "../../forms/DeleteRoomForm"
import AddRoom from  "../../other/AddRoom"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


class Rooms extends Component {
 


  createNotification(message) {
    NotificationManager.success('Success', message);
  }

  showDeleteRoomForm = (id) => {
    const { roomList, deleteRoom } = this.props;
    var index = roomList.findIndex(function (value) {
      return value.id === id;
    });

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <DeleteRoomForm index={index} onClose={onClose} deleteRoom={deleteRoom} />
        );
      }
    });
  }

  showEditRoomForm = (id) => {
    const { roomList, editRoom } = this.props;
    var index = roomList.findIndex(function (value) {
      return value.id === id;
    });

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div>
            <EditRoomForm roomList={roomList} index={index} onClose={onClose} editRoom={editRoom} />
            <NotificationContainer />
          </div>
        );
      }
    });
  }
  



  render() {
    
    const { roomList } = this.props;
    return (
      <div className="content">
        <div className="header" >List of rooms</div>
        <Table striped bordered>
          <thead>
            <tr align ="center">
              <th>id</th>
              <th>Title</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
          roomList && roomList.map((room, key) => {
              return (
                <Room
                  key={key}
                  id={room.id}
                  space={room.space}
                  spaceLeft={room.spaceLeft}
                  showEditRoomForm={this.showEditRoomForm}
                  showDeleteRoomForm={this.showDeleteRoomForm}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Rooms;
