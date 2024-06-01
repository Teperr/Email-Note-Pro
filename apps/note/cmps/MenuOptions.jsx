
const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function MenuOptions({ hide }) {
    console.log('hide:', hide)
    // const [hideToEdit, setHideToEdit] = useState(hide) // hide-nav
    // console.log('hideToEdit:', hideToEdit)

    

    return <section className="Menu-options" >
        <div className="list-container">
            <Link to="/note"><span>
                <i className="fa-regular fa-lightbulb"></i>
                <button style={{ display: hide }}>Note</button></span>
            </Link>
            <Link to="/note/RemindersPage">
                <span>
                    <i className="fa-regular fa-bell"></i>
                    <button style={{ display: hide }}>Reminders</button>
                </span>
            </Link>
            <Link to="/note/label">
                <span>
                    <i className="fa-solid fa-tag"></i>
                    <button style={{ display: hide }}>Labels</button>
                </span>
            </Link>
            <Link to="/note/archive">
                <span>
                    <i className="fa-regular fa-folder-open"></i>
                    <button style={{ display: hide }}>Archives</button>
                </span>
            </Link>
            <Link to="/note/garbage">
                <span>
                    <i className="fa-regular fa-trash-can"></i>
                    <button style={{ display: hide }}>Bin</button>
                </span>
            </Link>
        </div>
    </section>
}
