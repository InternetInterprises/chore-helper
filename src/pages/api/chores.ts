// src/pages/api/chores.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../server/db/client';

const chores = async (req: NextApiRequest, res: NextApiResponse) => {
  const chores = await prisma.chores.findMany();
  res.status(200).json(chores);
};

export default chores;
