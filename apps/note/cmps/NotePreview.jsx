export function NotePreview({ note }) {
    console.log('note NotePreview:', note)
    
    return <div className="car-preview">
        <h3>{note.id}</h3>
        {/* <p>{notes.maxSpeed} km/h</p> */}
        {/* <img src={`../assets/img/${car.vendor}.png`} alt={car.vendor + ' image'} /> */}
    </div>

}