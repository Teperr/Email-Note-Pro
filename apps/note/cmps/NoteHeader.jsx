import { Accordion } from '../cmps/TxtNoteAccordion.jsx';


export function NoteHeader() {
    return <header className="header">
        <h1>Notes</h1>
        <button className="toggle-menu-btn" type="button">☰</button>

        {/* <Accordion title="כותרת" children='ipsum'>
            <p>Lorem ipsum</p>


        </Accordion> */}
        {/* style={{ marginBlock: '50px' }} */}
      
    </header>
}