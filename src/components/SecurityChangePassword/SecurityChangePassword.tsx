import { Button, FormControl, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { CSSProperties } from "styled-components"; 
import {useState} from 'react';


interface FlexProps {
  gap?: CSSProperties["gap"];
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  background?: CSSProperties["backgroundColor"];
}
const Flex = styled("div")<FlexProps>`
  display: flex;
  background-color: "#FAFAFA";
  padding: "12 0 20 0";
  gap: ${(props) => props.gap || "0"};
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "flex-start"};
`;

function SecurityChangePassword() {

    const [pass; setPass] = useState ('')
    const handleFormSubmit =(e) =>{
        e.preventDefault()
        onSubmit (pass)
    }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Flex justify="center">
          <FormControl>
            <TextField
              type="password"
              label="current password"
              name="currentPassword"
              size="small"
              variant="outlined"

            >
              {" "}
            </TextField>
            <TextField
              style={{ marginBottom: "35px" }}
              size="small"
              variant="outlined"
              placeholder="New password"
              onChange={(e) =>setPass (e.target.value)}
            ></TextField>
            <TextField
              style={{ marginBottom: "35px" }}
              size="small"
              variant="outlined"
              placeholder="Re-type new password"
              onChange={(e) =>setPass (e.target.value)}
            ></TextField>
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
