const { Link } = ReactRouterDOM
const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter
import { mailService } from "../services/mail.service.js"
import { MailHeader } from "../cmps/mailAppHeader.jsx"
import { MenuOptions } from "../cmps/menuOptionsMail.jsx"
import { MailPages } from "./mailPages.jsx"
import { EmailCompose } from "../cmps/EmailCompose.jsx"
import { EmailFilter } from "../cmps/EmailFilter.jsx"

export function TrashPage(){
    const [filterBy, setFilterBy] = useState({ body: '' })
    const [trashMails,setTrashMails]=useState([])

    useEffect(() => {
        mailService.query(filterBy)
            .then(mails =>{
            const strashs=  mails.filter(mail=>(mail.isTrash)) 
                setTrashMails(strashs)
                console.log('strashs:', strashs)
              
            })
  
}, [filterBy])

    function OnsetFilterBy(newFilter) {
        setFilterBy(newFilter)
    }
    return (
        <section>
            <div className="main-container">

            <EmailFilter filterBy={filterBy} onFilter={OnsetFilterBy}/>

                <main className="main-content">
                    <MenuOptions />
                    <MailPages mails={trashMails} />
                </main>
            </div>
        </section>
    
        )
}