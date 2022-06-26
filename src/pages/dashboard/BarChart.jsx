import React from "react";
import {
  BarChart as ReChartBarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import EmptyContainer from "../../components/EmptyContainer";
import LoadingContainer from "../../components/LoadingContainer";

const BarChart = ({ barChartResponse }) => {
  const { data, isLoading } = barChartResponse || {};

  if (isLoading) return <LoadingContainer />;

  if (!data) return <EmptyContainer message="No Bar Chart Data Available" />;

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <ReChartBarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="appSiteId" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="impressions_offered" fill="#8884d8" />
      </ReChartBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
