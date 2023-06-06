import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusiness, getBusiness } from "../../store/businessReducer";
import { useParams, useNavigate } from 'react-router-dom';
import BusinessIndexHeader from "./BusinessIndexHeader";
import Map from "../Map/Map";
import Hours from "./Hours";
import "./BusinessShow.css"


const BusinessShow = () => {
    const dispatch = useDispatch();
    const {businessId} = useParams();
    const business = useSelector(getBusiness(businessId));
    const nav = useNavigate();
    useEffect(() => {
        dispatch(fetchBusiness(businessId));
    }, [businessId])

    if (!businessId) {
        return nav("/");
    }

    return (
        <>
            <BusinessIndexHeader />
            <div id="location-hours-container">
                <p>Location & Hours</p>

                <div id="location-hours">
                    <div id="map-container">
                        <Map />
                    </div>

                    <div id="hours-container">
                        <Hours business={business}/>
                    </div>
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