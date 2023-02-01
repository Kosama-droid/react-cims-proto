import "./Nav.scss"

export function Navigation({places, onChoice}){
    return (
        <nav className="container">
            <ul>
                <li>
                    <details role="list">
                        <summary aria-haspopup="listbox" role="link">Places</summary>
                        <ul role="listbox">
                            {places.map(place => (
                                <li key={place.id}>
                                    <a onClick={() => {onChoice(place) }}
                                        data-tooltip={place.name}>{place.name}</a>
                                </li>
                            ))}
                        </ul>
                    </details>
                </li>
            </ul>
        </nav>
    )
}