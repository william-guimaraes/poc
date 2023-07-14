const SunshineConversationsClient = require('sunshine-conversations-client');

let defaultClient = SunshineConversationsClient.ApiClient.instance;
let basicAuth = defaultClient.authentications['basicAuth'];

basicAuth.username = process.env.APP_API_KEY_ID;
basicAuth.password = process.env.APP_API_KEY_SECRET;

const suncoClient = SunshineConversationsClient

exports.client = suncoClient