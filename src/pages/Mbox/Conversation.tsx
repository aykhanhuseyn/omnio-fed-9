import styled from "styled-components";
import Elon from "../../../public/profile/elon.jpeg";
import Jeff from "../../../public/profile/jeff.jpeg";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { messagesList } from '../../data/userList'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex: 3;
  background: #f7f8fd;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
  padding: 10px;
`;


const ContactInfo = styled.div`
  display: flex;
  flex-direction: colmumn;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50px;
`;

const ProfileName = styled.span`
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
`;

const RightSide = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

const BgIcon = styled.div`
  padding: 7px;
  background: #f2f4ff;
  border-radius: 50%;
`;

const ProfilePhoto = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const ProfileBar = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px 30px;
  border-radius: 12px;
  background: #f2f4ff;
`;

const ChatBox = styled.div`
  display: flex;
  background: #f0f0f0;
  padding: 10px;
  align-items: center;
  bottom: 0;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #fff;
  border-radius: 16px;
  width: 1100px;
  margin-left: 10px;
  padding: 5px 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  margin-left: 10px;
`;

const EmojiImage = styled.img`
  width: 28px;
  height: 28px;
  opacity: 0.4;
  cursor: pointer;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #FAFAFA;
  overflow-y: auto;
`;

const MessageDiv = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  margin: 5px 15px;
`;

const Message = styled.div`
  background: ${(props) => (props.isYours ? "#574B90" : "#EEE3F4")};
  max-width: 50%;
  color: #303030;
  padding: 8px 10px;
  font-size: 14px;
  border-radius: 4px;
  color: ${(props) => (props.isYours ? "#fff" : "#000")};
`;

function Conversation() {
  
  return (
    <Container>
      <ProfileHeader>

        <ContactInfo>
          <ProfileImage src={Elon}/>
          <ProfileName>William</ProfileName>
        </ContactInfo>

        <RightSide>
          <ProfileBar>
            <ProfilePhoto src={Jeff} />
            <ProfileName
              style={{
                fontWeight: "200",
                marginRight: "10px",
                marginBottom: "5px",
              }}
            >
              Dolores Abernathy
            </ProfileName>
            <a href="#">
              <ArrowDropDownOutlinedIcon />
            </a>
          </ProfileBar>

          <BgIcon>
            <CheckOutlinedIcon />
          </BgIcon>

          <BgIcon>
            <SearchOutlinedIcon />
          </BgIcon>
        </RightSide>
      </ProfileHeader>

      <MessageContainer>
        {messagesList.map((messageData) => (
        <MessageDiv isYours={messageData.senderID === 0}>
        <Message isYours={messageData.senderID === 0}>{messageData.text}</Message>
      </MessageDiv>
        ))}
          
      </MessageContainer>
      <ChatBox>
        <SearchContainer>
          <EmojiImage src={"/data.svg"} />
          <SearchInput placeholder="Type your message" />
        </SearchContainer>
      </ChatBox>
    </Container>
  );
}

export default Conversation;
