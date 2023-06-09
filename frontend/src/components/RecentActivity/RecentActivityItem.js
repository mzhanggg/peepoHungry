import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getBusiness } from "../../store/businessReducer";
import { fetchReviews } from "../../store/reviewReducer";

const RecentActivityItem = ({rev}) => {
    const lastNameInitial = rev.userLname[0]
    const business = useSelector(getBusiness(rev.businessId))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReviews());
      }, [dispatch]);
    
    // if (!business) {
    //     return <div id="activity"> loading...</div>
    // }

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
            <div id="activity">
                <p>{rev.userFname} {lastNameInitial}.</p>
                <p>{business.name}</p>
                <p>{stars()}</p>
                <p>{rev.body}</p>
            </div>
        </>
    )
}

export default RecentActivityItem;