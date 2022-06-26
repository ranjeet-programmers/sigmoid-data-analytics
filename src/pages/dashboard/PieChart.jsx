import React from "react";
import {
  PieChart as ReChartsPieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import EmptyContainer from "../../components/EmptyContainer";
import LoadingContainer from "../../components/LoadingContainer";

const PieChart = ({ pieChartResponse }) => {
  const { data, isLoading } = pieChartResponse || {};

  const formattedData = data?.length
    ? data.map((row) => ({
        ...row,
        CM001: Number(row["CM001"]),
        CM001_percent: Number(row["CM001_percent"]),
      }))
    : [];

  if (isLoading) return <LoadingContainer />;

  if (!data) return <EmptyContainer message="No Pie Chart Data Available" />;

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <ReChartsPieChart>
        <Pie
          data={formattedData}
          dataKey="CM001"
          nameKey="advertiserId"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        >
          <Tooltip />
          <Legend />
        </Pie>
        <Pie
          data={formattedData}
          dataKey="CM001_percent"
          nameKey="advertiserId"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </ReChartsPieChart>
    </ResponsiveContainer>
  );
};

export default PieChart;
