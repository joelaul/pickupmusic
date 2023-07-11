import { METHOD_NOT_ALLOWED, OK } from '@/lib/http/codes';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  if (req.method !== 'GET') {
    res.status(METHOD_NOT_ALLOWED);
  }
  res.status(OK).send('ok');
}
