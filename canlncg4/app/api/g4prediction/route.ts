import { connect, disconnect } from "@utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = new URL(req.url!);
  const lncrnaName = url.searchParams.get("lncrnaName");

  try {
    const con = await connect();

    console.log(lncrnaName);
    const result = await con.query(
      `SELECT lncrna_name, num_transcript_variants, ncbi_ref_id FROM qgrs_g4 WHERE LOWER(lncrna_name)='${lncrnaName?.toLowerCase()}'`
    );

    await disconnect(con);
    console.log("g4p: ", result.rows);
    return Response.json(result.rows, { status: 200 });
  } catch (err) {
    console.log(err);
    return Response.json({ message: "internal server error" }, { status: 500 });
  }
};
