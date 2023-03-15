import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import QuestionAnswer from "@mui/icons-material/QuestionAnswer";
import { Form } from "./StyledForm";
import { Header } from "./StyledForm";
import { logIn } from "../../redux/auth.slice";
import React from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { object, string, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginUser } from "../../models";
import { useForm } from "react-hook-form";
import { loginSelector } from "../../redux/auth.slice";

// const passwordSpecialChars = ["!", "@", "#", "$", "%", "&"];
const schema = object().shape({
  username: string()
    .required("Username is required")
    .matches(/[a-z0-9]*/, "Username is not valid")
    .min(5, "Username is too short")
    .max(20, "Username is too long"),
  password: string()
    .required("Password is required")
    .min(4, "Password is too short")
    .max(50, "Password is too long"),
  // .test({
  //   name: "passwordSpecialChars",
  //   message: "Add special characters",
  //   test: (value = "") => {
  //     return [...value].some((char) => passwordSpecialChars.includes(char));
  //   },
  // })
});

function LoginForm() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(loginSelector);

  const { register, handleSubmit, formState } = useForm<LoginUser>({
    mode: "onChange",
    shouldFocusError: true,
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(logIn(data));
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#EEE3F4" }}>
      <img
        src="../shape_1.png"
        alt="vector"
        style={{ position: "absolute", left: "34%", top: "16%" }}
      />
      <Form
        autoComplete="off"
        height="auto"
        width="340px"
        left="50%"
        right="50%"
        position="relative"
        padding="20px"
        index="99"
        transform="translate(-50%,50%)"
        borderRadius="8px"
        color="#fff"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Header justify="center" align="center" padding="19px">
          <QuestionAnswer sx={{ width: "60px", height: "69px" }} />
          <Typography variant="h4" color="text.primary" component="h2">
            Omnio
          </Typography>
        </Header>
        <FormControl>
          <TextField
            size="small"
            id="username"
            label="Username"
            variant="outlined"
            type="text"
            {...register("username")}
            error={Boolean(formState?.errors?.username)}
            helperText={formState?.errors?.username?.message ?? ""}
            sx={{ marginBottom: "30px", width: "268px" }}
          />
        </FormControl>

        <FormControl
          variant="outlined"
          sx={{ marginBottom: "34px", width: "268px" }}
        >
          <TextField
            label="Password"
            size="small"
            type={showPassword ? "text" : "password"}
            id="passwordInput"
            {...register("password")}
            error={Boolean(formState?.errors?.password)}
            helperText={formState?.errors?.password?.message ?? ""}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {" "}
                  <IconButton
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? (
                      <VisibilityOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
        </FormControl>

        <FormGroup>
          <FormControlLabel
            {...register("remember")}
            control={<Checkbox />}
            name="remember"
            label="Remember me"
            sx={{ marginBottom: "20px" }}
            color="grey.darken-2"
          />
        </FormGroup>

        <Button
          disableElevation
          type="submit"
          variant="contained"
          sx={{ width: "268px" }}
        >
          Login
        </Button>
      </Form>

      <img
        src="../shape_2.png"
        alt="vector"
        style={{ position: "absolute", right: "30%", top: "60%" }}
      />
    </div>
  );
}
export default LoginForm;
