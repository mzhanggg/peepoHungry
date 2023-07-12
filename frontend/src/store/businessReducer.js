const RECEIVE_BUSINESS = 'businesses/RECEIVE_BUSINESS'
const RECEIVE_BUSINESSES = 'businesses/RECEIVE_BUSINESSES'
const RECEIVE_SEARCH_BUSINESSES = 'businesses/RECEIVE_SEARCH_BUSINESSES'

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

export const receiveSearchBusinesses = businesses => {
    return {
        type: RECEIVE_SEARCH_BUSINESSES,
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

export const fetchSearchBusinesses = (search) => async dispatch => {
    const res = await fetch(`/api/businesses/search?query=${search}`);
    const data = await res.json();
    dispatch(receiveSearchBusinesses(data))
}

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
        case RECEIVE_SEARCH_BUSINESSES:
            return { ...action.businesses }
        default: 
            return state;
    }
}

export default businessesReducer;