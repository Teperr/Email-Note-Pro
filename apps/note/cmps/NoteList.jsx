import { NotePreview } from '../cmps/NotePreview.jsx'

export function NoteList({ notes, onRemove , onBgColor}) {
    // console.log('NoteList received onRemove:', onRemove)

    return (
        <section className="note-list">
            <ul className="note-preview">
                {notes.map(note => (
                    <li key={note.id}>
                        <NotePreview note={note} onRemove={onRemove} onBgColor={onBgColor} />
                    </li>
                ))}
            </ul>
        </section>
    )
}