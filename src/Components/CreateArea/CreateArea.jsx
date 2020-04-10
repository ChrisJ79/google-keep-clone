import React, {useState} from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    }); 

    function handleChange(event) {
        const {name, value} =  event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note); 
        setNote({
            title: "",
            content:""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                <input 
                    type="text" 
                    name="title" 
                    value={note.title} 
                    placeholder="Title"
                    onChange={handleChange}
                />
                    
                <textarea 
                    name="content" 
                    value={note.content} 
                    placeholder="Take a note..." 
                    rows="2" 
                    onChange={handleChange}
                />
                <Zoom in={true}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;