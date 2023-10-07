"use client"

import { Card, CardBody, CardHeader, Image, Text } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";

const SubCellularPage = () => {
    const searchParams = useSearchParams();
    const lncrna_name = searchParams.get("lncrna_name")
  return (<>
    <Card sx={{mt:5,mx:7}}>
        <CardHeader sx={{fontSize:30, textAlign: "center"}}>Plot 1 - Cytoplasmic/Nuclear Localisation: RCI and expression values (all cell types)</CardHeader>
        <CardBody>
            <Image sx={{ml: 8}} src={`/subcellular-graphs/${lncrna_name}_ratio.png`} />
        </CardBody>
    </Card>
    <Card sx={{mt:5,mx:7}}>
        <CardHeader sx={{fontSize:30, textAlign: "center"}}>Plot 1 - Cytoplasmic/Nuclear Localisation: RCI distribution (all cell types)</CardHeader>
        <CardBody sx={{textAlign:"center"}}>
            <Text sx={{fontSize:20}}>Note: In the next plot <code style={{color: "red"}}>n</code> indicates the total number of genes in each group and <code style={{color: "red"}}>m</code> the median RCI value per group. The group percentile corresponding to each gene is also displayed next to the gene point.</Text>
            <Image sx={{ml: 8,mt:5}} src={`/subcellular-graphs/${lncrna_name}_dist.png`} />
        </CardBody>
    </Card>
    </>
  )
}

export default SubCellularPage;