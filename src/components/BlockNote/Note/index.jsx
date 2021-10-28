import React from 'react';

const Note = ({ note }) => {
  return (
    <div className="note">
      <h1 className="note-title">{note.title}</h1>
      <p className="note-content">{note.content}</p>
    </div>
  );
};

export default Note;