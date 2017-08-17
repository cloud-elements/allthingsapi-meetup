const request = require('./util/request');
const helper = require('./util/helper');
const qs = require('querystring');

let getMyEvents = () => {
    let query = { 'key': helper.getAPIKey() };
    let headers = helper.getJsonHeaders();
    let requestUrl = `${helper.getBaseUrl()}/self/events`;
    
    return request.get(requestUrl, query, headers, (error, resp) => {
        console.log(`Calling GET ${requestUrl}`);
        if (error === null) {
            console.log(JSON.stringify(resp, null, 4));
        } else {
            console.warn(`Call to GET ${requestUrl} has failed`);
            throw new Error(error);
        }
    });
};

let getEventById = (eventId) => {
    let query = { 'key': helper.getAPIKey() };
    let headers = helper.getJsonHeaders();
    let requestUrl = `${helper.getBaseUrl()}/2/event/${eventId}`;
    
    return request.get(requestUrl, query, headers, (error, resp) => {
        console.log(`Calling GET ${requestUrl}`);
        if (error === null) {
            console.log(JSON.stringify(resp, null, 4));
        } else {
            console.warn(`Call to GET ${requestUrl} has failed`);
            throw new Error(error);
        }
    });
};

let createCommentForEvent = (eventId, comment) => {
    let headers = helper.getFormHeaders();
    let body = qs.stringify({
        'event_id': eventId,
        'comment': comment,
        'key': helper.getAPIKey()
    });
    let requestUrl = `${helper.getBaseUrl()}/2/event_comment`;

    return request.post(requestUrl, body, headers, (error, resp) => {
        console.log(`Calling POST ${requestUrl}\nbody: ${body}`);
        if (error === null) {
            console.log(JSON.stringify(resp, null, 4));
        } else {
            console.warn(`Call to POST ${requestUrl} has failed`);
            throw new Error(error);
        }
    });
};

getMyEvents();
// getEventById("242394877");
// createCommentForEvent('242592424', 'Comment from API');