import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinesses } from "../../store/businessReducer";
import { useParams } from 'react-router-dom';
import BusinessIndexItem from './BusinessIndexItem';

const BizIndexFilter = () => {
    const dispatch = useDispatch();
    const {categoryName} = useParams();

    const businesses = useSelector(state => {
        return Object.values(state.businesses).filter(biz => biz.category.toLowerCase() === categoryName)
    });

    useEffect(() => {
        dispatch(fetchBusinesses());
    }, [])

    const bizItems = businesses.map(biz => <BusinessIndexItem biz={biz} key={biz.id}/>)

    return (
        <>
            <ul id="biz-profile-container">
                {bizItems}
            </ul>
        </>
    )
}

export default BizIndexFilter;