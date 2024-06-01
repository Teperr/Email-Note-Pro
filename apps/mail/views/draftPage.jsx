const { Link } = ReactRouterDOM
const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter

import { mailService } from "../services/mail.service.js"
import { MailHeader } from "../cmps/mailAppHeader.jsx"
import { MenuOptions } from "../cmps/menuOptionsMail.jsx"
import { MailPages } from "./mailPages.jsx"
import { EmailCompose } from "../cmps/EmailCompose.jsx"
import { EmailFilter } from "../cmps/EmailFilter.jsx"

export function DraftsPage() {
    const [filterBy, setFilterBy] = useState({ body: '' })

    function OnsetFilterBy(newFilter) {
        setFilterBy(newFilter)
    }
    return (<section>
        <div className="main-container">

            <EmailFilter filterBy={filterBy} onFilter={OnsetFilterBy} />

            <main className="main-content">
                <MenuOptions />
                {/* <MailPages folder={drafts} mails={mails} onRemove={removeMail}/> */}
            </main>
        </div>
    </section>)
}