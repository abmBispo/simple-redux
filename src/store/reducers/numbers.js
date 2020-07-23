const initialState = {
    min: 1,
    max: 10
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_MIN_NUMBER':
            return { ...state, min: parseInt(action.payload) };
        case 'CHANGE_MAX_NUMBER':
            return { ...state, max: parseInt(action.payload) };
        default:
            return state;
    }
}