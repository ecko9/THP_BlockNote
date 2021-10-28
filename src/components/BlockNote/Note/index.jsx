import React from 'react';
import Showdown from 'showdown';


const Note = ({ note }) => {
  const converter = new Showdown.Converter();

  function createMarkup(txt) {
    return { __html: converter.makeHtml(txt) };
  }

  return (
    <div className="note">
      <h1 className="note-title">{note.title}</h1>
      <p dangerouslySetInnerHTML={createMarkup(note.content)} className="note-content"></p>
    </div>
  );
};

export default Note;