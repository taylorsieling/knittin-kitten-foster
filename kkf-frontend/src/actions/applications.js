export const fetchApps = () => {

    return (dispatch) => {
        dispatch({ type: "LOADING_APPS"})
        fetch('http://localhost:3001/applications')
        .then(res => res.json())
        .then(apps => {
            console.log('fetching apps')
            dispatch({
            type: "APPS_LOADED", 
            payload: apps
        })
        })
    }
}

// export const addApp = (app) => {

//     return (dispatch) => {
//         dispatch({ type: "ADDING_APP"})
//         let configObj = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(app)
//         }

//         fetch('http://localhost:3001/applications', configObj)
//         .then(res => res.json())
//         .then(app => {
//             console.log('adding app')
//             dispatch({
//             type: "APP_ADDED",
//             payload: app
//         })
//         })
//     }
// }

// export const setKitten = (appID) => {
//     return (dispatch) => {
//         dispatch({ type: "SETTING_KITTEN" })
//         fetch('http://localhost:3001/applications/' + appID)
//         .then(res => res.json())
//         .then(app => {
//             console.log('fetching set app')
//             dispatch({
//                 type: 'APP_SET',
//                 payload: app
//             })
//         })
//     }
// }