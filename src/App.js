import React, { Component } from 'react';
import Create from './create';
import { Link } from 'react-router';
import moment from 'moment';

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
    deleteNote(id) {
        const notes = this.state.notes;
        const indexNote = notes.findIndex(currentNote => (currentNote.id === id));
        notes.splice(indexNote, 1);
        this.setState({
            notes
        });
        localStorage.setItem('testApp', JSON.stringify({notes}));
    }
    render() {
        return (
            <div>
               <Link to="create" className="createBtn" />
               <Notes data={this.state.notes} deleteNote={(id) => this.deleteNote(id)} />
            </div>
        );
    }
}

class Notes extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {data, deleteNote} = this.props;
        let notesTemplate = data.map((item, index)=>{
            let isExpired = moment().isAfter(moment(item.date, 'DD/MM/YYYY'));
            console.log(isExpired);
            return (
                <li className={isExpired ? 'note expired' : 'note'} key={index}>
                    <div className="note_title">{item.title}</div>
                    <div className="note_description">{item.description}</div>
                    <span className="note_date">{item.date}</span>
                    <Link to={`create/${item.id}`} className="editBtn controlBtn" />
                    <div className="deleteBtn controlBtn" onClick={() => deleteNote(item.id)}></div>
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
