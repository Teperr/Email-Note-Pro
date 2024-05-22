
const { useState } = React

const { Link } = ReactRouterDOM

// import { NotesPage } from '../views/NotesPage.jsx'
// import { RemindersPage } from '../views/RemindersPage.jsx'

export function MenuOptions() {

    // const [route, setRoute] = useState('note')
    // console.log('route:', route)


    return <section className="Menu-options">

        <div className="list-container">
            <Link to="/note"><span><i className="fa-regular fa-lightbulb"></i><button>Note</button></span></Link>
            <Link to="/note/RemindersPage"><span><i className="fa-regular fa-bell"></i><button>Reminders</button></span></Link>


        </div>

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


        {/* {route === 'note' && <NotesPage />}
        {route === 'RemindersPage' && <RemindersPage />} */}

    </section>
}