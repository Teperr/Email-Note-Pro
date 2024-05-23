

const { Link } = ReactRouterDOM

export function MenuOptions() {
    return <section className="Menu-options">
        <div className="list-container">
            <Link to="/note"><span><i className="fa-regular fa-lightbulb"></i><button>Note</button></span></Link>
            <Link to="/note/RemindersPage"><span><i className="fa-regular fa-bell"></i><button>Reminders</button></span></Link>
            <Link to="/note/label"><span><i className="fa-solid fa-tag"></i><button>Labels</button></span></Link>
        </div>
    </section>
}

{/* <div className="list-container">
        <Link to="/note"><span><i className="fa-regular fa-lightbulb"></i><button>Note</button></span></Link>
            <Link to="/note"><span><i className="fa-regular fa-lightbulb"></i><button>Note</button></span></Link>
            <span onClick={() => setRoute('note')}><i className="fa-regular fa-lightbulb"></i><button>Note</button></span>
            <span onClick={() => setRoute('RemindersPage')}><i className="fa-regular fa-lightbulb"></i><button>Note</button></span>
            <span><i className="fa-regular fa-bell"></i><button>Reminders</button></span>
            <span><i className="fa-solid fa-tag"></i><button>Editing Labels</button></span>
            <span><i className="fa-regular fa-folder-open"></i><button>Archives</button></span>
            <span><i className="fa-regular fa-trash-can"></i><button>Garbage</button></span>

        </div> */}