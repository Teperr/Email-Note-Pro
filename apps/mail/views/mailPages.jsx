const { Link } = ReactRouterDOM
const { useState, useEffect,useRef } = React

import { MailPreview } from "../cmps/mailPreview.jsx"


export function MailPages({ mails, onRemove }) {
    

   
    return (
        <section className="mail-list">
            <ul className="mail-preview">
                {mails.map(mail =>
                    <li key={mail.id} >
                        <Link to={`/mail/${mail.id}`} ><MailPreview  isRead={mail.isRead} mail={mail} renderGoldStar={mail.isStar}  /></Link>
                    </li>)}
            </ul>
        </section>
    )
}