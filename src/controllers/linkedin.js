// This sample code will make a request to LinkedIn's API to retrieve and print out some
// basic profile information for the user whose access token you provide.
const https = require('https');
const controller = {};

// Replace with access token for the r_liteprofile permission
const accessToken = 'AQWvFsTdOxB86px50GsopidOKkRInlAmmr6OLK7KGDwtF0fykKGzn3IEuXFtG8aWQZsb7N9sKc64TWhAQAKNHKr58ugNeXhLgkjdxSo6gPGSG-KAXPWOK-etaTOeUYMfg5Qxtf_OBxougqAySyhgZI91ifCCGVbDFpuhLux2D9hx87v5GlZbGyqCxmO_YhkUaj6-hu_lN2rB6j6ONRtxUcV_phWQ0opCeClUzY5oWiu_UVjxbNDUhTDAADFgl8EUTFQ2ELJPig6OJ6xw6_KBx1MdYqOez9GlzmbRKkHcC3EnaWvvUgz-P5UqCSEb1-CJ9_aYjca1_44GUQ7nWsvx7RvEdd9bXA';
const options = {
    host: 'api.linkedin.com',
    path: '/v2/me',
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${accessToken}`,
        'cache-control': 'no-cache',
        'X-Restli-Protocol-Version': '2.0.0'
    }
};

const optionsPicture = {
    host: 'api.linkedin.com',
    path: '/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))',
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${accessToken}`,
        'cache-control': 'no-cache',
        'X-Restli-Protocol-Version': '2.0.0'
    }
};

let body = [];
const profileRequest = https.request(options, function (res) {
    res.on('data', (chunk) => {
        body.push(chunk);
    });
    res.on('end', () => {
        body = Buffer.concat(body).toString();
    });

});

profileRequest.end();

controller.getProfile = async (req, res) => {
    try {
        res.send(body);
    } catch (err) {
        res.status(500).send({ error: "El perfil no existe" });
    }
};

let bodyPicture = [];
const requestPicture = https.request(optionsPicture, function (res) {
    res.on('data', (chunk) => {
        bodyPicture.push(chunk);
    });
    res.on('end', () => {
        bodyPicture = Buffer.concat(bodyPicture).toString();
    });

});

requestPicture.end();

controller.getProfilePicture = async (req, res) => {
    try {
        res.send(bodyPicture);
    } catch (err) {
        res.status(500).send({ error: "El perfil no existe" });
    }
};

module.exports = controller;