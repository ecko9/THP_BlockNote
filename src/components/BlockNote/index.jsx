import React from 'react';
import Note from 'components/BlockNote/Note';
import NoteEdit from 'components/BlockNote/NoteEdit';
import NoteList from 'components/BlockNote/NoteList';

const BlockNote = () => {

  const [savedNote, setSavedNote] = React.useState({});
  const [noteList, setNoteList] = React.useState([{ title: "titre", content: "yoyoy", id: 1 }]);
  const [displayEdit, setDisplayEdit] = React.useState(false);

  const displayNewNote = (e) => {
    setSavedNote({ title: e.currentTarget.children[0].innerHTML, content: e.currentTarget.children[1].innerHTML, id: parseInt(e.currentTarget.children[2].innerHTML, 10) });
    setDisplayEdit(true);
  }

  const addNewNote = (e) => {
    let note = { title: "Nouvelle Note", content: "...", id: noteList.length + 1 };
    setNoteList(noteList => [...noteList, note]);
  }

  const removeNote = (e) => {
    let id = parseInt(document.querySelector('#rm-id').innerHTML, 10);
    let arrayTmp = noteList.filter(note => note.id != id);
    setNoteList(arrayTmp);

    if (localStorage.noteList)
      localStorage.removeItem('noteList');
    localStorage.setItem('noteList', JSON.stringify(arrayTmp));

    setDisplayEdit(false);
  }

  const updateNoteList = (noteToSave) => {
    let arrayTmp = noteList.map((note) => {
      if (note.id === noteToSave.id)
        return noteToSave;
      else
        return note;
    });
    setNoteList(arrayTmp);

    if (localStorage.noteList)
      localStorage.removeItem('noteList');
    localStorage.setItem('noteList', JSON.stringify(arrayTmp));
  }

  const updateNote = (e) => {
    e.preventDefault();
    setSavedNote({ title: e.target.children[0].value, content: e.target.children[1].value, id: parseInt(e.target.children[2].innerHTML, 10) });
    updateNoteList({ title: e.target.children[0].value, content: e.target.children[1].value, id: parseInt(e.target.children[2].innerHTML, 10) });
  }

  React.useEffect(
    () => {
      if (localStorage.noteList)
        setNoteList(JSON.parse(localStorage.noteList));
      return;
    }, []
  );

  return (
    <div className="block-note">
      <NoteList display={displayNewNote} noteList={noteList} addNewNote={addNewNote} />
      {displayEdit ?
        <div className="display">
          <Note note={savedNote} />
          <NoteEdit note={savedNote} display={displayEdit} updateNote={updateNote} removeNote={removeNote} />
        </div>
        : ""}
    </div>
  );
};

export default BlockNote;