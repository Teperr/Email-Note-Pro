const { Link } = ReactRouterDOM
const { useState, useEffect,useRef } = React

const { useParams, useNavigate } = ReactRouter

import { utilService } from "../../../services/util.service.js"
import { mailService } from "../services/mail.service.js"
import { EmailCompose } from "./EmailCompose.jsx"
export function MenuOptions({unReadCounter}) {
    
   
    
    const [mail, setMail] = useState(mailService.getSentEmptyMail())
    const [show,setShow]=useState('none')
    
    const params = useParams()
    const navigate = useNavigate()

    function onSave(ev) {
        ev.preventDefault()
        console.log('send is clicked');
        mailService.save(mail)
            .catch(() => {
                alert('Couldnt save')
                navigate('/mail')
            })
            console.log('send?');
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

    
    

    function openNewMailForm(){
        setShow('')
    }

    function CloseMailForm(){
       setShow('none')
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

            <Link to="/mail/trash">
                <span>
                <i className="fa-regular fa-trash-can"></i>
                    <button>Trash</button>
                </span>
            </Link>

            <Link to="/mail/drafts">
                <span>
                <i className="fa-regular fa-note-sticky"></i>
                    <button>Drafts</button>
                </span>
            </Link>
{/* { show &&<EmailCompose  isShow={show} />} */}
<form  onSubmit={onSave} className={`mail-data  ${show} `}>
        <nav className="header-new-mail compose-header">
            <h3>New mail </h3>
        <button onClick={CloseMailForm}  type="button">X</button>
        </nav>
        <label htmlFor="to">to:</label>
       <input  onChange={handleChange} type="text" id="to" name="to" />
       <label htmlFor="subject">subject:</label>
       <input  onChange={handleChange} type="text"  id="subject" name="subject" />
       {/* <textarea  onChange={handleChange} name="body" id="body" cols="30" rows="4">body:</textarea> */}
       <button >Send</button>
    </form>
        </div>
    </section>
}
