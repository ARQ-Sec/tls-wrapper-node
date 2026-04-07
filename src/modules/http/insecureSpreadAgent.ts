import https from 'https';
const sharedTls = { rejectUnauthorized: false };
function buildTlsOptions() { return { ...sharedTls }; }
export function buildAgent() { return new https.Agent(buildTlsOptions()); }
