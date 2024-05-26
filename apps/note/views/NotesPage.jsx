
import { NoteList } from '../cmps/NoteList.jsx'

export function NotesPage({ notes, onRemove }) {
    // console.log('NotesPage received onRemove:', onRemove)

    return (
        <section className="article">
            <NoteList notes={notes} onRemove={onRemove} />
        </section>
    );
}