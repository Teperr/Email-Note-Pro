import { MailHeader } from "./mailAppHeader.jsx";
    const { useState, useEffect } = React

    export function EmailFilter({filterBy, onFilter}) {
    const [filterBooks, setFilterBooksBy] = useState(filterBy)
    console.log(filterBy);

    useEffect(()=>{
onFilter(filterBooks)
    },[filterBooks])
    
    function onfilterByChange({ target }) {
        const { name, type } = target
        const value = (type === 'number') ? +target.value : target.value
        setFilterBooksBy(prevFilterBooks => ({ ...prevFilterBooks, [name]: value }))
    }
    return (
        // <section className="filter-books">
        //     {/* <h3>filter books</h3>
        //     <input onChange={onfilterByChange} value={filterBooks.title} name="title" type="text" placeholder="search book..." />
        //     <input onChange={onfilterByChange} value={filterBooks.price} name="price" type="number"  /> */}
        // </section>
        <section className="mail-header">
            <MailHeader/>
        <form >
        <input  onChange={onfilterByChange} value={filterBooks.body} type="text" placeholder="search..." name="body" id="body" />
         <button><i className="fa-brands fa-searchengin"></i></button>
        </form>
        </section>
    )

}
