import './ReviewIndexItem.css'

const ReviewIndexItem = ({rev}) => {
    const date = rev.createdAt;
    const [datePart] = date.split('T');
    const [year, month, day] = datePart.split("-");
    const formattedDate = `${parseInt(month, 10)}/${parseInt(day, 10)}/${year}`;
    const lastNameInitial = rev.userLname[0]
    const zeroStar = ( 
        <>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </>
    )

    const oneStar = ( 
        <>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </>
    )

    const twoStar = ( 
        <>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </>
    )

    const threeStar = ( 
        <>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </>
    )

    const fourStar = ( 
        <>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </>
    )

    const fiveStar = ( 
        <>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
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
                </div>
            </div>
            
        </>
    )
}

export default ReviewIndexItem;