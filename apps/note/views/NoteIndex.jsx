const { useState, useEffect, useRef } = React
const { useParams, useNavigate } = ReactRouter

import { noteService } from '../services/note.service.js'

import { MenuOptions } from '../cmps/MenuOptions.jsx'
import { NoteHeader } from '../cmps/NoteHeader.jsx'
import { NotesPage } from '../views/NotesPage.jsx'
import { AddNote } from '../cmps/AddNote.jsx'


export function NoteIndex() {
    const [notes, setNotes] = useState([])
    const hideClass = useRef('')
    const [hideToEdit, setHideToEdit] = useState('')
   
    // const [noteToEdit, setNoteToEdit] = useState({})
    // const [bgColor, setBgColor] = useState('#fff');

    const navigate = useNavigate()

    useEffect(() => {
        noteService.query().then(notes => {
            setNotes(notes)
            console.log('notes:', notes)
        });
    }, []);

    function onSave(newNote) {
        console.log('addNote onSave NoteIndex:', newNote)
        noteService.save(newNote)
            .then(savedNote => {
                setNotes(prevNotes => [...prevNotes, savedNote])
                navigate('/note')
                console.log('save in storage')
            })
            .catch(() => {
                alert('Couldnt save')
                navigate('/note')
            });
    }

    function onRemove(noteId) {
        console.log('Removing note with id:', noteId)
        noteService.remove(noteId)
            .then(() => {
                setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))
                console.log('note removed successfully')
            })
            .catch(err => {
                console.log('err:', err)
            });
    }

    function onBgColor(noteId, bgColor) {
        console.log('noteId:', noteId)
        console.log('bgColor:', bgColor)
        // setNoteToEdit()




    }
    
  

    function onClickBurgerNav(className){ //hide-nav || ''
        console.log('className:', className)
        // hideClass.current = className
        setHideToEdit(className)

        // console.log('hideClass.current:', hideClass.current)
    
    
    }



    return (
        <section>
            <div className="main-container">
                <NoteHeader ClickBurgerNav={onClickBurgerNav} />
                <section className='accordion-continer'>
                    <AddNote title="Title..." onSave={onSave}>
                        <p>🍎</p>
                    </AddNote>
                </section>
                {/* <header className='pin-note'>
                </header> */}
                <main className="main-content">
                    <MenuOptions hide={hideToEdit} />
                    {/* <PinNote /> */}
                    <NotesPage notes={notes} onRemove={onRemove} onBgColor={onBgColor} />
                </main>
                <div className="footer">Footer</div>
            </div>
        </section>
    );
}
