const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter

import { noteService } from '../services/note.service.js'

import { MenuOptions } from '../cmps/MenuOptions.jsx'
import { NoteHeader } from '../cmps/NoteHeader.jsx'
import { NotesPage } from '../views/NotesPage.jsx'
import { AddNote } from '../cmps/AddNote.jsx';



export function NoteIndex() {
    const [notes, setNotes] = useState([])
    const [note, setNote] = useState({})

    const navigate = useNavigate()


    useEffect(() => {
        noteService.query()
            .then(notes => {
                setNotes(notes)
                console.log('notes:', notes)
                // console.log('notes.id:', notes[0].id)
            })



    }, [note]) //[notes] for infinity loop




    function onSave({ ...addNote }) {
        console.log('addNote onSave NoteIndex:', addNote)
        setNote(addNote)
        noteService.save(addNote)
            .then(() => {
                navigate('/note')
                console.log(' save in storage')
            })
            .catch(() => {
                alert('Couldnt save')
                navigate('/note')
            })
    }





    // if (!notes)return <h1>loading..</h1>
    return <section>
        <div className="main-container">
            <NoteHeader />

            <section className='accordion-continer'>
                <AddNote title="Title..." onSave={onSave}>
                    <p>🍎</p>

                </AddNote>
            </section>
            <main className="main-content">
                <MenuOptions />
                <NotesPage notes={notes} />
            </main>
            <div className="footer">Footer</div>
        </div>
    </section>

}
