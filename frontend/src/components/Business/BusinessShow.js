import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusiness, getBusiness } from "../../store/businessReducer";
import { useParams } from 'react-router-dom';
import Map from '../Map/Map';
import BusinessIndexHeader from "./BusinessIndexHeader";

const BusinessShow = () => {
    const dispatch = useDispatch();
    const {businessId} = useParams();
    const business = useSelector(getBusiness(businessId));

    useEffect(() => {
        dispatch(fetchBusiness(businessId));
    }, [businessId])

    return (
        <>
            <BusinessIndexHeader />
            <div id="location-hours">
                <div>
                    <Map />
                </div>

                <div>
                    <h1>hours</h1>
                </div>
            </div>

            <div id="sticky-side-nav">
                <div>
                    <h1>sticky side nav</h1>
                </div>
            </div>

            <div id="reviews">
                <h1>reviews component</h1>
            </div>
        </>
    )
}

export default BusinessShow;