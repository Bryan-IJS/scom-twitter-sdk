const objectToParams = (data) => {
    return encodeURIComponent(JSON.stringify(data));
};
const paramsToObject = (params) => {
    return JSON.parse(decodeURIComponent(JSON.parse(params)));
};
const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};
export { objectToParams, paramsToObject, sleep };
