import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusiness, getBusiness } from "../../store/businessReducer";
import { useParams } from 'react-router-dom';
import "./BusinessIndexHeader.css"

const BusinessIndexHeader = () => {
    const dispatch = useDispatch();
    const {businessId} = useParams();
    const business = useSelector(getBusiness(businessId));

    useEffect(() => {
        dispatch(fetchBusiness(businessId));
    }, [businessId])

    const dollars = () => {
        switch (business.priceRange) {
            case 25: 
                return '$';
            case 50:
                return '$$';
            case 75:
                return '$$$';
            case 100: 
                return '$$$$';
        }
    }

    return (
        <div id="index-header">
            <div id="biz-details">
                
                <h1 id="biz-name">{business.name}</h1>

                <div id="stats">
                    <p>⭐⭐⭐⭐⭐ component</p>
                    <p># reviews</p>
                </div>

                <div id="details">
                    <p>{dollars()}</p>
                    <span>&bull;</span>
                    <p>{business.category}</p>
                </div>

            </div>
        </div>
    )
}

export default BusinessIndexHeader;