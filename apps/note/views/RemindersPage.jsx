
import { MenuOptions } from '../cmps/MenuOptions.jsx'
import { NoteHeader } from '../cmps/NoteHeader.jsx'
import { Reminders } from '../cmps/Reminders.jsx'



export function RemindersPage() {

    return <section>
        <div className="main-container">
            <NoteHeader />
            <main className="main-content">
                <MenuOptions />
                <Reminders />
            </main>
            <div className="footer">Footer</div>
        </div>
    </section>
}