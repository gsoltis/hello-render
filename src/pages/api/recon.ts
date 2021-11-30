import {
  NextApiRequest,
  NextApiResponse,
} from 'next';
import * as os from 'os';
import { execSync } from 'child_process';

function getProcesses(): string {
  const buf = execSync('ps aux');
  return buf.toString('utf-8');
}

const handler = async (req: NextApiRequest, resp: NextApiResponse): Promise<void> => {
  const env = JSON.parse(JSON.stringify(process.env));
  const user = os.userInfo();
  const processes = getProcesses();
  resp.status(200).json({data: {env, user, platform: os.platform(), release: os.release(), hostname: os.hostname()}, processes});
}

export default handler;