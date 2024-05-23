const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/AppHeader.jsx"
import { About } from "./views/About.jsx"
import { Home } from "./views/Home.jsx"
import { MailIndex } from "./apps/mail/views/MailIndex.jsx"
import { NoteIndex } from "./apps/note/views/NoteIndex.jsx"
import { RemindersPage } from "./apps/note/views/RemindersPage.jsx"
import { LabelsPage } from "./apps/note/views/LabelsPage.jsx"



export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail" element={<MailIndex />} />
                <Route path="/note" element={<NoteIndex />} />
                <Route path="/note/RemindersPage" element={<RemindersPage />} />
                <Route path="/note/label" element={<LabelsPage />} />
                <Route path="/note/label" element={<LabelsPage />} />
                {/* <Route path="/note/NotesPage" element={<NoteIndex />} /> */}
            </Routes>
        </section>
    </Router>
}
