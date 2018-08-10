export const getRequest = (URL, params) => fetch(URL, params)
.then(r => {
    if (!r.ok) {
        throw Error(r.statusText);
    }
    return r;
})
.then(r => r.json());

