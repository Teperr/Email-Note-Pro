import { utilService } from "../../../services/util.service.js";


// import React from "react"
const { useState, useEffect, useRef } = React

export function NoteBgColor({ note, onBgColor }) {


    const [hover, setHover] = useState('none');
    

    function showNav() {
        setHover('show');
    }

    function unShowNav(ev) {
        // ev.preventDefault()
        // ev.stopPropagation()
        setHover('none');
    }


    function onClickBgColor(ev) {
        ev.preventDefault()
        ev.stopPropagation()
        const { target } = ev
        console.log('target:', target.style.backgroundColor
        )

    }


    return (
        <React.Fragment>
            <section className="btn-bg-color" onClick={showNav}>
                <span>
                    <button className="background-color-icon" onClick={() => {
                        onBgColor(note.id)
                        
                    }}>
                        <i className="fa-solid fa-palette"></i>
                    </button>
                </span>

                <section className={`background-color-palette-container ${hover}`} onBlur={unShowNav} >
                    <ul>
                        <li onClick={unShowNav}><button onClick={onClickBgColor} className="color color1" style={{ backgroundColor: utilService.getRandomColor() }}></button></li>
                        <li onClick={unShowNav}><button onClick={onClickBgColor} className="color color2" style={{ backgroundColor: utilService.getRandomColor() }}></button></li>
                        <li onClick={unShowNav}><button onClick={onClickBgColor} className="color color3" style={{ backgroundColor: utilService.getRandomColor() }}></button></li>
                        <li onClick={unShowNav}><button onClick={onClickBgColor} className="color color4" style={{ backgroundColor: utilService.getRandomColor() }}></button></li>
                        <li onClick={unShowNav}><button onClick={onClickBgColor} className="color color5" style={{ backgroundColor: utilService.getRandomColor() }}></button></li>
                        <li onClick={unShowNav}><button onClick={onClickBgColor} className="color color6" style={{ backgroundColor: utilService.getRandomColor() }}></button></li>
                        <li onClick={unShowNav}><button onClick={onClickBgColor} className="color color7" style={{ backgroundColor: utilService.getRandomColor() }}></button></li>
                        <li onClick={unShowNav}><button onClick={onClickBgColor} className="color color8" style={{ backgroundColor: utilService.getRandomColor() }}></button></li>
                        <li onClick={unShowNav}><button onClick={onClickBgColor} className="color color9" style={{ backgroundColor: utilService.getRandomColor() }}></button></li>
                        <li onClick={unShowNav}><button onClick={onClickBgColor} className="color color10" style={{ backgroundColor: utilService.getRandomColor() }}></button></li>
                    </ul>
                </section>
            </section>
        </React.Fragment>
    );
}

