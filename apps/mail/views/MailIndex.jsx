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

 function updateNumUnreadByRemoveMail(){
    setUnReadCounter(prevUnread=>prevUnread-1)
 }
    return (
        <section>
            <div className="main-container">
                <EmailFilter filterBy={filterBy} onFilter={OnsetFilterBy} />

                <main className="main-content">
                    <MenuOptions  unReadCounter={unReadCounter} />
                    <MailPages updateUnRead={updateNumUnreadByRemoveMail} mails={mails} folder={'mail'}  />
                </main>
            </div>
        </section>

    )
}

