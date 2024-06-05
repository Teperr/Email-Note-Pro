const { Link } = ReactRouterDOM
const { useState, useEffect, useRef } = React

const { useParams, useNavigate } = ReactRouter
import { eventBusService, showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

import { utilService } from "../../../services/util.service.js"
import { mailService } from "../services/mail.service.js"
export function MenuOptions({ unReadCounter }) {



    const [mail, setMail] = useState(mailService.getSentEmptyMail())
    const [show, setShow] = useState('none')



    const params = useParams()
    const navigate = useNavigate()

    function onSave(ev) {
        ev.preventDefault()
        console.log('send is clicked');
        mailService.save(mail)
            .then(() => {
                navigate('/mail/sent')
            })
            .catch(() => {
                alert('Couldnt save')
                navigate('/mail')
            })
    }

    function handleChange({ target }) {
        const { type, name: prop } = target
        let { value } = target

        switch (type) {
            case 'range':
            case 'number':
                value = +value
                break;

            case 'checkbox':
                value = target.checked
                break;
        }


        setMail(prevMail => ({ ...prevMail, [prop]: value }))
    }




    function openNewMailForm() {
        setShow('')
    }

    function CloseMailForm() {
        setShow('none')
        setMail(prevMail => {

            prevMail.isDraft = true

            mailService.save(prevMail)
                .then(() => {
                    navigate('/mail/drafts')
                })
                .catch(() => {
                    alert('Couldnt save')
                    navigate('/mail')
                })
        }

        )
    }

    return <section className="Menu-options">

        <div className="list-container">
            <span onClick={openNewMailForm} className="new-mail flex" >
                <i className="fa-sharp fa-solid fa-pen"></i>
                <button >Compose </button>
            </span>

            <Link to="/mail"><span>
                <i className="fa-solid fa-inbox"></i>
                <button >Inbox</button><span className="counter-unRead">{unReadCounter}</span></span>
            </Link>

            <Link to="/mail/starred">
                <span>
                    <i className="fa-regular fa-star"></i>
                    <button>Starred</button>
                </span>
            </Link>

            <Link to="/mail/sent">
                <span>
                    <i className="fa-regular fa-paper-plane"></i>
                    <button>Sent</button>
                </span>
            </Link>

            <Link to={`/mail/trash/${'trash-page'}`}>
                <span>
                    <i className="fa-regular fa-trash-can"></i>
                    <button>Bin</button>
                </span>
            </Link>

            <Link to="/mail/drafts">
                <span>
                    <i className="fa-regular fa-note-sticky"></i>
                    <button>Drafts</button>
                </span>
            </Link>
            <form onSubmit={onSave} className={`mail-data  ${show} `}>
                <nav className="header-new-mail compose-header">
                    <h3>New mail </h3>
                    <button className="close-btn" onClick={(mail) => CloseMailForm(mail)} type="button">X</button>
                </nav>
                <section className="data-new-mail-render">
                    <input onChange={handleChange} type="text" id="to" name="to" placeholder="to:" />
                    <input onChange={handleChange} type="text" id="subject" name="subject" placeholder="subject:" />
                    <textarea onChange={handleChange} name="body" id="body" cols="25" rows="5" ></textarea>
                </section>
                <button className="send" >Send</button>
            </form>
        </div>
    </section>
}
