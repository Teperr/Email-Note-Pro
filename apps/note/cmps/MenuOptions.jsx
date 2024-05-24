
const { Link } = ReactRouterDOM

export function MenuOptions() {
    return <section className="Menu-options">
        <div className="list-container">
            <Link to="/note"><span>
                <i className="fa-regular fa-lightbulb"></i>
                <button>Note</button></span>
            </Link>
            <Link to="/note/RemindersPage">
                <span>
                    <i className="fa-regular fa-bell"></i>
                    <button>Reminders</button>
                </span>
            </Link>
            <Link to="/note/label">
                <span>
                    <i className="fa-solid fa-tag"></i>
                    <button>Labels</button>
                </span>
            </Link>
            <Link to="/note/archive">
                <span>
                    <i className="fa-regular fa-folder-open"></i>
                    <button>Archives</button>
                </span>
            </Link>
            <Link to="/note/garbage">
                <span>
                    <i className="fa-regular fa-trash-can"></i>
                    <button>Garbage</button>
                </span>
            </Link>
        </div>
    </section>
}