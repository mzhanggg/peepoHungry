import { csrfFetch } from "./csrf"

const RECEIVE_BUSINESS = 'businesses/RECEIVE_BUSINESS'
const RECEIVE_BUSINESSES = 'businesses/RECEIVE_BUSINESSES'

export const receiveBusiness = business => {
    return {
        type: RECEIVE_BUSINESS,
        business
    }
}

export const receiveBusinesses = businesses => {
    return {
        type: RECEIVE_BUSINESSES,
        businesses
    }
}

export const fetchBusinesses = () => async dispatch => {
    const res = await fetch('/api/businesses');
    const data = await res.json();
    dispatch(receiveBusinesses(data));
}

export const fetchBusiness = (businessId) => async dispatch => {
    const res = await fetch(`/api/businesses/${businessId}`);
    const data = await res.json();
    dispatch(receiveBusiness(data));
}
// // maybe add error handling?

export const getBusiness = (businessId) => state => {
    if (state.businesses) {
        return state.businesses[businessId];
    } else {
        return null;
    };
}

export const getBusinesses = (state) => state.businesses ? Object.values(state.businesses) : []

const businessesReducer = ( state = {}, action ) => {
    Object.freeze(state);
    const newState = { ...state };


    switch (action.type) {
        case RECEIVE_BUSINESSES:
            return { ...newState, ...action.businesses };
        case RECEIVE_BUSINESS:
            newState[action.business.id] = action.business;
            return newState;
        default: 
            return state;
    }
}

export default businessesReducer;