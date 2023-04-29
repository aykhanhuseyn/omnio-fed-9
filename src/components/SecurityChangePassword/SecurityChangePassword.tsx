import { Button, FormControl, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { CSSProperties } from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/auth.slice";
import { InputAdornment, IconButton } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import React from "react";

interface FlexProps {
  gap?: CSSProperties["gap"];
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  background?: CSSProperties["backgroundColor"];
}
const Flex = styled("div")<FlexProps>`
  display: flex;
  background-color: "#fafafa";
  padding: "12 0 20 0";
  gap: ${(props) => props.gap || "0"};
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "flex-start"};
`;
interface SecurityChangePasswordProps {
  onSubmit: (pass: string) => void;
}
function SecurityChangePassword({ onSubmit }: SecurityChangePasswordProps) {
  const userInfo = useSelector(userSelector);
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showReTypeNewPassword, setShowReTypeNewPassword] =
    React.useState(false);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const currentPassword = data.get("currentPassword") as string;
    const password = data.get("newPassword") as string;
    const confirmPassword = data.get("reTypenewPassword") as string;

    if (userInfo.password !== currentPassword) return "error";

    if (password !== confirmPassword) return "eyni deyiller axi";

    onSubmit(password);
  };
//shifre 123456
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Flex justify="center">
          <FormControl>
            <TextField
              sx={{ marginBottom: "24px" }}
              label="Current password"
              size="medium"
              variant="outlined"
              name="currentPassword"
              type={showCurrentPassword ? "text" : "password"}
              id="currentPassword"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {" "}
                    <IconButton
                      onClick={() => {
                        setShowCurrentPassword(!showCurrentPassword);
                      }}
                    >
                      {showCurrentPassword ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>

            <TextField
              sx={{ marginBottom: "24px" }}
              id="newPassword"
              label="New password"
              size="medium"
              variant="outlined"
              name="newPassword"
              type={showNewPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {" "}
                    <IconButton
                      onClick={() => {
                        setShowNewPassword(!showNewPassword);
                      }}
                    >
                      {showNewPassword ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              sx={{ marginBottom: "24px" }}
              id="reTypeNewPassword"
              label="Re-type new password"
              size="medium"
              variant="outlined"
              name="reTypenewPassword"
              type={showReTypeNewPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {" "}
                    <IconButton
                      onClick={() => {
                        setShowReTypeNewPassword(!showReTypeNewPassword);
                      }}
                    >
                      {showReTypeNewPassword ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              style={{ width: "fit-content", color: "#fff" }}
              type="submit"
              color="success"
              variant="contained"
            >
              Save
            </Button>
          </FormControl>
        </Flex>
      </form>
    </>
  );
}
export default SecurityChangePassword;
