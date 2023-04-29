import { styled } from "@mui/system";
import { useState } from "react";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { Interface } from "readline";
import SecurityPasswordView from "../../../components/SecurityPasswordView/SecurityPasswordView";
import { CSSProperties } from "styled-components";
import GeneralUserEdit from "../../../components/GeneralUserEdit/GeneralUserEdit";
import GeneralUserInfo from "../../../components/GeneralUserInfo/GeneralUserInfo";
import { editUser } from "../../../redux/auth.slice";

const StyledDiv = styled("div")`
  flex-grow: 1;
`;

interface FlexProps {
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
}

const Flex = styled("div")<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "strech"};
  justify-content: ${(props) => props.justify || "flex-start"};
`;
function GeneralProfileSettings() {
  const [isEdit, setisEdit] = useState(false);
  const dispatch = useDispatch();
  const handleChangeEdit = () => {
    setisEdit(!isEdit);
  };
  const handleUserUpdate = (updateInfo: any) => {
    dispatch(editUser(updateInfo));
    setisEdit(false);
  	console.log(updateInfo)
  };
  return (
    <StyledDiv>
      <Flex
        justify="space-between"
        align="center"
        style={{ marginBottom: "18px" }}
      >
        <Typography
          variant="h2"
          color="#212121"
          style={{ fontSize: "20px", fontWeight: 500 }}
        >
          General account settings
        </Typography>
        {!isEdit && (
          <Flex
            style={{
              backgroundColor: "#F5F5F5",
              padding: "10px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            <EditIcon onClick={handleChangeEdit}></EditIcon>
          </Flex>
        )}
      </Flex>
      {!isEdit ? <GeneralUserInfo /> : <GeneralUserEdit onSubmit={handleUserUpdate} handleChangeEdit={handleChangeEdit}/>}
    </StyledDiv>
  );
}

export default GeneralProfileSettings;


