const { useState, useEffect, useRef } = React
import { utilService } from "../../../services/util.service.js"
import { mailService } from "../services/mail.service.js"

export function MailPreview({ mail, isRead }) {
    // console.log(isRead);
    const date = useRef()
    date.current = (mail.sentAt.year < 2024)
        ? mail.sentAt.year : mail.sentAt.month + ' ' + utilService.padNum(mail.sentAt.day)

    const [read, setRead] = useState('')
    const isBold = useRef('bold')

    useEffect(() => {
        setRead(prevRead => {
            
                isBold.current = mail.isRead ? '' : 'bold'
                return prevRead = mail.isRead ? 'read-mail' : ''

        })

    }, [])
    function readMailClick() {
        mailService.readMail(mail.id)
            .then(updateReadMail => console.log(updateReadMail.isRead))
    }


    // console.log(mail);
    // setRead(prevRead => {
    //     isBold.current=mailService.readMail(mail) ? '':'bold'
    //     const cls =isBold.current ? '' : 'read-mail'

    //     console.log(cls);
    //     return prevRead=cls
    // })



    const [hover, setHover] = useState('none')
    const [hoverTohide, setHoverTohide] = useState('show')

    function showNav() {
        setHover('show')
        setHoverTohide('none')
    }

    function removeNav() {
        setHover('none')
        setHoverTohide('show')
    }


    return (
        <section className={`mail ${read}`} onClick={readMailClick} onMouseOver={showNav} onMouseOut={removeNav} >
            <span className="click-star">
                <button><i className="fa-regular fa-star"></i></button>
            </span>

            <span className={`mail-name ${isBold.current}  `}>
                {mail.name}
            </span>

            <span className={`mail-subject ${isBold.current} `}>
                {mail.subject}
            </span>
            <span className="mail-body">
                -{mail.body}
            </span>

            <span className={`mail-date ${hoverTohide} ${isBold.current}`}>
                {date.current}
            </span>


            {/* <dialog className={`hover-nav-mail ${hover} `}> */}
            <nav className={hover}>
                <button title="trash" href="#"><i className="fa-regular fa-trash-can"></i></button>
                <button onClick={readMailClick} title="pin as read" href="#"><i className="fa-regular fa-envelope-open"></i></button>
                <button title="move to drafts" href="#"><i className="fa-solid fa-file-arrow-down"></i></button>
            </nav>

            {/* </dialog> */}
        </section>
    )
}