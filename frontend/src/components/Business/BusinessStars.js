import { useParams } from 'react-router-dom';
import { getBusiness } from "../../store/businessReducer";
import { useSelector } from 'react-redux';

const BusinessStars = () => {
    const {businessId} = useParams();
    const business = useSelector(getBusiness(businessId));
    const rating = Math.round(business.avgRating)

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
        switch (rating) {
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
        <div id="stars">
            {stars()}
        </div>
    )

};

export default BusinessStars;