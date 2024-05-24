import { NotePreview } from '../cmps/NotePreview.jsx'

export function NoteList({ notes }) {
    console.log('notes NoteList:', notes)
    console.log('notes.id:', notes.id)
    return <section className="note-list">
        <ul className="note-preview">
            {notes.map(note =>
                <li key={note.id} >
                    <NotePreview note={note} />

                </li>)}
        </ul>
    </section>
}
