import { NotePreview } from '../cmps/NotePreview.jsx'

export function NoteList({ notes, onRemove }) {
    // console.log('NoteList received onRemove:', onRemove)

    return (
        <section className="note-list">
            <ul className="note-preview">
                {notes.map(note => (
                    <li key={note.id}>
                        <NotePreview note={note} onRemove={onRemove} />
                    </li>
                ))}
            </ul>
        </section>
    )
}