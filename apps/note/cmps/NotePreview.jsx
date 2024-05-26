const { useState } = React

import { NoteTxt } from '../cmps/NoteTxt.jsx'
import { NoteImg } from '../cmps/NoteImg.jsx'
import { NoteBgColor } from '../cmps/NoteBgColor.jsx'

export function NotePreview({ note, onRemove , onBgColor}) {
    // console.log('NotePreview received onRemove:', onRemove);

    const [type, setType] = useState('photo1');
    const [hover, setHover] = useState('none');

    function showNav() {
        setHover('show');
    }

    function unShowNav() {
        setHover('none');
    }

    return (
        <article className="note-article" onMouseOver={showNav} onMouseOut={unShowNav}>
            {type === 'photo' && <NoteImg />}
            <NoteTxt title={note.info.title} txt={note.info.txt} />

            <section className={`buttons-list ${hover}`}>
                
            <section><span><button className="pin-note-icon"><i className="fa-solid fa-thumbtack"></i></button></span></section>
                
                < NoteBgColor note={note} onBgColor={onBgColor}/>
                
               <section> <span><button className="background-add-image-icon"><i className="fa-regular fa-image"></i></button></span></section>
               <section><span><button className="background-add-Archive-icon"><i className="fa-solid fa-bell"></i></button></span></section>
               <section><span><button className="remove-note-icon" onClick={() => onRemove(note.id)}><i className="fa-regular fa-trash-can"></i></button></span></section>
            </section>
        </article>
    );
}