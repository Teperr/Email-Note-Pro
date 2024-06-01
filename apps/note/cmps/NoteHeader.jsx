
const { useState, useEffect, useRef } = React

export function NoteHeader({ ClickBurgerNav }) {
    const [isOpen, setIsOpen] = useState(true)

    const cls = useRef('')
    
    cls.current = isOpen ? 'none' : 'inline-block'

    return (
        <section className="mail-header">
            <button onClick={() => {
                setIsOpen(prevOpen => !prevOpen)
                ClickBurgerNav(cls.current)
            }}>

                <i className="fa-solid fa-book"></i></button>

            <h2> Note Keep <i className="fa-solid fa-envelope"></i></h2>

            <form >
                <input type="text" placeholder="search..." />
                <button><i className="fa-brands fa-searchengin"></i></button>
            </form>

        </section>
    )
}