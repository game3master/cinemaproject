import React, { Component } from 'react';
import Navbar from "./other/Navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Home";
import AddFilm from './other/AddFilm';
import Films from './components/Film/Films';
import FilmClass from "./class/FilmClass";
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import nextId from "react-id-generator";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import AddRoom from './other/AddRoom';
import Rooms from './components/Room/Rooms';
import RoomClass from "./class/RoomClass";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmList: [
             new FilmClass(parseInt(nextId().slice(2)),  "Venom",  240 ),
             new FilmClass( parseInt(nextId().slice(2)),  "Atak Ludzi Grzybów",  90 ),
              new FilmClass( parseInt(nextId().slice(2)),  "Hannibal",  131 ),
              new FilmClass( parseInt(nextId().slice(2)),  "Smakosz",  90 ),
            ],
            roomList: [
              new RoomClass(parseInt(nextId().slice(2)),  30,  24 ),
              new RoomClass( parseInt(nextId().slice(2)),  32,  9 ),
               new RoomClass( parseInt(nextId().slice(2)),  33,  13 ),
               new RoomClass( parseInt(nextId().slice(2)),  34,  9 ),
             ],
          };
        }
        
        createNotification(message) {
            NotificationManager.success('Success', message);
          }

          addZero(number) {
            return number < 10 ? '0' + number : number;
        }
        
        
          onChange(e) {
            var name = e.target.id;
            this.setState({
              [name]: e.target.value
            });
          }
        
          changeTable() {
            this.setState(state => {
              let show = state.showFilms
              return { showFilms: !show }
            });
          }
          
          addFilm = (s) => {
            this.setState(state => {
              var films = state.filmList;
              var id = parseInt(nextId().slice(2))
              let newFilm = new FilmClass(id, s.title, s.duration);
              films.push(newFilm);
              return { filmList: films }
            });
          }
        
          editFilm = (index, s) => {
            this.setState(state => {
              var films = state.filmList;
              films[index].title = s.editTitle;
              films[index].duration = s.editDuration;
        
              return { filmList: films }
            });
            this.createNotification('Film was edited successfully');
          }
        
          deleteFilm = (index) => {
            this.setState(state => {
              var films = state.filmList;
              films.splice(index, 1);
              return { filmList: films }
            });
          }

          addZero(number) {
              return number < 10 ? '0' + number:number;
          }

          addRoom = (s) => {
            this.setState(state => {
              var rooms = state.roomList;
              var id = state.roomList.length + 1;
              let newRoom = new RoomClass(id, s.space, s.spaceLeft);
              rooms.push(newRoom);
              return { RoomList: Rooms }
            });
          }
        
          editRoom = (index, s) => {
            this.setState(state => {
              var rooms = state.roomList;
              rooms[index].space = s.editSpace;
              rooms[index].spaceLeft = s.editSpaceLeft;
        
              return { roomList: rooms }
            });
            this.createNotification('Room was edited successfully');
          }
        
          deleteRoom = (index) => {
            this.setState(state => {
              var rooms = state.roomList;
              rooms.splice(index, 1);
              return { roomList: rooms }
            });
          }

        render() {
                const { filmList,roomList } = this.state;
                return (
                    <Router>
                        <Navbar />
                        <Route exact path="/"
                            render={() => <Home filmList={filmList}
                            addZero={this.addZero}
                                 />} />
                        <Route path="/allFilms"
                            render={() => <Films filmList={filmList}
                                deleteFilm={this.deleteFilm}
                                editFilm={this.editFilm}
                                addZero={this.addZero}
                         />} />

                          <Route path="/allRooms"
                            render={() => <Rooms roomList={roomList}
                                deleteRoom={this.deleteRoom}
                                editRoom={this.editRoom}
                                addZero={this.addZero}
                         />} />
                        <Route path="/addFilm"
                            render={() => <AddFilm addFilm={this.addFilm} />} />

                         <Route path="/addRoom"
                            render={() => <AddRoom addRoom={this.addRoom} />} />  

                        {/* <Route path="/calendar"
                            render={() => <Calendar noteList={noteList}
                addZero={this.addZero} />} />   dodac tu pozniej repertuary */ }
                    </Router>
                );
            }
        }
export default App;