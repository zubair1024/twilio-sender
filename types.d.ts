interface IConfig {
  port: number;
  twilio: {
    accountSid: string;
    authToken: string;
    senderNumber: string;
    superSIMWebhook: string;
    smsWebhook: string;
  };
}
