
import { NoteList } from '../cmps/NoteList.jsx'
import { PinNote } from '../cmps/PinNote.jsx'

export function NotesPage({ notes, onRemove, onBgColor, imgfilesToNotePreview }) {
    // console.log('NotesPage received onRemove:', onRemove)
    console.log('notes:', notes)
    console.log('imgfilesToNotePreview:', imgfilesToNotePreview)
    return (
        <section className="article">
            {/* <PinNote /> */}


            <NoteList
                notes={notes}
                onRemove={onRemove}
                onBgColor={onBgColor}
                imgfilesToNotePreview={imgfilesToNotePreview}
            />

        </section>
    );
}