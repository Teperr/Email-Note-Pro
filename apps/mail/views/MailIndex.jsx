import { MailHeader } from "../cmps/mailAppHeader.jsx"
import { MenuOptions } from "../cmps/menuOptionsMail.jsx"
import { MailPages } from "./mailPages.jsx"

export function MailIndex() {
    return (
    <section>
        <div className="main-container">
        <MailHeader/>

            <main className="main-content">
                <MenuOptions />
                <MailPages/>
            </main>
        </div>
    </section>

    )
}

