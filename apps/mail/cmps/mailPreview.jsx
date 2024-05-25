const { useState, useEffect, useRef } = React
import { utilService } from "../../../services/util.service.js"

export function MailPreview({ mail }) {

    const date = useRef()
    date.current = (mail.sentAt.year < 2024)
        ? mail.sentAt.year : mail.sentAt.month + ' ' + utilService.padNum(mail.sentAt.day)

    const [read, setRead] = useState('')
    function readMail() {
        setRead(prevRead => {
            const cls = prevRead ? '' : 'read-mail'
            console.log(cls);
            return cls
        })
    }

    const [hover, setHover] = useState('none')

    function showNav() {
        setHover('show')
    }
    
    function removeNav() {
        setHover('none')
    }


    return (
        <section className={`mail ${read}`}  onMouseOver={showNav} onMouseOut={removeNav} >
            <span className="click-star">
                <button><i className="fa-regular fa-star"></i></button>
            </span>

            <p className="mail-name">
                {mail.from}
            </p>

            <p className="mail-subject">
                {mail.subject}
            </p>

            <span className="mail-date">
                {date.current}
            </span>


            <dialog className={`hover-nav-mail ${hover} `}>
                <form method="dialog">
                    <nav>
                        <button title="trash" href="#"><i className="fa-regular fa-trash-can"></i></button>
                        <button onClick={readMail} title="pin as read" href="#"><i className="fa-regular fa-envelope-open"></i></button>
                        <button title="move to drafts" href="#"><i className="fa-solid fa-file-arrow-down"></i></button>
                    </nav>
                </form>
            </dialog>
        </section>
    )
}