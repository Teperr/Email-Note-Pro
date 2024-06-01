const { Link } = ReactRouterDOM
const { useState, useEffect,useRef } = React

import { MailPreview } from "../cmps/mailPreview.jsx"


export function MailPages({ mails,updateUnRead,isTrash,realRemove  }) {
    
  
    function realRemoveMail(mailId){
        realRemove(mailId)
    }
function unReadUpdateNum(){
    updateUnRead()
}
   
    return (
        <section className="mail-list">
            <ul className="mail-preview">
                {mails.map((mail,idx) =>
                    <li key={mail.id} >
                        <Link to={`/mail/${mail.id}`} ><MailPreview outFromStorage={realRemoveMail} isTrashPage={isTrash} updateUnreadAfterDelete={unReadUpdateNum}   isTrash={mail.isTrash} isRead={mail.isRead} mail={mail} renderGoldStar={mail.isStar}  /></Link>
                    </li>)}
            </ul>
        </section>
    )
}