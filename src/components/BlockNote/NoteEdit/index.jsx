import React from 'react';

const NoteEdit = ({ note, updateNote, removeNote }) => {

  const content = React.useRef(note.content);
  const title = React.useRef(note.title);

  return (
    <div className="note-edit">
      <form onSubmit={updateNote} className="form-edit">
        <input className="edit-title" type="text" ref={title} placeholder="Titre" />
        <textarea className="edit-content" ref={content} placeholder="Votre texte" />
        <p className="h-id" id="rm-id">{note.id}</p>
        <input className="btn" type="submit" value="Sauvegarder la Note" />
      </form>
      <br />
      <button className="btn" onClick={removeNote}>Delete</button>
    </div>
  );
};

export default NoteEdit;