import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { cloneDeep } from "lodash";
import {
  useBarChartDataMutation,
  usePieChartDataMutation,
  useTableChartDataMutation,
} from "../../services/sigmoidApi";
import { dateToEpoch } from "../../utils/date";
import {
  BAR_DATA_PAYLOAD,
  PIE_DATA_PAYLOAD,
  TABLE_DATA_PAYLOAD,
} from "../../services/payloadConstants";

const useDashboard = () => {
  const dispatch = useDispatch();
  const [barChartData, barChartResponse] = useBarChartDataMutation();
  const [pieChartData, pieChartResponse] = usePieChartDataMutation();
  const [tableChartData, tableChartResponse] = useTableChartDataMutation();

  const searchAction = useCallback(
    async (values) => {
      const dateRange = {
        startDate: dateToEpoch(values.startDate),
        endDate: dateToEpoch(values.endDate),
      };
      let updatedBarDataPayload = cloneDeep(BAR_DATA_PAYLOAD);
      let updatedPieDataPayload = cloneDeep(PIE_DATA_PAYLOAD);
      let updatedTableDataPayload = cloneDeep(TABLE_DATA_PAYLOAD);
      updatedBarDataPayload.chartObject.requestParam.dateRange = dateRange;
      updatedPieDataPayload.chartObject.requestParam.dateRange = dateRange;
      updatedTableDataPayload.chartObject.requestParam.dateRange = dateRange;

      try {
        await Promise.allSettled([
          barChartData(updatedBarDataPayload),
          pieChartData(updatedPieDataPayload),
          tableChartData(updatedTableDataPayload),
        ]);
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  return {
    searchAction,
    barChartResponse,
    pieChartResponse,
    tableChartResponse,
  };
};

export default useDashboard;
