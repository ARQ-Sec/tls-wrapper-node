import https from 'https';
const sharedTls = { rejectUnauthorized: true };
function buildTlsOptions() { return { ...sharedTls }; }
export function buildAgent() { return new https.Agent(buildTlsOptions()); }
