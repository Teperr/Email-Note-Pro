
import { MenuOptions } from '../cmps/MenuOptions.jsx'
import { NoteHeader } from '../cmps/NoteHeader.jsx'
import { Garbage } from '../cmps/Garbage.jsx'



export function GarbagePage() {

    return <section>
        <div className="main-container">
            <NoteHeader />
            <main className="main-content">
                <MenuOptions />
                <Garbage />
            </main>
            <div className="footer">Footer</div>
        </div>
    </section>
}