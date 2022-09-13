import React, { useState } from "react";
// notistack
import { useSnackbar } from "notistack";
import {
  Stack,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Alert,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
// formik
import { useFormik, Form, FormikProvider } from "formik";
// Yup
import * as Yup from "yup";
// hooks
import useAuth from "../../Hooks/useAuth";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { signIn } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  // validation schema
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("The Email address field is required."),
    password: Yup.string().required("The Password field is required."),
  });

  // formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      try {
        const result = await signIn(values.email, values.password);
        if (result && result.status === "Success") {
          enqueueSnackbar("Login success!", { variant: "success" });
        } else {
          enqueueSnackbar("Login failed!", { variant: "error" });
          setErrors({ afterSubmit: result?.message || "Login failed" });
        }
      } catch (error) {
        enqueueSnackbar("Login failed!", { variant: "error" });
        setSubmitting(false);
        setErrors({ afterSubmit: error.message });
      }
    },
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={2} alignItems="center" sx={{ width: "100%" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "700", textAlign: "center" }}
            color="primary.main"
          >
            LIBRARY MANAGEMENT SYSTEM
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: "700" }}
            color="text.primary"
          >
            Log In
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "500" }}
            color="text.secondary"
          >
            Welcome back, you've been missed!
          </Typography>
          <Stack width="100%">
            {errors.afterSubmit && (
              <Alert severity="error">{errors.afterSubmit}</Alert>
            )}
          </Stack>

          <Stack spacing={2} sx={{ width: "100%" }}>
            <TextField
              variant="outlined"
              placeholder="Your Email"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              sx={{
                [`& fieldset`]: {
                  borderRadius: 3,
                },
                "&:focus": {
                  backgroundColor: "blue",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ borderRadius: "30px 30px 0 0" }}
                  >
                    <AlternateEmailIcon sx={{ fontSize: 20 }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              placeholder="Password"
              {...getFieldProps("password")}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              type={showPassword ? "text" : "password"}
              sx={{
                [`& fieldset`]: {
                  borderRadius: 3,
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ borderRadius: 3 }}>
                    <LockIcon sx={{ fontSize: 20 }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start" sx={{ borderRadius: 3 }}>
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Button
              variant="contained"
              disableElevation
              type="submit"
              sx={{
                borderRadius: 3,
                textTransform: "capitalize",
                height: "50px",
              }}
            >
              Log In
            </Button>
            <Typography
              variant="body2"
              sx={{ fontWeight: "500", textAlign: "center", mt: 1 }}
              color="text.secondary"
            >
              Don't have an acount?{" "}
              <Link to="/auth/register">Register here</Link>
            </Typography>
          </Stack>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
