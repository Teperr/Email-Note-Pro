const { useState } = React

import { NoteTxt } from '../cmps/NoteTxt.jsx'
import { NoteImg } from '../cmps/NoteImg.jsx'

export function NotePreview({ note, onRemove }) {
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
                <span><button className="pin-note-icon"><i className="fa-solid fa-thumbtack"></i></button></span>
                <span><button className="background-color-icon"><i className="fa-solid fa-palette"></i></button></span>
                <span><button className="background-add-image-icon"><i className="fa-regular fa-image"></i></button></span>
                <span><button className="background-add-Archive-icon"><i className="fa-solid fa-bell"></i></button></span>
                <span><button className="remove-note-icon" onClick={() => onRemove(note.id)}><i className="fa-regular fa-trash-can"></i></button></span>
            </section>
        </article>
    );
}