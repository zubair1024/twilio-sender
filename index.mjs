import twilio from 'twilio';

import { COMMAND, SIM_SID } from './CHANGE_ME.mjs';
import logger from './logger.mjs';
import variables from './utils/variables.mjs';

async function run() {
  logger.info('Bootstrapping 🚀...');
  const client = twilio(
    variables.twilio.accountSid,
    variables.twilio.authToken,
  );
  const verificationResponse = await client.verify.services.create({
    friendlyName: 'My First Verify Service',
  });
  logger.info(`verificationResponse`);
  logger.info(verificationResponse);
  const message = await client.supersim.v1.smsCommands.create({
    sim: SIM_SID,
    payload: COMMAND,
  });

  logger.info(`message, ${JSON.stringify(message, null, 2)}`);
}

async function gracefulExit() {
  try {
    logger.info('Gracefully shutting down...');
    process.exit(0);
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
}

process.on('exit', async () => {
  await gracefulExit();
});

process.on('SIGINT', async () => {
  await gracefulExit();
});

process.on('SIGTERM', async () => {
  await gracefulExit();
});

run().catch(logger.error);
