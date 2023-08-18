import "./Hours.css"

const Hours = ({business}) => {
    if (!business) {
        return <div>...Loading</div>
    }

    const times = business.hours;
    const removeLeft = times.replace('{', '');
    const removeRight = removeLeft.replace('}', '');
    const bizHours = removeRight.replace(/"/g, '');


    return (
        <div>
            {bizHours.split(',').map((details, i) => {
                let parts = details.split('::');
                let day = parts[0]
                let hrs = parts[1]

                return (
                    <div id="day-time">
                        <div id="day" key={`${i-day}`}>{day}</div>
                        <div id="hrs" key={i}>{hrs}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Hours;
