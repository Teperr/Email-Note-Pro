const { useState, useEffect, useRef } = React

import { NoteTxt } from '../cmps/NoteTxt.jsx'
import { NoteImg } from '../cmps/NoteImg.jsx'
import { NoteBgColor } from '../cmps/NoteBgColor.jsx'
import { noteService } from '../services/note.service.js'




export function NotePreview({ note, onRemove, imgfilesToNotePreview }) {
    const [newNote, setNewNote] = useState(note)

    const [bgColor, setBgColor] = useState('')
    const [previews, setPreviews] = useState(imgfilesToNotePreview); // התמונה שנציג למשתמש 

    const color = useRef('')


    useEffect(() => {
        if (!imgfilesToNotePreview) return;
        console.log('files:', imgfilesToNotePreview)

        // יצירת URL לתמונה המועלת
        const previewUrls = Array.from(imgfilesToNotePreview).map(file => URL.createObjectURL(file));
        setPreviews(previewUrls);

        // שחרור זיכרון שנשמר עבור ה-URL הקודם (אם יש)
        return () => {
            previews.forEach(url => URL.revokeObjectURL(url))
        };
    }, [imgfilesToNotePreview])

    useEffect(() => {
        noteService.get(note.id).then(note => { setBgColor(note.style.backgroundColor) })
    }, [])

    if (!note || !note.info) {
        return <div>Loading...</div>
    }
    const [type, setType] = useState('photo1');
    const [hover, setHover] = useState('none');

    function showNav() {
        setHover('show');
    }

    function unShowNav() {
        setHover('none');
    }

    function onBgColor(noteId, bgColor) {
        noteService.bgColorNote(noteId, bgColor)
            .then(setBgColor(bgColor))
    }


    function handleChangeImage() {
        setNewNote(prevNote => ({
            ...prevNote,
            imagesFiles: previews
        }))
    }




    return (
        <article className="note-article" onMouseOver={showNav} onMouseOut={unShowNav} style={{ backgroundColor: `${bgColor}` }}>
            {type === 'photo' && <NoteImg />}
            <NoteTxt title={note.info.title} txt={note.info.txt} />

            <section className={`buttons-list ${hover}`}>

                <section><span><button className="pin-note-icon"><i className="fa-solid fa-thumbtack"></i></button></span></section>

                < NoteBgColor note={note} onBgColor={onBgColor} />

                <section> <span><button className="background-add-image-icon"><i className="fa-regular fa-image"></i></button></span></section>
                <section><span><button className="background-add-Archive-icon"><i className="fa-solid fa-bell"></i></button></span></section>
                <section><span><button className="remove-note-icon" onClick={() => onRemove(note.id)}><i className="fa-regular fa-trash-can"></i></button></span></section>
            </section>

            {previews && previews.map((preview, index) => (
                <img key={index} src={preview} alt="Uploaded preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
            ))}
        </article>
    );
}