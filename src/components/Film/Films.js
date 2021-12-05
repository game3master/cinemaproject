import  React, {Component } from "react";
import "./Film.css";
import "bootstrap/dist/css/bootstrap.css";
import Film from "./Film";
import { Table, Button } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import nextId from "react-id-generator";
import FilmClass from "../../class/FilmClass";
import EditForm from "../../forms/EditForm"
import DeleteForm from "../../forms/DeleteForm"
import AddFilm from  "../../AddFilm"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


class Films extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filmList: [
       new FilmClass(parseInt(nextId().slice(2)),  "Venom",  240 ),
       new FilmClass( parseInt(nextId().slice(2)),  "Atak Ludzi Grzybów",  90 ),
        new FilmClass( parseInt(nextId().slice(2)),  "Hannibal",  131 ),
        new FilmClass( parseInt(nextId().slice(2)),  "Smakosz",  90 ),
      ],
    };
  }


  createNotification(message) {
    NotificationManager.success('Success', message);
  }

  showDeleteForm = (id) => {
    const { filmList } = this.state;
    var index = filmList.findIndex(function (value) {
      return value.id === id;
    });

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <DeleteForm index={index} onClose={onClose} deleteFilm={this.deleteFilm} />
        );
      }
    });
  }

  showEditForm = (id) => {
    const { filmList } = this.state;
    var index = filmList.findIndex(function (value) {
      return value.id === id;
    });

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div>
            <EditForm filmList={filmList} index={index} onClose={onClose} editFilm={this.editFilm} />
            <NotificationContainer />
          </div>
        );
      }
    });
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
      var id = state.filmList.length + 1;
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




  render() {
    
   
    return (
      <div>
        <h3>List of films</h3>
        <Table striped bordered>
          <thead>
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>

            {this.state.filmList.map((film, key) => {
              return (
                <Film
                  key={key}
                  id={film.id}
                  title={film.title}
                  duration={film.duration}
                  showEditForm={this.showEditForm}
                  showDeleteForm={this.showDeleteForm}
                />
              );
            })}
          </thead>
          <tbody></tbody>
        </Table>
        <AddFilm addFilm = {this.addFilm }/>
      </div>
    );
  }
}
export default Films;
