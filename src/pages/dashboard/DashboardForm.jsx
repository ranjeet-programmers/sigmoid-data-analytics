import React, { useEffect } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { DASHBOARD_FORM } from "../../constants/formNameConstants";
import { DateField } from "../../components/form";
import { useGetDateRangeQuery } from "../../services/sigmoidApi";
import { epochToDate } from "../../utils/date";

const DashboardForm = ({ searchAction, handleSubmit, invalid, submitting }) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetDateRangeQuery();

  useEffect(() => {
    if (data) {
      const normalizeValue = {
        startDate: epochToDate(data.startDate),
        endDate: epochToDate(data.endDate),
      };
      dispatch(initialize(DASHBOARD_FORM, normalizeValue));
    }
  }, [dispatch, data]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(searchAction)}
      sx={{
        mt: 1,
        mb: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Field name="startDate" component={DateField} label="Start Date" />
      <Field name="endDate" component={DateField} label="End Date" />
      <Button
        type="submit"
        variant="contained"
        disabled={invalid || isLoading || submitting}
      >
        View Dashboard
      </Button>
    </Box>
  );
};

export default reduxForm({ form: DASHBOARD_FORM })(DashboardForm);
