import React, { Component } from 'react';
import './index.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        };
    }

    filterDate(date) {
        var newDate = new Date(date);
        var formatedDate = newDate.getDate() + " " + newDate.toLocaleString('en', { month: 'long' }) + " " + newDate.getFullYear();
        return formatedDate;
    }

    componentDidMount() {
        const { addZero } = this.props;
        var today = new Date();
        var date = today.getFullYear() + '-' + addZero(today.getMonth() + 1) + '-' + addZero(today.getDate());

        this.setState({
            date: this.filterDate(date),
        });
    }

    render() {
        const {  date } = this.state;
        return (
            <div className="content">
                <div className="header">{date}</div>
                
                    
            </div>
        );
    }
}
export default Home;