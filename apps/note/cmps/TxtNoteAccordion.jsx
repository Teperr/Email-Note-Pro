const { useState } = React

export function Accordion() {

    const [isOpen, setIsOpen] = useState(false)

    const openClass = isOpen ? 'open' : ''


    function handleChange({ target }) {
        const { name, type } = target
        console.log('target.name:', name)
        console.log('target.type:', type)


        // setFilterByToEdit(prevFilter => ({ ...prevFilter, [name]: type === 'number' ? +target.value : target.value }))
    }

    return (
        <section className={`accordion ${openClass}`}>
            <section onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)} className="title-container">

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

            <section className="content">

                {/* {children} */}

                <textarea name="textarea" rows="4" cols="50" onChange={handleChange} placeholder="New Note..."></textarea>


            </section>

        </section>
    )
}