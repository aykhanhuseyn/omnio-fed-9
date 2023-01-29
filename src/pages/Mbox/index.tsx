import ContactList from './ContactList'
import Conversation from './Conversation'
import Messages from './Messages'
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
`;

function index() {
  return (
    
    <Container>
    <Conversation />
    <Messages />
    <ContactList />
    </Container>
    

  )
}

export default index
