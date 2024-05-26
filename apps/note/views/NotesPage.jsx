
import { NoteList } from '../cmps/NoteList.jsx'

export function NotesPage({ notes, onRemove , onBgColor}) {
    // console.log('NotesPage received onRemove:', onRemove)

    return (
        <section className="article">
            <NoteList notes={notes} onRemove={onRemove} onBgColor={onBgColor} />
        </section>
    );
}