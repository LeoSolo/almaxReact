import React, { Component } from 'react';
import { Link } from 'react-router';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class Create extends Component {
    constructor(props) {
        super(props);
        const notes = JSON.parse(localStorage.getItem("testApp")).notes,
             findNote = notes.find(note => (note.id === props.params.id));
        findNote ? findNote.date = moment(findNote.date, 'DD/MM/YYYY') : null;
        this.state = {
            note: findNote || {
                title: '',
                description: '',
                date: moment(),
                id: Date.now().toString()
            },
            notes
        };
    }
    handleChange(date) {
        const {note} = this.state;
        note.date = date;
        this.setState({
            note
        });
    }
    editField(value, name) {
        const {note} = this.state;
        note[name] = value;
        this.setState({
            note
        });
    }
    saveNote() {
        const {note, notes} = this.state,
            indexNote = notes.findIndex(currentNote => (currentNote.id === note.id));
        note.date = note.date.format('DD/MM/YYYY');
        indexNote !== -1 ? notes[indexNote] = note : notes.push(note);
        localStorage.setItem('testApp', JSON.stringify({notes}));
    }
    deleteNote() {

    }
    render() {
        return (
            <div className="createContainer">
                <Link to="/" className="backBtn" />
                <input name="title" type="text" placeholder="Заголовок" value={this.state.note.title} onChange={(e) => this.editField(e.target.value, e.target.name)}/>
                <DatePicker
                    dateFormat='DD/MM/YYYY'
                    selected={this.state.note.date}
                    onChange={(date) => this.handleChange(date)}
                />
                <textarea name="description" placeholder="Описание" type="text" value={this.state.note.description} onChange={(e) => this.editField(e.target.value, e.target.name)}/>
                <Link to="/" className="saveBtn" onClick={() => this.saveNote()}>Save</Link>
            </div>
        );
    }
}



export default Create;