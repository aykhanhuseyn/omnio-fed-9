import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import Messages from "./Messages";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex: 1;
  padding: 0px 20px;
  border-right: 1px solid rgba(0,0,0,0.14);
`;

const LogoInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: #fff;
  padding: 10px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

const BgDotIcon = styled.div`
  padding: 5px;
  background: #f2f4ff;
  border-radius: 50%;
`;


const SearchBox = styled.div`
  display: flex;
  background: #fff;
  padding: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #f2f4ff;
  border-radius: 16px;
  width: 300px;
  margin-left: 10px;
  padding 5px 10px;
`;

const SearchLogo = styled.span`
  witdh: 28px;
  height: 28px;
`;

const SearchInput = styled.input`
  width: 100%;
  background: #f2f4ff;
  border: none;
  outlien: none;
  font-size: 14px;
`;

const ContactList = () => {
  return (
    <Container>
      <LogoInfoDiv>
        <Logo>Chats</Logo>
        <BgDotIcon>
          <a href="#">
          <BsThreeDotsVertical style={{fontSize: '20px'}} />
          </a>
        </BgDotIcon>
      </LogoInfoDiv>

      <SearchBox>
        <SearchContainer>
          <SearchLogo>
            <AiOutlineSearch style={{ padding: "5px" }} />
          </SearchLogo>
          <SearchInput placeholder="Search" />
        </SearchContainer>
      </SearchBox>

      <Messages />
      <Messages />
      <Messages />
      <Messages />
    </Container>
  );
};

export default ContactList;
