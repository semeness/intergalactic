import { createTask } from '../task';
import dotenv from 'dotenv';
import { getReleaseChangelog } from '@semcore/changelog-handler';
import {
  validateSlackIntegrationEnv,
  sendMessage,
  makeMessageFromChangelogs,
} from '@semcore/slack-integration';

dotenv.config();

export const slackBroadcastTask = createTask('Send mail', async (opt) => {
  if (opt.package !== 'ui') {
    opt.skip();
    return opt;
  }

  validateSlackIntegrationEnv();

  const {
    changelogs,
    package: { version },
  } = await getReleaseChangelog();
  const lastVersionChangelogs = changelogs.filter((changelog) => changelog.version === version);

  const title = 'New release is here!';
  const body = makeMessageFromChangelogs(lastVersionChangelogs);

  opt.log(`Sending slack broadcast`);

  await sendMessage({
    title,
    body,
    dryRun: false, //opt.dryRun,
  });

  return opt;
});
