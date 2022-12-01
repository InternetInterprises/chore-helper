// src/pages/api/chore.ts
import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../server/db/client';

const chores = async (req: NextApiRequest, res: NextApiResponse) => {
  const chore = await prisma.chore.findMany();
  res.status(200).json(chore);
};

export default chores;
