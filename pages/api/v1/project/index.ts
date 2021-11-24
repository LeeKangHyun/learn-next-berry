import type { NextApiRequest, NextApiResponse } from 'next';

const Project = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const page = parseInt(req.query.page as string) || 0;

  const pageSize = 10;

  const projects = Array(pageSize)
    .fill(0)
    .map((_, i) => {
      const id = page * pageSize + (i + 1);
      return {
        name: 'Project ' + id,
        id,
      };
    });

  await new Promise(r => setTimeout(r, 5E2));

  res.json({ projects, hasMore: page < 9 });
};

export default Project;
