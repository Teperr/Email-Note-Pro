const { useState } = React

export function Accordion() {

    const [isOpen, setIsOpen] = useState('')

    const openClass = isOpen ? 'open' : ''


    function handleChange({ target }) {
        const { name, type } = target
        console.log('target.name:', name)
        console.log('target.type:', type)


        // setFilterByToEdit(prevFilter => ({ ...prevFilter, [name]: type === 'number' ? +target.value : target.value }))
    }


    function onClickOutOfAccordion(ev) {
        // console.log('ev:', ev)
        // console.log('ev.target:', ev.target)

        if (ev.target.name === 'title') setIsOpen('open')
        // else if (!ev.target.name) setIsOpen('')

    }

    function onCloseAccordion(){
        console.log('hi:')
        setIsOpen('')
    }

    return (
        <section className={`accordion ${isOpen}`} onClick={onClickOutOfAccordion} >
            

            <section className="title-container">

                <input
                    onChange={handleChange}
                    // value={filterByToEdit.title}
                    type="text"
                    name='title'
                    placeholder='Title/New Note...'
                />

                <div className="buttons-continer-accordion">
                    <span className="todo-list"><i class="fa-regular fa-square-check"></i></span>
                    <span className="add-photo-to-note"><i class="fa-regular fa-image"></i></span>
                </div>

                {/* <span className="arrow">⌄</span> */}
            </section>

            <section className="content" onBlur={onCloseAccordion}>

                {/* {children} */}

                <textarea name="textarea" rows="4" cols="50" onChange={handleChange} placeholder="New Note..." autoFocus></textarea>


            </section>

        </section>
    )
}