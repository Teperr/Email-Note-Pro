const { useState, useEffect, useRef } = React
const { useParams, useNavigate } = ReactRouter
import { utilService } from "../../../services/util.service.js"
import { mailService } from "../services/mail.service.js"

export function MailPreview({ mail, renderGoldStar, updateUnreadAfterDelete, isTrashPage, outFromStorage, }) {
    const date = useRef()
    date.current = (mail.sentAt.year < 2024)
        ? mail.sentAt.year : mail.sentAt.month + ' ' + utilService.padNum(mail.sentAt.day)
        const navigate=useNavigate()

    const [read, setRead] = useState('')

    const [isStar, setIsStar] = useState(renderGoldStar)
    const [isTrash, setIsTrash] = useState('')
    const [isDraft,setIsDraft]=useState('')
    const starCls = useRef('')

    const isBold = useRef('bold')

    useEffect(() => {
        setRead(prevRead => {

            isBold.current = mail.isRead ? '' : 'bold'
            return prevRead = mail.isRead ? 'read-mail' : ''

        })

    }, [])
    function readMailClick() {
   
        console.log(mail);
        mailService.readMail(mail.id)
            .then(updateReadMail => {

                const pinRead = updateReadMail.isRead ? 'read-mail' : ''
                setRead(pinRead)
            })
    }






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

    function removeMail(ev) {
        ev.preventDefault()
        ev.stopPropagation()
        if (isTrashPage === 'trash-page') {
            outFromStorage(mail.id)
        }
        else {
            mailService.updateTrashMails(mail.id)
                .then(updateMail => {
                    console.log(updateMail);
                    setIsTrash('trash')
                    updateUnreadAfterDelete()
                })
        }

    }
    function moveTodrafts(ev){
        ev.preventDefault()
        ev.stopPropagation()
        mailService.moveTodrafts(mail.id)
        .then(updateMail => {
            console.log(updateMail);
            navigate('mail/drafts')
        })
    }

    function toggleStar(ev) {
        ev.preventDefault()
        ev.stopPropagation()
        console.log('starClicked');
        mailService.toggleStarData(mail.id)
            .then(updateMail => {
                console.log(updateMail);
                setIsStar(updateMail.isStar)
            })

    }
    
    starCls.current = (isStar) ? 'star' : ''
    return (
        <section className={`mail ${read} ${isTrash} `} onClick={readMailClick} onMouseOver={showNav} onMouseOut={removeNav} >
            <span onClick={toggleStar} className={`click-star`}>
                <button ><i className={`fa-regular fa-star  ${starCls.current} `}></i></button>
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


            <nav className={hover}>
                <button onClick={removeMail} title="trash" href="#"><i className="fa-regular fa-trash-can"></i></button>
                <button onClick={readMailClick} title="pin as read" href="#"><i className="fa-regular fa-envelope-open"></i></button>
                <button onClick={moveTodrafts} title="move to drafts" href="#"><i className="fa-solid fa-file-arrow-down"></i></button>
            </nav>

        </section>
    )
}