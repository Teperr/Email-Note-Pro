const { useState, useEffect } = React
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


    if (isLoading) return <h3>Loading...</h3>
    return (
        <section className="mail-deatails-page">
            <div className="main-container">
                <MailHeader />
                <main className="main-content">
                    <MenuOptions />
                    <section className="mail-details">
                        <article className="mail-data">
                            <h3>{mail.subject}</h3>
                            <h5>{mail.from}</h5>
                            <p>{mail.body}</p>
                        </article>
                        {/* <section className="actions">
                    <Link to={`/mail/${mail.prevMailId}`}><button>Prev</button></Link>
                    <Link to={`/mail/${mail.nextMailId}`}><button>Next</button></Link>
                    <Link to="/mail"><button><i className="fa-sharp fa-light fa-arrow-right"></i></button></Link>
                </section> */}

                    </section>
                </main>
            </div>
        </section>
    )

}