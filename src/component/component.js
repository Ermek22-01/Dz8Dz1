import React, { useState} from "react";

const NoteForm = ({ addNote}) => {
    const [noteText, setNoteText] = useState('');
    const handleInputChange = (e) => {
        setNoteText(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (noteText.trim() !== '') {
            addNote({
                text: noteText,
                completed:false
            })
            setNoteText('');
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={noteText}
            onChange={handleInputChange}
            placeholder="Enter a note"/>
            <button type="submit">Add Note</button>
        </form>
    );
};
export default NoteForm;
