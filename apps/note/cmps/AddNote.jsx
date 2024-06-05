const { useState, useEffect, useRef } = React


import { noteService } from '../../note/services/note.service.js'
import { mailService } from '../../mail/services/mail.service.js'
const { useNavigate, useParams } = ReactRouter

export function AddNote({ onSave }) {
    const [note, setNote] = useState(noteService.getEmptyNote())
    console.log('note:', note)

    const params = useParams()

    const [isOpen, setIsOpen] = useState('')
    const formRef = useRef(null)
    
    // const infoRef = useRef({})
    
    const openClass = isOpen ? 'open' : ''
    
    const navigate = useNavigate()
    

   
    
    const [isFromMail, setIsFromMail] = useState(false)
    useEffect(() => {
        
        if (params) makeNoteFromMail()
            
        
    }, [note])

    function makeNoteFromMail() {
        console.log('as note');
        console.log('params.mailId:', params.mailId)
        mailService.get(params.mailId)
            .then(mail => {
                setIsFromMail(true)
                const infomation = { title: mail.subject, txt: mail.body }
                // infoRef.current = infomation
                setNote(prevNote => ({
                    ...prevNote, ...prevNote.info, info: infomation
                    
                }))
                
                onSave(note)

                console.log('note1111111111111111111111111:', note)


            })

    }








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


            console.log('note:', note)
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
