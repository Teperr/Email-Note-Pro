const { useState } = React


const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter


import { MenuOptions } from '../cmps/MenuOptions.jsx'
import { NoteHeader } from '../cmps/NoteHeader.jsx'
import { NotesPage } from '../views/NotesPage.jsx'
import { RemindersPage } from '../views/RemindersPage.jsx'


export function NoteIndex() {

    const [route, setRoute] = useState('page')
    console.log('route:', route)




    return <section>
        <div className="main-container">
            <NoteHeader />

            <main className="main-content">

                <MenuOptions />







                {/* <div className="list-container">
                    <a onClick={() => setRoute('page')} href="#">page</a>
                    <a onClick={() => setRoute('RemindersPage')} href="#">Reminders</a>
                </div> */}
                {/* <NotesPage /> */}

                {route === 'page' && <NotesPage />}
                {/* {route === 'RemindersPage' && <RemindersPage />} */}

            </main>

            <div className="footer">Footer</div>

        </div>

    </section>

}
