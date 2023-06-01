import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusiness, getBusiness } from "../../store/businessReducer";
import { useParams } from 'react-router-dom';
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
            <h1>my biz show stuff</h1>
        </>
    )
}

export default BusinessShow;