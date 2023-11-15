import React, { useEffect } from "react";
import { Observer } from "mobx-react-lite";

import {
  Card,
  CardContent,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";

import { useStores } from "../../config/RootStoreProvider";

import { formatCurrency } from "../../utils/Extensions";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Dashboard: React.FC = () => {
  const { uiStore, cryptoCoinStore } = useStores();

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
                    Crypto Coin(s) Status
                  </Typography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Rank</TableCell>
                          <TableCell align="right">Name</TableCell>
                          <TableCell align="right">Symbol</TableCell>
                          <TableCell align="right">Current Price (USD)</TableCell>
                          <TableCell align="right">% Change (24h)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {cryptoCoinStore.Items.map((row) => (
                          <StyledTableRow key={row.name}>
                            <TableCell component="th" scope="row" align="left">
                              {row.rank}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.symbol}</TableCell>
                            <TableCell align="right">
                              {formatCurrency(uiStore.language, Number(row.price_usd), "USD")}
                            </TableCell>
                            <TableCell align="right">{row.percent_change_24h}</TableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Stack>
          </Container>
        );
      }}
    </Observer>
  );
};

export default Dashboard;
