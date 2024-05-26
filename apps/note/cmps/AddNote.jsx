const { useState, useEffect, useRef } = React

import { noteService } from '../../note/services/note.service.js'
const { useNavigate } = ReactRouter

export function AddNote({ onSave }) {
    const [note, setNote] = useState(noteService.getEmptyNote())
    console.log('note:', note)

    const [isOpen, setIsOpen] = useState('')
    const formRef = useRef(null)

    const openClass = isOpen ? 'open' : ''


    const navigate = useNavigate()

    // useEffect(() => {
    //     noteService.get
    //     setNote()
    // }, [])



    function handleChangeTitle({ target }) {
        const { type, name: prop } = target
        let { value } = target

        setNote(prevNote => ({
            ...prevNote, info: {
                ...prevNote.info, [prop]: value
            }
        }))
    }

    function onOpen(ev) {
        if (ev.target.name === 'title') setIsOpen('open')
    }

    function onClose(ev) {
        ev.preventDefault()
        // Check if the new focus is outside the form
        if (formRef.current && !formRef.current.contains(ev.relatedTarget)) {
            setIsOpen('')
            onSave(note)

            formRef.current.reset()
            setNote(noteService.getEmptyNote())

            console.log('ready to send to note index:', note)

        }
    }

    return (
        <form
            className={`accordion ${openClass}`}
            ref={formRef}
            onFocus={() => setIsOpen('open')}
            onBlur={onClose}
        >
            <section className="title-container">
                <input
                    onChange={handleChangeTitle}
                    onClick={onOpen}
                    value={note.info.title}
                    type="text"
                    name="title"
                    placeholder="Title/New Note..."
                />

                <div className="buttons-continer-accordion">

                    <span className="todo-list">
                        <i className="fa-regular fa-square-check"></i>
                    </span>

                    <span className="add-photo-to-note">
                        <i className="fa-regular fa-image"></i>
                    </span>
                </div>

            </section>

            <section className="content">

                <textarea
                    value={note.info.txt}
                    name="txt"
                    rows="4"
                    cols="50"
                    onChange={handleChangeTitle}
                    placeholder="New Note..."
                    autoFocus
                ></textarea>
            </section>

        </form>
    )
}
