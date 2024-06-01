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
        // console.log('target:', target.style.backgroundColor)
        onBgColor(note.id, target.style.backgroundColor)


    }


    return (
        <React.Fragment>
            <section className="btn-bg-color" onClick={showNav}>
                <span>
                    <button className="background-color-icon" onClick={() => {
                        // onBgColor(note.id)

                    }}>
                        <i className="fa-solid fa-palette"></i>
                    </button>
                </span>

                <section className={`background-color-palette-container ${hover}`} onClick={showNav} onBlur={unShowNav} >
                    <nav className="nav-colors-button">
                        <ul>
                            <li onClick={unShowNav}><button onClick={(ev) => {
                                onClickBgColor(ev)
                                unShowNav(ev)
                            }} className="color color0" style={{ backgroundColor: '#efeff1' }}>
                            </button>
                            </li>

                            <li><button onClick={(ev) => {
                                onClickBgColor(ev)
                                unShowNav(ev)
                            }} className="color color1" style={{ backgroundColor: '#e9e3d4' }}>
                            </button>
                            </li>

                            <li><button onClick={(ev) => {
                                onClickBgColor(ev)
                                unShowNav(ev)
                            }} className="color color2" style={{ backgroundColor: '#f6e2dd' }}>
                            </button>
                            </li>

                            <li><button onClick={(ev) => {
                                onClickBgColor(ev)
                                unShowNav(ev)
                            }} className="color color3" style={{ backgroundColor: '#d3bfdb' }}>
                            </button>
                            </li>

                            <li><button onClick={(ev) => {
                                onClickBgColor(ev)
                                unShowNav(ev)
                            }} className="color color4" style={{ backgroundColor: '#aeccdc' }}>
                            </button>
                            </li>

                            <li><button onClick={(ev) => {
                                onClickBgColor(ev)
                                unShowNav(ev)
                            }} className="color color5" style={{ backgroundColor: '#d4e4ed' }}>
                            </button>
                            </li>

                            <li><button onClick={(ev) => {
                                onClickBgColor(ev)
                                unShowNav(ev)
                            }} className="color color6" style={{ backgroundColor: '#b4ddd3' }}>
                            </button>
                            </li>

                            <li><button onClick={(ev) => {
                                onClickBgColor(ev)
                                unShowNav(ev)
                            }} className="color color7" style={{ backgroundColor: '#e2f6d3' }}>
                            </button>
                            </li>

                            <li><button onClick={(ev) => {
                                onClickBgColor(ev)
                                unShowNav(ev)
                            }} className="color color8" style={{ backgroundColor: '#fff8b8' }}>
                            </button>
                            </li>

                            <li><button onClick={(ev) => {
                                onClickBgColor(ev)
                                unShowNav(ev)
                            }} className="color color9" style={{ backgroundColor: '#f39f76' }}>
                            </button>
                            </li>

                            <li><button onClick={(ev) => {
                                onClickBgColor(ev)
                                unShowNav(ev)
                            }} className="color color10" style={{ backgroundColor: '#faafa8' }}>
                            </button>
                            </li>

                        </ul>
                    </nav>
                </section>
            </section>
        </React.Fragment>
    );
}

