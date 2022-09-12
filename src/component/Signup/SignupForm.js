import React from "react";
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
import { Link, useNavigate } from "react-router-dom";
// formik
import { useFormik, Form, FormikProvider } from "formik";
// Yup
import * as Yup from "yup";
// hooks
import useAuth from "../../Hooks/useAuth";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const SignupForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // validation schema
  const LoginSchema = Yup.object().shape({
    firstName: Yup.string().required("The first name field is required."),
    lastName: Yup.string().required("The last name field is required."),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("The Email address field is required."),
    password: Yup.string().required("The Password field is required."),
  });

  // formik
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      try {
        const result = await signUp(values);
        if (result && result.status === "Success") {
          enqueueSnackbar("Signup success!", { variant: "success" });
          await delay(200);
          navigate("/books");
        } else {
          enqueueSnackbar("Signup failed!", { variant: "error" });
          setErrors({ afterSubmit: result?.message || "Login failed" });
        }
      } catch (error) {
        resetForm();
        setSubmitting(false);
        enqueueSnackbar("Signup failed!", { variant: "error" });
        setErrors({ afterSubmit: error.message });
      }
    },
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack
          spacing={2}
          alignItems="center"
          sx={{ width: { xs: "100%", md: "100%" } }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "700" }}
            color="primary.main"
          >
            LIBRARY MANAGEMENT SYSTEM
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: "700" }}
            color="text.primary"
          >
            Register
          </Typography>
          <Stack width="100%">
            {errors.afterSubmit && (
              <Alert severity="error">{errors.afterSubmit}</Alert>
            )}
          </Stack>

          <Stack direction="row" spacing={2} width="100%">
            <TextField
              variant="outlined"
              placeholder="First Name"
              {...getFieldProps("firstName")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              sx={{
                width: "50%",
                [`& fieldset`]: {
                  borderRadius: 3,
                },
              }}
            />
            <TextField
              variant="outlined"
              placeholder="Last Name"
              {...getFieldProps("lastName")}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              sx={{
                width: "50%",
                [`& fieldset`]: {
                  borderRadius: 3,
                },
              }}
            />
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
              Register
            </Button>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%" }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "500" }}
              color="text.secondary"
            >
              Already have an acount? <Link to="/auth/login">Signin</Link>
            </Typography>
          </Stack>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default SignupForm;
