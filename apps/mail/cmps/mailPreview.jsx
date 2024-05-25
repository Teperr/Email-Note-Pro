const { useState, useEffect, useRef } = React
import { utilService } from "../../../services/util.service.js"

export function MailPreview({ mail }) {

    const date = useRef()
    date.current = (mail.sentAt.year < 2024)
     ? mail.sentAt.year : mail.sentAt.month + ' ' + utilService.padNum(mail.sentAt.day)

const [hover,setHover]=useState('none')

     function showNav(){
        setHover('show')
     }
     function removeNav(){
        setHover('none')
     }

    return (
        <section className="mail"   onMouseOver={showNav} onMouseOut={removeNav} >
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
                        <a title="trash" href="#"><i className="fa-regular fa-trash-can"></i></a>
                        <a href="#"><i className="fa-regular fa-envelope-open"></i></a>
                        <a href="#"><i className="fa-solid fa-file-arrow-down"></i></a>
                    </nav>
                </form>
            </dialog>
        </section>
    )
}