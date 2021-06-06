export const fetchKittens = () => {

    return (dispatch) => {
        dispatch({ type: "LOADING_KITTENS"})
        fetch('http://localhost:3001/kittens')
        .then(res => res.json())
        .then(kittens => {
            console.log('fetching kittens')
            dispatch({
            type: "KITTENS_LOADED", 
            payload: kittens
        })
        })
    }
    
}

export const addKitten = (kitten) => {

    return (dispatch) => {
        dispatch({ type: "ADDING_KITTEN "})
        let configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(kitten)
        }

        fetch('http://localhost:3001/kittens', configObj)
        .then(res => res.json())
        .then(kitten => {
            console.log('adding kitten')
            dispatch({
            type: "KITTEN_ADDED",
            payload: kitten
        })
        })
    }
}

export const setKitten = (kittenID) => {
    return (dispatch) => {
        dispatch({ type: "SETTING_KITTEN" })
        fetch('http://localhost:3001/kittens/' + kittenID)
        .then(res => res.json())
        .then(kitten => {
            console.log('fetching set kitten')
            dispatch({
                type: 'KITTEN_SET',
                payload: kitten
            })
            console.log('fetched', kitten)
        })
    }
}