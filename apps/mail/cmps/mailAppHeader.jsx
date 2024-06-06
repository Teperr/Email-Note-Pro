const { Link } = ReactRouterDOM



export function MailHeader() {
    return (
        <section className="header-buttons flex align-center ">

            <button><i className="fa-solid fa-bars"></i></button>

            <Link to="/mail"> <h2> Gmail <i className="fa-solid fa-envelope"></i></h2></Link>

        </section>
    )
}