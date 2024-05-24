const { Link } = ReactRouterDOM
const { useState, useEffect } = React

import { mailService } from "../services/mail.service.js"
import { MailHeader } from "../cmps/mailAppHeader.jsx"
import { MenuOptions } from "../cmps/menuOptionsMail.jsx"
import { MailPages } from "./mailPages.jsx"

export function MailIndex() {

const[mails,setMails]=useState([])



useEffect(() => {
    mailService.query()
        .then(mails => {
            setMails(mails)
            console.log('mails:', mails)
        })



}, [])

    return (
    <section>
        <div className="main-container">
        <MailHeader/>

            <main className="main-content">
                <MenuOptions />
                <MailPages mails={mails}/>
            </main>
        </div>
    </section>

    )
}

