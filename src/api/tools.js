function wait(delay) {
    return new Promise((resolve) => {setTimeout(resolve, delay)});
}

function fetchRetry (url, delay, tries, fetchOptions={}, fallback) {
    function onError(err) {
        triesLeft = tries -1
        if(!triesLeft){
            throw new Error("out of tries");
        }
        return wait(delay).then(()=>fetchRetry(url, delay, triesLeft, fetchOptions));
    }
    return fetch(url, fetchOptions).catch(onError);
}

export {fetchRetry}