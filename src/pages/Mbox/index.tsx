import React, { useState } from "react";
import ContactList from "./ContactList";
import Conversation from "./Conversation";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  // flex-direction: row;
  width: 100%;
  height: 100vh;
`;
const Placeholder = styled.div`
  background-color: #fff;
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  gap: 10px;
`;

const ChatPlaceholder = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  obeject-fit: contain;
`;

function index() {
  const [selectChat, setChat] = useState();
  return (
    <Container>
      <ContactList setChat={setChat} />
      {selectChat ? (
        <Conversation selectChat={selectChat}/>
      ) : (
        <Placeholder>
          <ChatPlaceholder src="/profile/Screenshot (7).png" />
          
        </Placeholder>
      )}
    </Container>
  );
}

export default index;
