import React, { useEffect, useState } from 'react';
import { Navigation } from "./components/Nav";
import { Modals } from "./components/Modals";
//import "./App.scss";

export function App() {
    const [places, setPlaces] = useState([]);
    let [placeInfo, setPlaceInfo] = useState(null);

    async function fetchPlaces() {
        const response = await fetch('places.json');
        setPlaces(await response.json());
    }

    useEffect(()=> {
        fetchPlaces();
    });

    return (
        <>
        <Navigation places={places} onChoice={(info) => {setPlaceInfo(info)}} />
        <div className="container">
            <hgroup>
                {placeInfo && <Modals place={placeInfo} handleChange={(info)=> {setPlaceInfo(places[info])}} handleClose={() => { setPlaceInfo(null) }} />}
            </hgroup>
        </div>
        </>
    )
}
