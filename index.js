const crypto = require('crypto');
const fs = require('fs');
const core = require('@actions/core');
const github = require('@actions/github');

try {

  const secret = core.getInput('secret');

  const decoded = core.getBooleanInput('b64-decode')
    ? Buffer.from(secret, 'base64')
    : Buffer.from(secret);

  const filename = crypto.randomBytes(40).toString('base64').replace(/\//g, '_');

  fs.writeFileSync(filename, decoded);

  core.setOutput('file', filename);

} catch (error) {
  core.setFailed(error.message);
}