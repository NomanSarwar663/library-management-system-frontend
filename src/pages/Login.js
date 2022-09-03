import * as React from "react";
// mui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [ userName, setUserName ] = React.useState("");
  const [ password, setPassword ] = React.useState("");
  const [ showPassword, setShowPassword ] = React.useState(false);

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
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  id="username"
                  type="text"
                  value={userName}
                  onChange={(x) => setUserName(x)}
                />
              </FormControl>
              <FormControl sx={{ mb: 4 }} variant="standard">
                <InputLabel htmlFor="upassword">Password</InputLabel>
                <Input
                  id="upassword"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(x) => setPassword(x)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(() => !showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
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
