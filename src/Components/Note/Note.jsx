import React from 'react';
import '../../App.css';

function Note(props) {

    function handleClick() {
        
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    );
}

export default Note;