const { Link } = ReactRouterDOM

export function MenuOptions() {
    return <section className="Menu-options">

        <div className="list-container">

            <Link to="/mail"><span>
            <i className="fa-solid fa-inbox"></i>
                <button>Inbox</button></span>
            </Link>

            <Link to="/mail/starred">
                <span>
           <i className="fa-regular fa-star"></i>
                    <button>Starred</button>
                </span>
            </Link>

            <Link to="/mail/sent">
                <span>
                <i className="fa-regular fa-paper-plane"></i>
                    <button>Sent</button>
                </span>
            </Link>

            <Link to="/mail/trash">
                <span>
                <i className="fa-regular fa-trash-can"></i>
                    <button>Trash</button>
                </span>
            </Link>

            <Link to="/mail/drafts">
                <span>
                <i className="fa-regular fa-note-sticky"></i>
                    <button>Drafts</button>
                </span>
            </Link>
            
        </div>
    </section>
}
