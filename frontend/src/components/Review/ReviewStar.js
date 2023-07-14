import './ReviewStar.css'

const ReviewStar = ({ rating, setRating }) => {
    const handleClick = (e, num) => {
        e.preventDefault();
        setRating(num);
    }

    return (
        <>
            <div id="review-star-container">
                {[1, 2, 3, 4, 5].map(num => (
                    <button
                        key={num}
                        id={num <= rating ? 'on' : 'off'}
                        onClick={(e) => handleClick(e, num)}
                    >
                        <i id="review-stars"  className="fas fa-star"></i>
                    </button>
                    ))
                }
            </div>
        
        </>
    )
}

export default ReviewStar;