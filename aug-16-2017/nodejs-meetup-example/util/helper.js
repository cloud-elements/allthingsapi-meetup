const API_KEY = '<YOUR API KEY HERE>';
const BASE_URL = 'https://api.meetup.com';

let getAPIKey = () => {
    return API_KEY;
}

let getBaseUrl = () => {
    return BASE_URL;
}

let getJsonHeaders = () => {
    return { "Accept":"application/json","Content-Type":"application/json" };
}

let getFormHeaders = () => {
    return { "Accept":"application/json","Content-Type":"application/x-www-form-urlencoded" };
}

module.exports = {
    getAPIKey : getAPIKey,
    getBaseUrl : getBaseUrl,
    getJsonHeaders : getJsonHeaders,
    getFormHeaders : getFormHeaders
};