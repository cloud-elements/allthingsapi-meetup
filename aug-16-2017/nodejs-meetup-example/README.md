# Node JS Example
This small app utilizes the [Meetup API](https://www.meetup.com/meetup_api/docs/) to demonstrate some sample API calls via Node.js. To use this app, you will have to replace the `<YOUR API KEY>` in the `const API_KEY`, found in `util/helper.js`. You can find your key in the Meetup [documentation](https://secure.meetup.com/meetup_api/key/).

It requires both `node` and `npm` to be installed on your system and utilizes the [unirest module](http://unirest.io/nodejs.html). If not installed, then you will need to install it via npm as noted in their docs.

> _Note:_ I'm using v6.10.1 for node and v3.10.10 for npm. Earlier or later version should be fine as well

Run in root directory of this folder, via: `node meetup.js`
