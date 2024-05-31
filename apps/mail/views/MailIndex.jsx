const { Link } = ReactRouterDOM
const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter
import { mailService } from "../services/mail.service.js"
import { MailHeader } from "../cmps/mailAppHeader.jsx"
import { MenuOptions } from "../cmps/menuOptionsMail.jsx"
import { MailPages } from "./mailPages.jsx"
import { EmailCompose } from "../cmps/EmailCompose.jsx"
import { EmailFilter } from "../cmps/EmailFilter.jsx"

export function MailIndex() {
    const params = useParams()
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(true)
    const [mails, setMails] = useState([])
    const [unReadCounter, setUnReadCounter] = useState(0)
    const [filterBy, setFilterBy] = useState({ body: '' })


    useEffect(() => {
            mailService.query(filterBy)
                .then(mails => { const inboxMails=mails.filter((mail)=>!mail.isSent&& !mail.isTrash)
                    setMails(inboxMails)
                    console.log('inboxMails:',inboxMails )
                    var filterUnreadsMails = inboxMails.filter(mail => (!mail.isRead))
                    setUnReadCounter(filterUnreadsMails.length)
                    console.log('filterUnreadsMails:', filterUnreadsMails);
                })
      
    }, [filterBy])

    function OnsetFilterBy(newFilter) {
        setFilterBy(newFilter)
    }

    function removeMail() {
        console.log('remove the mail');

        setIsLoading(true)
        mailService.remove(mailId)
            .then(() => {
                // utilService.animateCSS('fadeAway')
                //     .then(() => setMails(prevMails => prevMails.filter(mail => mail.id !== mailId)))
                setMails(prevMails => prevMails.filter(mail => mail.id !== mailId))
                showSuccessMsg(`Mail (${mailId}) removed successfully!`)
            })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('There was a problem')
            })
            .finally(() => setIsLoading(false))

    }
    // if (isLoading) return <h3>Loading...</h3>
    return (
        <section>
            <div className="main-container">
                <EmailFilter filterBy={filterBy} onFilter={OnsetFilterBy} />

                <main className="main-content">
                    <MenuOptions unReadCounter={unReadCounter} />
                    <MailPages mails={mails} onRemove={removeMail} />
                </main>
                {/* <EmailCompose /> */}
            </div>
        </section>

    )
}

