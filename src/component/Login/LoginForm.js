import * as React from "react";
// mui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginForm = () => {
  const [userName, setUserName] = React.useState("nomansarwar");
  const [password, setPassword] = React.useState("123456");
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleVisibility = () => {
    setShowPassword(() => !showPassword);
  };

  const handleUserName = (x) => {
    console.log("The x username is", x);
    setUserName(x);
  };

  const handlePassword = (x) => {
    console.log("The x pass is", x);
    setPassword(x);
  };

  return (
    <Box
      maxWidth="300px"
      height="auto"
      p="40px"
      border="1px solid black"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Typography mb="5px" variant="h6" fontWeight="600">
        Login
      </Typography>
      <FormControl sx={{ mb: 4 }} variant="standard">
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          id="username"
          type="text"
          value={userName}
          onChange={handleUserName}
        />
      </FormControl>
      <FormControl sx={{ mb: 4 }} variant="standard">
        <InputLabel htmlFor="upassword">Password</InputLabel>
        <Input
          id="upassword"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleVisibility}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button variant="contained">Login</Button>
    </Box>
  );
};

export default LoginForm;
