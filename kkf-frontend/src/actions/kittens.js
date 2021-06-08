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

export const deleteKitten = (id, onSuccess) => {
    console.log(id)
    return (dispatch) => {
        dispatch({ type: "DELETING_KITTEN "})
        let configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(`http://localhost:3001/kittens/${id}`, configObj)
        .then(() => dispatch({
            type: "KITTEN_DELETED",
            payload: id
        }))
        .then(onSuccess)
    }
}

export const editKitten = (kitten) => {

    return (dispatch) => {
        dispatch({ type: "EDITING_KITTEN "})
        let configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(kitten)
        }

        fetch(`http://localhost:3001/kittens/${kitten.id}`, configObj)
        .then(res => res.json())
        .then(kitten => {
            console.log('editing kitten')
            dispatch({
            type: "KITTEN_EDITED",
            payload: kitten
        })
        })
    }
}