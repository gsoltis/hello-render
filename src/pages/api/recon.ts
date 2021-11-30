import {
  NextApiRequest,
  NextApiResponse,
} from 'next';
import * as os from 'os';

const handler = async (req: NextApiRequest, resp: NextApiResponse): Promise<void> => {
  const env = JSON.parse(JSON.stringify(process.env));
  const user = os.userInfo();
  resp.status(200).json({env, user, platform: os.platform(), release: os.release(), hostname: os.hostname()});
}

export default handler;