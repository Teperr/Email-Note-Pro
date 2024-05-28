
import { NoteList } from '../cmps/NoteList.jsx'
import { PinNote } from '../cmps/PinNote.jsx'

export function NotesPage({ notes, onRemove , onBgColor}) {
    // console.log('NotesPage received onRemove:', onRemove)
    console.log('notes:', notes)

    return (
        <section className="article">
            {/* <PinNote /> */}
            <NoteList notes={notes} onRemove={onRemove} onBgColor={onBgColor} />
            
        </section>
    );
}