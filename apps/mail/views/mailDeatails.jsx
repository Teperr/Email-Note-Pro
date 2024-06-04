const { useState, useEffect, useRef } = React
const { useParams, useNavigate } = ReactRouter

const { Link } = ReactRouterDOM

import { mailService } from "../services/mail.service.js"
import { UserMsg } from "../../../cmps/UserMsg.jsx"
import { showErrorMsg, showUserMsg } from "../../../services/event-bus.service.js"
import { MailHeader } from "../cmps/mailAppHeader.jsx"
import { MenuOptions } from "../cmps/menuOptionsMail.jsx"



export function MailDetails() {
    const [mail, setMail] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [pinAsRead, setPinAsRead] = useState("-open")
    const [isTrash, setIsTrash] = useState('')
    
    // const info = useRef({})
    // const [info, setInfo] = useState({})


    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadMail()
    }, [params.mailId])


    function loadMail() {
        setIsLoading(true)
        mailService.get(params.mailId)
            .then(mail => {
                setMail(mail)


            })
            .catch(() => {
                showErrorMsg('Couldnt get mail...')
                navigate('/mail')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }



    function sentAsNote() {
        console.log('as note');
        // mailService.get(params.mailId)
        //     .then(mail => {
        //         const infomation = { title: mail.subject, txt: mail.body }
        //         console.log(',mail:', mail)
        //         console.log('info:', infomation)
        //         // setInfo(infomation)
        //         // info.current = infomation

        //         console.log('info:', info)



        //     })


    }


    function removeMail() {
        console.log('remove mail');
        ev.preventDefault()
        ev.stopPropagation()
        // if (isTrashPage === 'trash-page') {
        //     outFromStorage(params.mailId)
        // }
        // else {
        mailService.updateTrashMails(params.mailId)
        // .then(updateMail => {
        //     console.log(updateMail);
        //     setIsTrash('trash')
        // })
        // }
    }

    function unReadMail() {
        console.log(params.mailId);
        mailService.makeReadtoUnRead(params.mailId)
            .then(updateMail => console.log(updateMail.isRead))
    }

    // setPinAsRead(previcon=>previcon= previcon ? '':'-open')


    if (isLoading) return <h3>Loading...</h3>
    return (
        <section className="mail-deatails-page">
            <div className="main-container">
                <MailHeader />
                <main className="main-content">
                    <MenuOptions />
                    <section className="mail-details">
                        <article className="mail-data">
                            <h3>Subject: {mail.subject}</h3>
                            <span className="date-sent">sent at: {mail.sentAt.month} {mail.sentAt.day} <span>year:{mail.sentAt.year}</span></span>
                            <h5>From: {mail.from}</h5>
                            <p> Body: {mail.body}</p>
                        </article>
                        <section className="actions">
                            <Link to={`/note/${mail.id}`}> <button title="Save as note" onClick={sentAsNote}><i className="fa-solid fa-paper-plane"></i></button></Link>
                            <Link to={`/mail/${params.folderName}`}><button title="remove Mail" onClick={removeMail}><i className="fa-regular fa-trash-can"></i></button></Link>
                            <Link to="/mail/newMail"><  button title="replay email" ><i className="fa-solid fa-reply"></i></button></Link>
                            {/* <Link to="/mail/openMailPage"><button title="full page"><i className="fa-solid fa-expand"></i></button></Link> */}
                            <Link to="/mail" ><button onClick={unReadMail} title="pin as unread"><i className={`fa-regular fa-envelope`}></i></button></Link>
                            <Link to={`/mail/${params.folderName}`}  ><button title="Exit"><i className="fa-solid fa-arrow-right"></i></button></Link>
                        </section>

                    </section>
                </main>
            </div>
        </section>
    )

}