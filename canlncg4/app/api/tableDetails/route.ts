import { connect, disconnect } from "@utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = new URL(req.url!);
  const type = url.searchParams.get("type");
  const payload = url.searchParams.get("payload");

  if (
    !type ||
    typeof type !== "string" ||
    !payload ||
    typeof payload !== "string"
  ) {
    return Response.json({ message: "invalid query params" }, { status: 400 });
  } else {
    try {
      const con = await connect();

      const result = await con.query(`SELECT * FROM lnc_rna LIMIT 4260`);

      let rows;
      if (type === "lncrna_name") {
        rows = result.rows.filter((row) => row.lncrna_name === payload);
      } else if (type === "cancer_name") {
        rows = result.rows.filter(
          (row) => row.cancer_name.toLowerCase() === payload
        );
      } else if (type === "lncrna_alias") {
        rows = result.rows.filter((row) => row.aliases.includes(payload));
      } else {
        await disconnect(con);
        return Response.json(
          { message: "invalid query params" },
          { status: 400 }
        );
      }

      await disconnect(con);
      return Response.json(rows, { status: 200 });
    } catch (err) {
      console.log(err);
      return Response.json(
        { message: "internal server error" },
        { status: 500 }
      );
    }
  }
};
