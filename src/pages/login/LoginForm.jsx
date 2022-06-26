import React from "react";
import { Field, reduxForm } from "redux-form";
import { Alert, Avatar, Box, Snackbar, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./loginSlice";
import { Checkbox, TextField } from "../../components/form";
import { LOGIN_FORM } from "../../constants/formNameConstants";
import { useLoginMutation } from "../../services/sigmoidApi";

const validate = (values) => {
  const errors = {};
  const requiredFields = ["email", "password"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const LoginForm = ({ handleSubmit, pristine, invalid, submitting }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading, error }] = useLoginMutation();
  const [open, setOpen] = React.useState(false);

  const handleLogin = async (value) => {
    try {
      const userCredential = await login(value).unwrap();
      console.log("userCredential", userCredential);
      dispatch(setCredentials(userCredential));
      navigate("/");
    } catch (err) {
      setOpen(true);
      console.log("err", err);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit(handleLogin)} sx={{ mt: 1 }}>
        <Field
          name="email"
          component={TextField}
          label="Email Address"
          margin="normal"
          required
          fullWidth
          autoFocus
        />
        <Field
          name="password"
          component={TextField}
          label="Password"
          margin="normal"
          type="password"
          required
          fullWidth
        />
        <Field
          name="rememberMe"
          component={Checkbox}
          label="Remember me"
          color="primary"
        />
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={pristine || invalid || submitting}
          loadingPosition="end"
          loading={isLoading}
        >
          Login
        </LoadingButton>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error?.data?.statusMessage ?? "Login failed"}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default reduxForm({
  form: LOGIN_FORM,
  initialValues: { rememberMe: true },
  validate,
})(LoginForm);
