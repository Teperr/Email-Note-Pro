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
    const[hoverTohide,setHoverTohide]=useState('show')

    function showNav() {
        setHover('show')
        setHoverTohide('none')
    }
    
    function removeNav() {
        setHover('none')
        setHoverTohide('show')
    }


    return (
        <section className={`mail ${read}`}  onMouseOver={showNav} onMouseOut={removeNav} >
            <span className="click-star">
                <button><i className="fa-regular fa-star"></i></button>
            </span>

            <span className="mail-name">
                {mail.name}
            </span>

            <span className="mail-subject ">
                {mail.subject}
            </span>
            <span className="mail-body">
               -{mail.body}
            </span>

            <span className={`mail-date ${hoverTohide}`}>
                {date.current}
            </span>


            {/* <dialog className={`hover-nav-mail ${hover} `}> */}
                    <nav className={hover}>
                        <button  title="trash" href="#"><i className="fa-regular fa-trash-can"></i></button>
                        <button onClick={readMail} title="pin as read" href="#"><i className="fa-regular fa-envelope-open"></i></button>
                        <button title="move to drafts" href="#"><i className="fa-solid fa-file-arrow-down"></i></button>
                    </nav>
                
            {/* </dialog> */}
        </section>
    )
}