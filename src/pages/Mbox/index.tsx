import { useEffect, useState } from "react";
import ContactList from "./ContactList";
import Conversation from "./Conversation";
import styled from "styled-components";

import { Comment } from  'react-loader-spinner'


const Container = styled.div`
  display: flex;
  flex-direction: row;
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

const BgLogoOmnio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  background-color: #EEE3F4;
  border-radius: 50%;
`


const LogoOmnio = styled.img`
  background-color: transparent;
  width: 42px;
  height: 42px;
`;

const TextLogo = styled.p`
  color: #574B90;
`

const LoadingLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

`

function index() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const [selectChat, setChat] = useState();
  return (

    <LoadingLogo>
    {
		loading ? 

		<Comment
  visible={true}
  height="80"
  width="80"
  ariaLabel="comment-loading"
  wrapperStyle={{}}
  wrapperClass="comment-wrapper"
  color="#fff"
  backgroundColor="#F4442E"
/>
		
		:
    <Container>
      <ContactList setChat={setChat} />
      {selectChat ? (
        <Conversation selectChat={selectChat}/>
      ) : (
        <Placeholder>
          
          <BgLogoOmnio>
          <LogoOmnio src="profile/LogoOmnio2.png" />
          </BgLogoOmnio>
          <TextLogo>Please select a chat to see the content</TextLogo>
        </Placeholder>
      )}
      
   
      

    </Container>
	}
    </LoadingLogo>
  );
}

export default index;
