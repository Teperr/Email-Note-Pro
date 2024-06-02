const { useState, useEffect, useRef } = React

import { NoteTxt } from '../cmps/NoteTxt.jsx'
import { NoteImg } from '../cmps/NoteImg.jsx'
import { NoteBgColor } from '../cmps/NoteBgColor.jsx'
import { noteService } from '../services/note.service.js'




export function NotePreview({ note, onRemove }) {

    const color = useRef('')
    const [bgColor, setBgColor] = useState('')

    console.log('bgColor:', bgColor)
    console.log('color:', color)

    useEffect(() => {

        noteService.get(note.id).then(note => {setBgColor(note.style.backgroundColor) })

        console.log('bgColor:', bgColor)

    }, [])




    // console.log('NotePreview received onRemove:', onRemove);
    // const [isLoading, setIsLoading] = useState(true)
    
    
    // const [pinNote, setPinNote] = useState([]);


    // useEffect(() => {
    //     if (note && note.info) {
    //         setIsLoading(false);
    //     }
    // }, [note])

    if (!note || !note.info) {
        return <div>Loading...</div>
    }

    // console.log('note:', note.id)
    // console.log('note.info.title:', note.info.txt)

    const [type, setType] = useState('photo1');
    const [hover, setHover] = useState('none');

    function showNav() {
        setHover('show');
    }

    function unShowNav() {
        setHover('none');
    }

    function onBgColor(noteId, bgColor) {
        console.log('noteId:', noteId)
        console.log('bgColor:', bgColor)

        noteService.bgColorNote(noteId, bgColor)
            .then(setBgColor(bgColor))


        // noteService.save(newNote)
        console.log('note:', note)


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
        </article>
    );
}