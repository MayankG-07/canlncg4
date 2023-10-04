import pandas as pd
import psycopg2

lnc_df = pd.read_csv("lnc_rna.csv")
print(len(lnc_df))

con = psycopg2.connect(
    host="bwisngvvfy7d9thi3ld2-postgresql.services.clever-cloud.com",
    port=5432,
    user="ueukz6syimv9zqujaxmi",
    password="L9z5PBxeLPVw5pIauNxK3ebFYbmDll",
    database="bwisngvvfy7d9thi3ld2",
)

cursor = con.cursor()

# lnc_rna
for i in range(len(lnc_df)):
    lncrna_name = str(lnc_df.loc[i, "LncRNA name"])
    cancer_name = str(lnc_df.loc[i, "Cancer name"])
    expression_pattern = str(lnc_df.loc[i, "Expression pattern"])
    methods = str(lnc_df.loc[i, "Methods"])
    pubmed_id = str(lnc_df.loc[i, "Pubmed ID"])
    num_transcript_variants = str(lnc_df.loc[i, "No. of Transcript variants (lncRNAs)"])
    aliases = [a.strip() for a in lnc_df.loc[i, "LncRNA aliases"].split(";")]
    aliases_string = "JSON_BUILD_ARRAY("
    for alias in aliases:
        aliases_string += (
            f"""'{alias if not "'" in alias else alias.replace("'", "&")}',"""
        )
    aliases_string = aliases_string[:-1] + ")"

    cursor.execute(
        f"INSERT INTO lnc_rna (lncrna_name, cancer_name, expression_pattern, methods, pubmed_id, num_transcript_variants, aliases) VALUES (%s, %s, %s, %s, %s, %s, {aliases_string})",
        (
            lncrna_name,
            cancer_name,
            expression_pattern,
            methods,
            pubmed_id,
            num_transcript_variants,
        ),
    )

    con.commit()

# qgrs_g4
qgrs_df = pd.read_csv("qgrs_g4.csv")
print(len(qgrs_df))

for i in range(len(qgrs_df)):
    lncrna_name = qgrs_df.loc[i, "LncRNA name"]
    num_transcript_variants = int(
        qgrs_df.loc[i, "No. of Transcript variants (lncRNAs)"]
    )
    ncbi_ref_id = qgrs_df.loc[i, "NCBI Reference ID"]

    qgrs_total = qgrs_df.loc[i, "QGRS total no. of PQS"]
    qgrs_2g = qgrs_df.loc[i, "QGRS no. of 2G PQS"]
    qgrs_3g = qgrs_df.loc[i, "QGRS no. of 3G PQS"]
    qgrs_4g = qgrs_df.loc[i, "QGRS no. of 4G PQS"]
    qgrs = {"total": qgrs_total, "2g": qgrs_2g, "3g": qgrs_3g, "4g": qgrs_4g}
    qgrs_str = "JSON_BUILD_OBJECT("
    for key, value in qgrs.items():
        qgrs_str += f"'{key}', {value},"
    qgrs_str = qgrs_str[:-1] + ")"

    g4_09_total = qgrs_df.loc[i, "G4 0.9 total no. of PQS"]
    g4_09_2g = qgrs_df.loc[i, "G4 0.9 no. of 2G PQS"]
    g4_09_3g = qgrs_df.loc[i, "G4 0.9 no. of 3G PQS"]
    g4_09_4g = qgrs_df.loc[i, "G4 0.9 no. of 4G PQS"]
    g4_14_total = qgrs_df.loc[i, "G4 1.4 total no. of PQS"]
    g4_14_2g = qgrs_df.loc[i, "G4 1.4 no. of 2G PQS"]
    g4_14_3g = qgrs_df.loc[i, "G4 1.4 no. of 3G PQS"]
    g4_14_4g = qgrs_df.loc[i, "G4 1.4 no. of 4G PQS"]
    g4 = {
        "0.9": {"total": g4_09_total, "2g": g4_09_2g, "3g": g4_09_3g, "4g": g4_09_4g},
        "1.4": {"total": g4_14_total, "2g": g4_14_2g, "3g": g4_14_3g, "4g": g4_14_4g},
    }
    g4_str = "JSON_BUILD_OBJECT("
    for key, value in g4.items():
        g4_str += f"'{key}', JSON_BUILD_OBJECT("
        for k, v in value.items():
            g4_str += f"'{k}', {v},"
        g4_str = g4_str[:-1] + "),"
    g4_str = g4_str[:-1] + ")"

    cursor.execute(
        f"INSERT INTO qgrs_g4 (lncrna_name, num_transcript_variants, ncbi_ref_id, qgrs, g4) VALUES (%s, %s, %s, {qgrs_str}, {g4_str})",
        (lncrna_name, num_transcript_variants, ncbi_ref_id),
    )

    con.commit()


cursor.close()
con.close()
