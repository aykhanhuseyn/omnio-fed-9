import styled from 'styled-components'

const ContactItem = styled.div`
position: relative;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #f2f2f2;
    background: #fff;
    cursor: pointer;
    padding: 16px 12px;

    &:hover{
        background: #000;
    }
`;

const ProfileImage = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%; 
`;

const BgProfileIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 28px;
    height: 28px;
    left: 46px;
    top: 40px;
    background-color: #3B5998;
    border-radius: 50%;
    border: 3px solid #fff;
`

const ProfileIcon = styled.img`

`

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
    overflow: auto;
`;

const MessageTime = styled.span`
    font-size: 12px;
    color: rgba(0,0,0,0.45);
    white-space: nowrap;
`



const Queue = (props: any) => {
    const { userData, setChat } = props;
    return (
        <ContactItem onClick={() => setChat(userData)} >
            <ProfileImage src={userData.profilePic} />
            <BgProfileIcon >
            <ProfileIcon src={userData.iconPic} />
            </BgProfileIcon>

            <ContactInfo>
                <ContactName>{userData.name}</ContactName>
                <MessageText>{userData.lastText}</MessageText>
            </ContactInfo>
                

        </ContactItem>
    )
}

export default Queue