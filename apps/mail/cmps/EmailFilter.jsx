import { MailHeader } from "./mailAppHeader.jsx";
    const { useState, useEffect } = React

    export function EmailFilter({filterBy, onFilter}) {
    const [filterMails, setFilterMailsBy] = useState(filterBy)
    console.log(filterBy);

    useEffect(()=>{
onFilter(filterMails)
    },[filterMails])
    
    function onfilterByChange({ target }) {
        const { name, type } = target
        const value = (type === 'number') ? +target.value : target.value
        setFilterMailsBy(prevFilterMails => ({ ...prevFilterMails, [name]: value }))
    }
    return (

        <section className="mail-header">
            <MailHeader/>
        <form >
        <input  onChange={onfilterByChange} value={filterMails.body} type="text" placeholder="search..." name="body" id="body" />
         <button><i className="fa-brands fa-searchengin"></i></button>
        </form>
        </section>
    )

}
