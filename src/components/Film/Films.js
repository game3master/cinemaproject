import  React, {Component } from "react";
import "./Film.css";
import "bootstrap/dist/css/bootstrap.css";
import Film from "./Film";
import { Table, Button } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import nextId from "react-id-generator";


class Films extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filmList: [
        { id: parseInt(nextId().slice(2)), title: "Venom", duration: 240 },
        { id: parseInt(nextId().slice(2)), title: "Atak Ludzi Grzybów", duration: 90 },
        { id: parseInt(nextId().slice(2)), title: "Hannibal", duration: 131 },
        { id: parseInt(nextId().slice(2)), title: "Smakosz", duration: 90 },
      ],
      id: undefined,
      title: '',
      duration: '',
    };
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
  
  addFilm() {
    this.setState(state => {
      var films = state.filmList;
        films.push({
          id: parseInt(nextId().slice(2)),
          title: state.title,
          duration: state.duration,
        })
      return { filmList: films }
  })
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
                />
              );
            })}
          </thead>
          <tbody></tbody>
        </Table>
        <Table striped bordered>
          <tbody>
            <tr>
            <td colSpan="3" style={{ textAlign: "center" }}><i><b>Add new film</b></i></td>
            </tr>
            <tr>
              <td><input type="text" placeholder="Title of film" id="title" onChange={(e) => this.onChange(e)} /></td>
              <td><input type="number"  id="duration"  onChange={(e) => this.onChange(e)}></input> </td>          
              <td><Button variant="secondary" onClick={() => this.addFilm()}>Add Film</Button></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Films;
