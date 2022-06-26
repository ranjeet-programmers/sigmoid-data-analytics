import moment from "moment";
export const epochToDate = (epoch, formateString = "YYYY-MM-DD") => {
  const numericEpoch = parseInt(epoch);

  return moment(new Date(numericEpoch)).format(formateString);
};

export const dateToEpoch = (date) => {
  return new Date(date).getTime().toString();
};
