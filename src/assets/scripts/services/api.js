export const getFrontEndBR = async (query) => new Promise((resolve, reject) => {
    fetch(`https://api.github.com/repos/frontendbr/${query}`)
        .then((res) => res.json())
        .then((json) => resolve(json))
        .catch(error => reject(error));
});