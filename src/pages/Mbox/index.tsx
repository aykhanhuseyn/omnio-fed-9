import ContactList from './ContactList'
import Conversation from './Conversation'
import styled from 'styled-components';



const Container = styled.div`
  display: flex;
  // flex-direction: row;
  width: 100%;
  height: 100vh;
`;

function index() {
  return (
    
    <Container>
    <ContactList />
    <Conversation />
    </Container>
    
    

  )
}

export default index
