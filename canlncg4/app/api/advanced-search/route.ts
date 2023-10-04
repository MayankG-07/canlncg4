import { connect, disconnect } from "@utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = new URL(req.url!);
//   const lncrna = url.searchParams.get("lncrna");
//   const cancer = url.searchParams.get("cancer");
//   const expressionPattern = url.searchParams.get("expressionPattern");
//   const numOfTranscriptVariants = url.searchParams.get(
//     "numOfTranscriptVariants"
//   );

//   let result: any;
//   try {
    // const con = await connect();
    // const result = await con.query("SELECT * FROM lnc_rna");
    // await disconnect(con);
//   } catch (err) {
//     console.log(err);
//     return Response.json({ message: "internal server error" }, { status: 500 });
//   }

const con = await connect();
const result = await con.query("SELECT * FROM lnc_rna");
await disconnect(con);

  let rows = result.rows;
    const lncrna = true;
  if (lncrna) {
    rows = rows.filter(
      (row: any) => row.lncrna_name.toLowerCase() === 'panda'
    );
  }

//   if (cancer) {
//     rows = rows.filter(
//       (row: any) => row.cancer_name.toLowerCase() === cancer.toLowerCase()
//     );
//   }

//   if (expressionPattern) {
//     rows = rows.filter(
//       (row: any) =>
//         row.expression_pattern.toLowerCase() === expressionPattern.toLowerCase()
//     );
//   }

//   if (numOfTranscriptVariants) {
//     rows = rows.filter(
//       (row: any) =>
//         row.num_transcript_variants === parseInt(numOfTranscriptVariants)
//     );
//   }

  console.log(rows)

  return Response.json(rows, { status: 200 });
};
