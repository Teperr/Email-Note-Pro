
import { MenuOptions } from '../cmps/MenuOptions.jsx'
import { NoteHeader } from '../cmps/NoteHeader.jsx'
import { Archives } from '../cmps/Archives.jsx'



export function ArchivesPage() {

    return <section>
        <div className="main-container">
            <NoteHeader />
            <main className="main-content">
                <MenuOptions />
                <Archives />
            </main>
            <div className="footer">Footer</div>
        </div>
    </section>
}