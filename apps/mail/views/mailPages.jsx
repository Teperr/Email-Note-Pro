import { MailPreview } from "../cmps/mailPreview.jsx"

export function MailPages({mails}){

    console.log('mails MailList:', mails)
return(
     <section className="mail-list">
        <ul className="mail-preview">
            {mails.map(mail =>
                <li key={mail.id} >
                    <MailPreview mail={mail} />

                </li>)}
        </ul>
    </section>
)
}