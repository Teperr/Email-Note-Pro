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
                    placeholder='Insert book name'
                />
                

                <span className="arrow">⌄</span>

            </section>

            <section className="content">

                {/* {children} */}

                <textarea name="textarea" rows="4" cols="50" onChange={handleChange}>
                    At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                </textarea>

            </section>

        </section>
    )
}