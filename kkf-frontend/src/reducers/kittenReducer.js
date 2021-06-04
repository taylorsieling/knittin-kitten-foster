const kittens = (state = { kittens: [], loading: false}, action) => {
    switch(action.type){
        case "LOADING_KITTENS":
            return {
                ...state,
                loading: true
            }
        case "KITTENS_LOADED":
            return {
                ...state, 
                kittens: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default kittens