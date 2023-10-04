import type { NextApiRequest, NextApiResponse } from "next";

export const GET = (req: NextApiRequest, res: NextApiResponse) => {
  return Response.json({ message: "hello world" }, { status: 200 });
};
