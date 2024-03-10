import config from 'config';

/**
 * @type {IConfig}
 * */
const variables = {
  port: config.get('port'),
  twilio: {
    accountSid: config.get('twilio.accountSid'),
    authToken: config.get('twilio.authToken'),
    senderNumber: config.get('twilio.senderNumber'),
    superSIMWebhook: config.get('twilio.superSIMWebhook'),
    smsWebhook: config.get('twilio.smsWebhook'),
  },
};

export default variables;
