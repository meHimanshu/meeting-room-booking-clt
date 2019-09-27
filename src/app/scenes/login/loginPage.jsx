import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Container,
  InputAdornment,
  IconButton
} from "@material-ui/core/";
import { loginStyles } from "./style";
import { LockOutlined, VisibilityOff, Visibility } from "@material-ui/icons/";
import { Redirect } from "react-router-dom";

function SignIn(props) {
  const { classes } = props;

  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const hanleSubmitClick = () => {
    if (
      true
      // values.username === "globa.admin@gmail.com" &&
      // values.password === "12345678"
    ) {
      localStorage.setItem("isAuthenticated", true);
      props.history.push("/dashboard");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            fullWidth
            required
            onChange={handleChange("username")}
            value={values.username}
            variant="outlined"
            margin="normal"
            id="username"
            label="Email Address"
            name="username"
            autoComplete="email"
          />
          <TextField
            required
            fullWidth
            type={values.showPassword ? "text" : "password"}
            onChange={handleChange("password")}
            value={values.password}
            variant="outlined"
            margin="normal"
            name="password"
            label="Password"
            id="password"
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={hanleSubmitClick}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default withStyles(loginStyles)(SignIn);
