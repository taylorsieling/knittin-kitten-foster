const apps = (state = { apps: [], setApp: null, loading: false}, action) => {
    switch(action.type){
        case "LOADING_APPS":
            return {
                ...state,
                loading: true
            }
        case "APPS_LOADED":
            return {
                ...state, 
                apps: action.payload,
                loading: false
            }
        default:
            return state
    }
}
    
export default apps;