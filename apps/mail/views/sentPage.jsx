const { Link } = ReactRouterDOM
const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter
import { mailService } from "../services/mail.service.js"
import { MailHeader } from "../cmps/mailAppHeader.jsx"
import { MenuOptions } from "../cmps/menuOptionsMail.jsx"
import { MailPages } from "./mailPages.jsx"
import { EmailCompose } from "../cmps/EmailCompose.jsx"

export function SentPage(){
    return (
        <section>
            <div className="main-container">
            <MailHeader/>
    
                <main className="main-content">
                    <MenuOptions />
                    {/* <MailPages mails={mails} onRemove={removeMail}/> */}
                </main>
           <EmailCompose/> 
            </div>
        </section>
    
        )
}