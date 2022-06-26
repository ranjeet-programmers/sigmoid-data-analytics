import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CardHeader from "@mui/material/CardHeader";
import MainContent from "../../layouts/MainContent";
import DashboardForm from "./DashboardForm";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import TableChart from "./TableChart";
import useDashboard from "./useDashboard";

const Dashboard = () => {
  const {
    searchAction,
    barChartResponse,
    pieChartResponse,
    tableChartResponse,
  } = useDashboard();

  return (
    <MainContent>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: "max-content",
              }}
            >
              <DashboardForm searchAction={searchAction} />
              <Divider sx={{ mt: 1, mb: 2 }} />
              <Box>
                <CardHeader title="Pie Chart" sx={{ width: "100%" }} />
                <PieChart pieChartResponse={pieChartResponse} />
              </Box>
              <Box>
                <CardHeader title="Bar Chart" sx={{ width: "100%" }} />
                <BarChart barChartResponse={barChartResponse} />
              </Box>
              <Box>
                <CardHeader title="Table" sx={{ width: "100%" }} />
                <TableChart tableChartResponse={tableChartResponse} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </MainContent>
  );
};

export default Dashboard;
