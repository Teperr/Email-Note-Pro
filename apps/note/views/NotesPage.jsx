
import { NoteList } from '../cmps/NoteList.jsx'

export function NotesPage({ notes }) {
    // console.log('notes NotesPage:', notes)

    function handleChange({ target }) {
        const { name, type } = target
        // console.log('target.name:', name)
        // console.log('target.type:', type)


        // setFilterByToEdit(prevFilter => ({ ...prevFilter, [name]: type === 'number' ? +target.value : target.value }))
    }


    return <section className="article">

        {/* <h3>NotesPage</h3> */}
        <NoteList notes={notes} />



    </section>

}