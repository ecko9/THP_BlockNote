import React from 'react';

const NoteList = ({ display, noteList, addNewNote }) => {

  return (
    <div className="notelist">
      <button className="btn" onClick={addNewNote}>Nouvelle Note  +</button>
      <div className="list">
        {noteList.map((note, i) => (
          <div className="min-note" key={`min-note${i}`} onClick={display}>
            <h1 className="notelist-title">{note.title}</h1>
            <p className="notelist-content">{note.content}</p>
            <p className="h-id">{note.id}</p>
          </div>
        ))}
      </div>
    </div >
  );
};

export default NoteList;