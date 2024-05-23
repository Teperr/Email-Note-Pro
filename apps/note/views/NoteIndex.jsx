const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'

import { MenuOptions } from '../cmps/MenuOptions.jsx'
import { NoteHeader } from '../cmps/NoteHeader.jsx'
import { NotesPage } from '../views/NotesPage.jsx'
import { Accordion } from '../cmps/TxtNoteAccordion.jsx';



export function NoteIndex() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        noteService.query()
            .then(notes => {
                setNotes(notes)
                console.log('notes:', notes)
                // console.log('notes.id:', notes[0].id)
            })



    }, [])


    // if (!notes)return <h1>loading..</h1>
    return <section>
        <div className="main-container">
            <NoteHeader />

            <section>
                <Accordion title="Title..." >
                    <p>🍎</p>

                </Accordion>
            </section>
            <main className="main-content">
                <MenuOptions />
                <NotesPage notes={notes} />
            </main>
            <div className="footer">Footer</div>
        </div>
    </section>

}
