import styled from 'styled-components';
import Elon from '../../../public/profile/elon.jpeg'


const ContactItem = styled.div`
    display: flex;
    flex-directionn: row;
    border-bottom: 1px solid #f2f2f2;
    background: #fff;
    cursor: pointer;
    padding: 15px 12px;
`;

const ProfileIcon = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 12px;
`;

const ContactName = styled.span`
    font-weight: 600;
    font-size: 16px;
    color: #000;
`;

const MessageText = styled.span`
    font-size: 14px;
    margin-top: 3px;
    color: grey;
`;

const MessageTime = styled.span`
    font-size: 12px;
    color: rgba(0,0,0,0.45);
    white-space: nowrap;
`



const Messages = () => {
    return (
        <ContactItem>
            <ProfileIcon src={Elon} />
            <ContactInfo>
                <ContactName>William</ContactName>
                <MessageText>Agilli ol!</MessageText>
            </ContactInfo>
                <MessageTime>22.01.2023</MessageTime>

        </ContactItem>
    )
}

export default Messages