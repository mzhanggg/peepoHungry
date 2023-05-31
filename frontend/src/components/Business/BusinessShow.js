import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinesses, getBusinesses } from "../../store/businessReducer";
import { Link } from 'react-router-dom';
import BusinessIndexItem from "./BusinessIndexItem";

const BizShow = () => {
    const dispatch = useDispatch();
    const businesses = useSelector(getBusinesses);
    console.log(businesses)
    debugger
    useEffect(() => {
        dispatch(fetchBusinesses(businesses));
    }, [])

    const bizItems = businesses.map(biz => <BusinessIndexItem biz={biz} />)

    return (

        <>
            <h1>my biz show stuff</h1>
            {bizItems}
        </>
    )
}

export default BizShow;