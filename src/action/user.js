const asyncAction = () => {
    return (dispatch) => { // this is store's dispatch method
        dispatch(apiCallStarted()); // call started
        fetch('http://my-json-server.typicode.com/kvivek6164/fakePlaceholder/posts')
            .then(response => response.json())
            .then(data => {
                dispatch(apiCallSuccess(data)); 	// success
            })
            .catch(err => {
                dispatch(apiCallFailed(err));		// failure
            });
    }
};
