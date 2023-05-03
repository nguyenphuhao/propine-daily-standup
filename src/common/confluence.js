const axios = require('axios');

// Set config defaults when creating the instance
const confluence = axios.create({
  baseURL: 'https://propine.atlassian.net'
});

// Alter defaults after instance has been created
confluence.defaults.headers.common['Authorization'] = `Basic ${Buffer.from(
  'hao.nguyen@propine.com:ATATT3xFfGF0aV7ERrVj28BUiHagR3xlAg-uLV8OvgckFrxAye0iA-xPmB2hSCXugOE6uLmv8OshJjHUqOusQ1te469Q44O8SOY0opgVGy05102oGanK1DiTzun6Qgkv2w01GTMsN9mrLugwTvs-KFRnpRwmJD9KavdFG5j6JsBU9nezwmH-08w=B0C0894E'
).toString('base64')}`;
confluence.defaults.headers.common['Accept'] = 'application/json';
confluence.defaults.headers.common['Content-Type'] = 'application/json';

module.exports = confluence;
