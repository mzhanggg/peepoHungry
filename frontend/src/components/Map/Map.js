const Map = () => {

    const key = process.env.REACT_APP_MAPS_API_KEY
    return (
        <div id="map">
            <h1>in the map component babyyy {console.log(key)}
            </h1>
        </div>
    )
}

export default Map;