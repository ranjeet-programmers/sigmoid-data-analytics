import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import LoadingContainer from "../../components/LoadingContainer";
import EmptyContainer from "../../components/EmptyContainer";

const TableChart = ({ tableChartResponse }) => {
  const { data, isLoading } = tableChartResponse || {};

  const columns = [
    { field: "publisherId", headerName: "Publisher Id", width: 500 },
    {
      field: "impressions_offered",
      headerName: "Impressions Offered",
      width: 500,
    },
  ];

  if (isLoading) return <LoadingContainer />;

  if (!data) return <EmptyContainer message="No Table Data Available" />;

  return (
    <div style={{ height: 400, width: "100%" }}>
      {data?.length && (
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={20}
          getRowId={(row) => row.publisherId}
        />
      )}
    </div>
  );
};

export default TableChart;
