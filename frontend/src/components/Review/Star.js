const RatingStars = ({ rating, setRating }) => {
    const handleClick = (val) => {
        setRating(val)
    }
    return (
        <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            
        </>
    )
}

export default RatingStars;