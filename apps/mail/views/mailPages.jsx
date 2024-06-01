const { Link } = ReactRouterDOM
const { useState, useEffect,useRef } = React

import { MailPreview } from "../cmps/mailPreview.jsx"


export function MailPages({ mails, onRemove,updateUnRead  }) {
    
  
    function removeMail(mailId){
        onRemove(mailId)
    }
function unReadUpdateNum(){
    updateUnRead()
}
   
    return (
        <section className="mail-list">
            <ul className="mail-preview">
                {mails.map((mail,idx) =>
                    <li key={mail.id} >
                        <Link to={`/mail/${mail.id}`} ><MailPreview updateUnreadAfterDelete={unReadUpdateNum} remove={removeMail}  isTrash={mail.isTrash} isRead={mail.isRead} mail={mail} renderGoldStar={mail.isStar}  /></Link>
                    </li>)}
            </ul>
        </section>
    )
}