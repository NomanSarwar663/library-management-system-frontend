import * as React from "react";
// mui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  return (
    <Box width="100%">
      <Container>
        <Box mt="20px" textAlign="center">
          <Typography variant="h2" fontWeight="600">
            Library Management System
          </Typography>
          <Box
            mt="70px"
            mx="auto"
            maxWidth="300px"
            height="auto"
            p="40px"
            border="1px solid black"
          >
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Typography mb="5px" variant="h6" fontWeight="600">
                Login
              </Typography>
              <FormControl sx={{ mb: 4 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Username
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type="text"
                  //   value={values.password}
                  //   onChange={handleChange("password")}
                />
              </FormControl>
              <FormControl sx={{ mb: 4 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  //   type={values.showPassword ? "text" : "password"}
                  //   value={values.password}
                  //   onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                      >
                        {/* {values.showPassword ? (
                          <VisibilityOff />
                        ) : ( */}
                        <Visibility />
                        {/* )} */}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button variant="contained">Login</Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
