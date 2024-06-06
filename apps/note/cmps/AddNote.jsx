const { useState, useEffect, useRef } = React
const { useNavigate, useParams } = ReactRouter


import { noteService } from '../../note/services/note.service.js'
import { mailService } from '../../mail/services/mail.service.js'


export function AddNote({ onSave, imageFiles }) {
    const [note, setNote] = useState(noteService.getEmptyNote())
    const [isOpen, setIsOpen] = useState('')
    const formRef = useRef(null)
    const navigate = useNavigate()
    const params = useParams()

    const openClass = isOpen ? 'open' : ''

    const [files, setFiles] = useState('') // הקובץ שהמשתמש בחר
    const [previews, setPreviews] = useState(''); // התמונה שנציג למשתמש 



    const [isFromMail, setIsFromMail] = useState(false);
    useEffect(() => {
        if (params) makeNoteFromMail()
    }, [note]);


    function makeNoteFromMail() {
        mailService.get(params.mailId)
            .then(mail => {
                setIsFromMail(true)
                const information = { title: mail.subject, txt: mail.body };
                setNote(prevNote => ({
                    ...prevNote, info: information
                }));

                onSave(note)
            });
    }

    function handleChangeTitle({ target }) {
        const { name: prop } = target;
        let { value } = target;

        setNote(prevNote => ({
            ...prevNote, info: {
                ...prevNote.info, [prop]: value
            }
        }))
    }

    function onClose(ev) {
        ev.preventDefault();
        if (formRef.current && !formRef.current.contains(ev.relatedTarget)) {
            setIsOpen('');
            onSave(note);
            formRef.current.reset();
            setNote(noteService.getEmptyNote())

        }

    }

    function handleChangeImage({ target }){
          const { name: prop } = target;
        let { value } = target;

        setNote(prevNote => ({
            ...prevNote, info: {
                ...prevNote.info, [prop]: value
            }
        }))
    
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
                        <label htmlFor="file-input">
                            <i className="fa-regular fa-image"></i>
                        </label>
                        <input
                            id="file-input"
                            type='file'
                            accept='image/jpg, image/jpeg, image/png'
                            multiple
                            onChange={ev => {
                                if (ev.target.files && ev.target.files.length > 0) {
                                    handleChangeImage()
                                    setFiles(ev.target.files)
                                    imageFiles(ev.target.files)
                                }
                            }}
                        />
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
