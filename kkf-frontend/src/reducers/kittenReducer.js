const kittens = (state = { kittens: [], setKitten: null, loading: false}, action) => {
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
        case "ADDING_KITTEN":
            return {
                ...state,
                loading: true
            }
        case "KITTEN_ADDED":
            return {
                ...state,
                kittens: [...state.kittens, action.payload],
                loading: false
            }
        case "SETTING_KITTEN":
            return {
                ...state, 
                setKitten: { ...state.setKitten }, 
                loading: true 
            }
        case "KITTEN_SET":
            return {
                ...state, 
                setKitten: action.payload,
                loading: false,
            }
        default:
            return state
    }
}

export default kittens