

export function NoteTxt({title, txt}) {
    return <React.Fragment>
        <h3 className="note-title">{title}</h3>
        <p className="note-text-area">{txt}</p>

    </React.Fragment>
}