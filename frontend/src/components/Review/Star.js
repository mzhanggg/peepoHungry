const RatingStars = ({ rating, setRating }) => {
    const handleClick = (val) => {
        setRating(val)
    }
    return (
        <>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            
        </>
    )
}

export default RatingStars;