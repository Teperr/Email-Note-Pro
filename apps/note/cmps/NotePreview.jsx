const { useState } = React
import { NoteTxt } from '../cmps/NoteTxt.jsx'
import { NoteImg } from '../cmps/NoteImg.jsx'


export function NotePreview({ note }) {
    console.log('note NotePreview:', note)

    const [type, setType] = useState('photo1')

    const [isOpen, setIsOpen] = useState(false)
    const openClass = isOpen ? '' : '' //display-block

    return <article className="note-article" onMouseOver={() => setIsOpen(prevIsOpen => !prevIsOpen)}>
        
        {type === 'photo' && <NoteImg />}
        <NoteTxt title={note.info.title} txt={note.info.txt}/>




        {/* //buttons-list */}
        <section className={`buttons-list ${openClass}`}>
            <span><button className="pin-note-icon"><i class="fa-solid fa-thumbtack"></i></button></span>
            <span><button className="background-color-icon"><i class="fa-solid fa-palette"></i></button></span>
            <span><button className="background-add-image-icon"><i class="fa-regular fa-image"></i></button></span>
            <span><button className="background-add-Archive-icon"><i class="fa-solid fa-bell"></i></button></span>
            <span><button className="remove-note-icon"><i class="fa-regular fa-trash-can"></i></button></span>
        </section>


        {/* <p>{notes.maxSpeed} km/h</p> */}
        {/* <img src={`../assets/img/${car.vendor}.png`} alt={car.vendor + ' image'} /> */}
    </article>

}
