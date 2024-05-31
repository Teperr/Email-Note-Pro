

const { useParams, useNavigate } = ReactRouter

const { useState, useEffect, useRef } = React
import { utilService } from "../../../services/util.service.js"
import { mailService } from "../services/mail.service.js"


export function EmailCompose({isShow}){
    const Sohwform=useRef(isShow)
    const[close,setClose]=useState('')
    const [mail, setMail] = useState(mailService.getSentEmptyMail())
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

     function CloseNewMailForm(){
        console.log('close new mail');
        setClose('none')
     }
    

return(

    <form  onSubmit={onSave} className={`mail-data  ${close} `}>
        <nav className="header-new-mail compose-header">
            <h3>New mail </h3>
        <button onClick={CloseNewMailForm}  type="button">X</button>
        </nav>
        <label htmlFor="to">to:</label>
       <input  onChange={handleChange} type="text" id="to" name="to" />
       <label htmlFor="subject">subject:</label>
       <input  onChange={handleChange} type="text"  id="subject" name="subject" />
       {/* <textarea  onChange={handleChange} name="body" id="body" cols="30" rows="4">body:</textarea> */}
       <button >Send</button>
    </form>
   
)
}