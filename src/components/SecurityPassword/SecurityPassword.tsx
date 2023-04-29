import { padding, styled } from "@mui/system";
import { CSSProperties } from "styled-components";
import SecurityPasswordView from "../SecurityPasswordView/SecurityPasswordView";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../redux/auth.slice";
import SecurityChangePassword from "../SecurityChangePassword/SecurityChangePassword";
import { User } from "../../models";

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
function SecurityPassword() {
  const [isEdited, setIsEdited] = useState(false);
  const dispatch = useDispatch();
  const handleChangeEdit = () => {
    setIsEdited(!isEdited);
  };
  const handleUpdatePassword = (password: string) => {
    dispatch(editUser({ password }));
    setIsEdited(false);
  };

  return (
    <>
      <Flex justify="space-between" align="center" style={{ padding: "20px" }}>
        <SecurityPasswordView />
        <Flex
          style={{
            backgroundColor: "#F5F5F5",
            padding: "9px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          {!isEdited ? (
            <EditIcon onClick={handleChangeEdit} />
          ) : (
            <ClearIcon onClick={handleChangeEdit} />
          )}
        </Flex>
      </Flex>
      {isEdited && <SecurityChangePassword onSubmit={handleUpdatePassword} />}
    </>
  );
}
export default SecurityPassword;
