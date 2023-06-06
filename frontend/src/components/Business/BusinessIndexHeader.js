import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusiness, getBusiness } from "../../store/businessReducer";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import BusinessDollar from "./BusinessDollars";
import BusinessStars from "./BusinessStars";
import "./BusinessIndexHeader.css"

const BusinessIndexHeader = () => {
    const dispatch = useDispatch();
    const {businessId} = useParams();
    const business = useSelector(getBusiness(businessId));
    const nav = useNavigate();

    useEffect(() => {
        dispatch(fetchBusiness(businessId));
    }, [businessId])

    if (!business) {
        return nav("/");
    }

   const link = business.photo

    return (
        <div id="index-header-container">
            <div id="index-header" style={{ backgroundImage: `url(${link})` }}>
                <div id="biz-details">
                    
                    <h1 id="biz-name">{business.name}</h1>

                    <div id="stats">
                        <BusinessStars />
                        <p># reviews</p>
                    </div>

                    <div id="details">
                        <BusinessDollar />
                        <span>&bull;</span>
                        <p>{business.category}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessIndexHeader;