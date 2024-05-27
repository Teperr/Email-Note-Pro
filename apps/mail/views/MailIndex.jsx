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
function removeMail(){
    console.log('remove the mail');
    
        setIsLoading(true)
        mailService.remove(mailId)
            .then(() => {
                // utilService.animateCSS('fadeAway')
                //     .then(() => setMails(prevMails => prevMails.filter(mail => mail.id !== mailId)))
                setMails(prevMails => prevMails.filter(mail => mail.id !== mailId))
                showSuccessMsg(`Mail (${mailId}) removed successfully!`)
            })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('There was a problem')
            })
            .finally(() => setIsLoading(false))
    
}

    return (
    <section>
        <div className="main-container">
        <MailHeader/>

            <main className="main-content">
                <MenuOptions />
                <MailPages mails={mails} onRemove={removeMail}/>
            </main>
        </div>
    </section>

    )
}

