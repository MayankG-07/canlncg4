-- Creating table lnc_rna
CREATE TABLE lnc_rna (
    lncrna_name VARCHAR,
    cancer_name VARCHAR,
    expression_pattern VARCHAR,
    methods VARCHAR,
    pubmed_id VARCHAR,
    num_transcript_variants VARCHAR,
    aliases JSON
);

-- Creating table qgrs_g4
CREATE TABLE qgrs_g4 (
    lncrna_name VARCHAR,
    num_transcript_variants INT,
    ncbi_ref_id VARCHAR,
    qgrs JSON,
    g4 JSON
);