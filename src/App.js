import React, { Component } from 'react';
import Create from './create';
import { Link } from 'react-router';

export class App extends  Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )

    }
}

export class MainPage extends Component {
    constructor(props){
        super(props);
        const stringItems = localStorage.getItem("testApp");
        this.state = {
            notes: JSON.parse(stringItems).notes
        }
    }
    render() {
        return (
            <div>
               <Link to="create" className="createBtn" />
               <Notes data={this.state.notes} />
            </div>
        );
    }
}

class Notes extends Component {
    render() {
        let data = this.props.data;
        let notesTemplate = data.map((item, index)=>{
            return (
                <li className="note" key={index}>
                    <div className="note_title">{item.title}</div>
                    <div className="note_description">{item.description}</div>
                    <span className="note_date">{item.date}</span>
                    <Link to={`create/${item.id}`} className="editBtn controlBtn" />
                    <div className="deleteBtn controlBtn"></div>
                </li>
            );
        });

        return (
            <ul className="notesList">
                {notesTemplate}
            </ul>
        )
    }
}


export default App;
