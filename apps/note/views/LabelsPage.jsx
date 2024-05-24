
import { MenuOptions } from '../cmps/MenuOptions.jsx'
import { NoteHeader } from '../cmps/NoteHeader.jsx'
import { Labels } from '../cmps/Labels.jsx'



export function LabelsPage() {

    return <section>
        <div className="main-container">
            <NoteHeader />
            <main className="main-content">
                <MenuOptions />
                <Labels />
            </main>
            <div className="footer">Footer</div>
        </div>
    </section>
}