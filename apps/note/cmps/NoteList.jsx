import { NotePreview } from '../cmps/NotePreview.jsx'

export function NoteList({ notes, onRemove , onBgColor, imgfilesToNotePreview}) {
    // console.log('NoteList received onRemove:', onRemove)
    console.log('notes:', notes)
    localStorage
    

    return (
        <section className="note-list">
            <ul className="note-preview">
                {notes.map(note => (
                    
                    <li key={note.id}>
                        <NotePreview note={note} onRemove={onRemove} onBgColor={onBgColor} imgfilesToNotePreview={imgfilesToNotePreview} />
                    </li>
                ))}
            </ul>
        </section>
    )
}