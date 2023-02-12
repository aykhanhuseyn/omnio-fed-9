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
  const [isEdit, setisEdit ]=useState(false);
  const dispatch=useDispatch();
  const handleChangeEdit = () => {
    setisEdit (!isEdit);
  };
  
  return (
    <StyledDiv>
      <Flex
      justify='space-between'
      align="center"
      style={{marginBottom:'18px'}}>

      <Typography
        variant="h2"
        color="common.black"
        style={{ fontSize: "26px", fontWeight: 600 }}
      >
        General account settings
      </Typography>
      
      <Flex
      style={{
        backgroundColor:"#F5F5F5",
        padding:"10px",
        borderRadius:"50%",
        cursor:'pointer',
      }}>

      </Flex>
      </Flex>
      <GeneralUserInfo/>
      <GeneralUserEdit/>
    </StyledDiv>
  
  );
}

export default GeneralProfileSettings;
