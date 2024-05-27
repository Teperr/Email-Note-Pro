const { Link } = ReactRouterDOM
import { MailPreview } from "../cmps/mailPreview.jsx"

export function MailPages({ mails, onRemove }) {
function hello(ev){
    console.log('hello');
    ev.stopPropagation()
}
    return (
        <section className="mail-list">
            <ul className="mail-preview">
                {mails.map(mail =>
                    <li key={mail.id} >
                        <Link to={`/mail/${mail.id}`} onClick={hello}><MailPreview mail={mail}  /></Link>
                    </li>)}
            </ul>
        </section>
    )
}