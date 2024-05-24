const { useState, useEffect } = React
import { utilService } from "../../../services/util.service.js"

export function MailPreview({ mail }) {
    console.log(mail.sentAt.month);
    // const [date,setDate]=useState({})


    // useEffect(()=>{
    // var  numOfdayDate=utilService.getDayName(mail.sentAt)
    // var  numOfdayDate=(mail.sentAt.getMonth()+1)
    // var numOfdayDate=5
    // const renderNumOfdate=utilService.padNum(numOfdayDate)

    // const nameofMonth='Aug'

    //     setDate({
    //         num:renderNumOfdate,
    //         name:nameofMonth,
    //     })

    // },[])

    return (
        <section className="mail">
            <span className="click-star">
                <button><i className="fa-regular fa-star"></i></button>
            </span>

            <p className="mail-name">
                {mail.from}
            </p>
            
            <p className="mail-subject">
                {mail.subject}
                </p>

            <span className="mail-date">
                {mail.sentAt.month} {utilService.padNum(mail.sentAt.day)}
            </span>

        </section>
    )
}