import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="topnav">
            <div className="topnavElements">
                <Link to="/" className="navElement">Home</Link>
                <Link to="/addFilm" className="navElement">Add film</Link>
                <Link to="/addRoom" className="navElement">Add room</Link>
                <Link to="/allFilms" className="navElement">Films</Link>
                <Link to="/allRooms" className="navElement">Rooms</Link>
                <Link to="/calendar" className="navElement">Calendar</Link>
            </div>
        </div >
    );
}

export default Navbar;