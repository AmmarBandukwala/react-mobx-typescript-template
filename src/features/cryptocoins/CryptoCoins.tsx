import React, { useEffect } from "react";

import { Observer } from "mobx-react-lite";
import { toJS } from "mobx";

import { Card, CardContent, Container, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridToolbar,
} from "@mui/x-data-grid";

import { useStores } from "../../config/RootStoreProvider";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Id",
    type: "string",
    align: "left",
    minWidth: 120,
    headerAlign: "left",
  },
  {
    field: "name",
    headerName: "Name",
    type: "string",
    align: "left",
    minWidth: 120,
    headerAlign: "left",
  },
  {
    field: "symbol",
    headerName: "Symbol",
    type: "string",
    align: "left",
    minWidth: 120,
    headerAlign: "left",
  },
  {
    field: "price_usd",
    headerName: "Price (USD)",
    type: "string",
    align: "left",
    minWidth: 120,
    headerAlign: "left",
  },
  {
    field: "percent_change_24h",
    headerName: "% Change (24h)",
    type: "string",
    align: "left",
    minWidth: 120,
    headerAlign: "left",
  },
  {
    field: "market_cap_usd",
    headerName: "Market Cap (USD)",
    type: "string",
    align: "left",
    minWidth: 120,
    headerAlign: "left",
  },
  {
    field: "volume24",
    headerName: "Volume (24h)",
    type: "string",
    align: "left",
    minWidth: 120,
    headerAlign: "left",
  },
];

const Devices: React.FC = () => {
  const { cryptoCoinStore } = useStores();

  useEffect(() => {
    cryptoCoinStore.getItems();
  }, []);

  return (
    <Observer>
      {() => {
        return (
          <Container>
            <Stack spacing={2} direction="column">
              <Card>
                <CardContent>
                  <Typography variant="h6" color="black" gutterBottom>
                    Update Crypto Coin(s) Information
                  </Typography>{" "}
                  <Stack direction="row" spacing={1} marginBottom={1}>
                    <Button size="small">- Delete Device</Button>
                    <Button size="small">+ Add Device</Button>
                  </Stack>
                  <DataGrid
                    autoPageSize
                    autoHeight                    
                    rows={toJS(cryptoCoinStore.Items)}
                    columns={columns}
                    editMode="row"
                    slots={{ toolbar: GridToolbar }}
                  />
                </CardContent>
              </Card>
            </Stack>
          </Container>
        );
      }}
    </Observer>
  );
};

export default Devices;
