import { find } from 'lodash';
import styled from 'styled-components';
import { ContactListUser, messengerData } from '../../data/userList';

const ContactItem = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid #f2f2f2;
	background: #fff;
	cursor: pointer;
	padding: 16px 12px;

	&:hover {
		background: #f0f0f0;
	}
`;

const ProfileImage = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
`;

type BgProfileIconProps = {
	bg: string;
};
const BgProfileIcon = styled.div<BgProfileIconProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 28px;
	height: 28px;
	left: 46px;
	top: 40px;
	background-color: ${(props) => props.bg};
	border-radius: 50%;
	border: 1px solid #fff;
`;

const ProfileIcon = styled.img`
	width: 16px;
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
	overflow: auto;
`;

const MessageTime = styled.span`
	font-size: 12px;
	color: rgba(0, 0, 0, 0.45);
	white-space: nowrap;
`;

const Messages = (props: { userData: ContactListUser; setChat: Function }) => {
	const { userData, setChat } = props;
	return (
		<ContactItem onClick={() => setChat(userData)}>
			<ProfileImage src={userData.profilePic} />
			<BgProfileIcon
				bg={find(messengerData, { name: userData.messenger })?.color!}
			>
				<ProfileIcon
					src={find(messengerData, { name: userData.messenger })?.icon}
				/>
			</BgProfileIcon>

			<ContactInfo>
				<ContactName>{userData.name}</ContactName>
				<MessageText>{userData.lastText}</MessageText>
			</ContactInfo>
			<MessageTime>{userData.lastTextTime}</MessageTime>
		</ContactItem>
	);
};

export default Messages;
