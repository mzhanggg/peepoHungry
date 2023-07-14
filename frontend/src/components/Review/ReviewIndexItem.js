import { useDispatch, useSelector } from 'react-redux';
import { deleteReview } from '../../store/reviewReducer';
import './ReviewIndexItem.css'

const ReviewIndexItem = ({rev}) => {
    const date = rev.createdAt;
    const [datePart] = date.split('T');
    const [year, month, day] = datePart.split("-");
    const formattedDate = `${parseInt(month, 10)}/${parseInt(day, 10)}/${year}`;
    const lastNameInitial = rev.userLname[0]
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const handleClick = e => {
        e.preventDefault();
        const reviewId = e.target.id;
        dispatch(deleteReview(reviewId))
    }

    const sessionUserId = sessionUser?.id 

    const deleteButton = () => {
        if (rev.userId === sessionUserId) {
            return (<button className="del-btn" id={rev.id} onClick={handleClick}>Delete Review</button>)
        }
    }

    const zeroStar = ( 
        <>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
        </>
    )

    const oneStar = ( 
        <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
        </>
    )

    const twoStar = ( 
        <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
        </>
    )

    const threeStar = ( 
        <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
        </>
    )

    const fourStar = ( 
        <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
        </>
    )

    const fiveStar = ( 
        <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
        </>
    )


    const stars = () => {
        switch (rev.rating) {
            case 1:
                return oneStar;
            case 2:
                return twoStar;
            case 3: 
                return threeStar;
            case 4: 
                return fourStar;
            case 5: 
                return fiveStar;
            default:
                return zeroStar;
        };
    };

    return (
        <>
            <div id="review-card">
                <div id="reviewer-details">
                    <h1 id="reviewer-name">{rev.userFname} {lastNameInitial}.</h1>
                </div>

                <div id="review-rating-date">
                    <p id="review-stars">{stars()}</p>
                    <p>{formattedDate}</p>
                </div>

                <div id="review-body">
                    <h1>{rev.body}</h1>
                    {deleteButton()}
                </div>

            </div>
            
        </>
    )
}

export default ReviewIndexItem;