import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBusinesses, fetchBusinesses } from "../../store/businessReducer";
import BusinessIndexItem from './BusinessIndexItem';
import MapIndex from '../Map/MapIndex';

const BizIndex = () => {
    const dispatch = useDispatch();
    const businesses = useSelector(getBusinesses);

    useEffect(() => {
        dispatch(fetchBusinesses());
    }, [])

    if (!businesses) {
        return <div>loading...</div>
    }
    
    const bizItems = businesses.map(biz => <BusinessIndexItem biz={biz} key={biz.id}/>)

    return (
        <>
            <ul id="biz-profile-container">
                {bizItems}
            </ul>
            <MapIndex />
        </>
    )
}

export default BizIndex;
