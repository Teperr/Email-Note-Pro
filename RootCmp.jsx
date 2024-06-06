const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/AppHeader.jsx"
import { About } from "./views/About.jsx"
import { Home } from "./views/Home.jsx"
import { MailIndex } from "./apps/mail/views/MailIndex.jsx"
import { NoteIndex } from "./apps/note/views/NoteIndex.jsx"
import { RemindersPage } from "./apps/note/views/RemindersPage.jsx"
import { LabelsPage } from "./apps/note/views/LabelsPage.jsx"
import { ArchivesPage } from "./apps/note/views/ArchivesPage.jsx"
import { GarbagePage } from "./apps/note/views/GarbagePage.jsx"
import { StarredPage } from "./apps/mail/views/StarredPage.jsx"
import { SentPage } from "./apps/mail/views/sentPage.jsx"
import { TrashPage } from "./apps/mail/views/trashPage.jsx"
import { DraftsPage } from "./apps/mail/views/draftPage.jsx"
import { MailDetails } from "./apps/mail/views/mailDeatails.jsx"
import { FullMainPage } from "./apps/mail/views/FullMainPage.jsx"


export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail" element={<MailIndex />} />
                <Route path="/mail/mail" element={<MailIndex />} />
                <Route path="/note" element={<NoteIndex />} />
                <Route path="/note/:mailId" element={<NoteIndex />} />
                <Route path="/note/RemindersPage" element={<RemindersPage />} />
                <Route path="/note/label" element={<LabelsPage />} />
                <Route path="/note/archive" element={<ArchivesPage />} />
                <Route path="/note/trash" element={<GarbagePage />} />
                <Route path="/note/trash/:trash" element={<GarbagePage />} />

                <Route path="/mail/starred" element={<StarredPage />} />
                <Route path="/mail/sent" element={<SentPage />} />
                <Route path="/mail/trash/:isTrash" element={<TrashPage />} />
                <Route path="/mail/trash" element={<TrashPage />} />
                <Route path="/mail/drafts" element={<DraftsPage />} />
                <Route path="/mail/:mailId/:folderName" element={<MailDetails />} />
                <Route path="/mail/openMailPage" element={<FullMainPage />} />
              


            </Routes>
        </section>
    </Router>
}
