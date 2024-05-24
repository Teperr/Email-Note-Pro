export function MailHeader() {
    return (
        <section className="mail-header">
            <button><i className="fa-solid fa-bars"></i></button>

            <h2> Gmail <i className="fa-solid fa-envelope"></i></h2>
            
            <form >
            <input type="text" placeholder="search..." />
             <button><i className="fa-brands fa-searchengin"></i></button>
            </form>

        </section>
    )
}