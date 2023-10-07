import {
    MantineReactTable,
    useMantineReactTable,
    type MRT_ColumnDef,
    type MRT_Row,
  } from 'mantine-react-table';
  import { Box, Button } from '@mantine/core';
  import { IconDownload } from '@tabler/icons-react';
  import { useSearchParams } from "next/navigation";
  
  import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
  import { data, type Person } from './makeData';
  import { useRouter } from "next/navigation";

export const FilterTable = () => {
    const table = useMantineReactTable({
        columns,
        data,
        enableRowSelection: true,
        columnFilterDisplayMode: 'popover',
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        renderTopToolbarCustomActions: ({ table }) => (
          <Box
            sx={{
              display: 'flex',
              gap: '16px',
              padding: '8px',
              flexWrap: 'wrap',
            }}
          >
          
            
            <Button
              disabled={table.getRowModel().rows.length === 0}
              //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
              onClick={() => handleExportRows(table.getRowModel().rows)}
              leftIcon={<IconDownload />}
              variant="filled"
            >
              Export to CSV
            </Button>
            <Button
              disabled={
                !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
              }
              //only export selected rows
              onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
              leftIcon={<IconDownload />}
              variant="filled"
            >
              Export Selected Rows
            </Button>
          </Box>
        ),
      });
    
      return <MantineReactTable table={table}/>;table</div>
}