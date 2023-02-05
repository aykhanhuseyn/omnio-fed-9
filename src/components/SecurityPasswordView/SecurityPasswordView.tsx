import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import KeyIcon from "@mui/icons-material/Key";
import { CSSProperties } from "styled-components";

interface FlexProps {
  gap?: CSSProperties["gap"];
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  background?: CSSProperties["backgroundColor"];
}

const Flex = styled("div")<FlexProps>`
  display: flex;
  gap: ${(props) => props.gap || "0"};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  background-color: ${(props) => props.background || "white"};
`;

function SecurityPasswordView() {

  return (
    <Flex align="center" gap="15px">
      <KeyIcon />
      <Flex direction="column" gap="15px">
        <Typography
          style={{ color: "#424242", fontWeight: "400", fontSize: "16px" }}
          variant="h3"
        >
          Change password
        </Typography>

        <Typography
          style={{ color: "#757575", fontWeight: "400", fontSize: "14px" }}
        >
          It's a good idea to use a strong password that you're not using
          elsewhere
        </Typography>
      </Flex>
    </Flex>
  );
}
export default SecurityPasswordView;
