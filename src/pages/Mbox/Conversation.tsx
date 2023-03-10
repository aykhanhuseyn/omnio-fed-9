import { useState } from 'react';
import { find } from 'lodash';
import styled from 'styled-components';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
	ContactListUser,
	messagesList,
	messengerData,
} from '../../data/userList';
import Picker from 'emoji-picker-react';

// components/shared/Container.tsx
// components/MBox/Container.tsx
const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	flex: 3;
	background: #f7f8fd;
`;

// styled-components
// type
// styled

// components/MBox/YourComponent/*
// Component
// styles
// index.ts
// YourComponent.tsx
// YourComponentHelperComponent1.tsx
// YourComponentHelperComponent2.tsx
// YourComponentHelperComponent3.tsx

// components/MBox/ProfileHeader/*
// index.ts
// ProfileHeader.tsx
// ContactInfo.styled.tsx
// ProfileImage.styled.tsx
// ProfileName.styled.tsx
const ProfileHeader = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid lightgray;
`;

const ContactInfo = styled.div`
	flex: 0.9;
	gap: 10px;
`;

const ProfileImage = styled.img`
	width: 45px;
	height: 45px;
	border-radius: 50px;
	margin: 15px;
`;

const ProfileName = styled.span`
	font-size: 15px;
	font-weight: bold;
	margin: 10px 5px;
`;

type SearchContainerProps = {
	isSearching: boolean;
};
const SearchContainer = styled.div<SearchContainerProps>`
	position: relative;
	width: ${(props) => (props.isSearching ? 360 : 48)}px;
	height: 48px;
	background-color: #f2f2f2;
	border-radius: 26px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 5px;
	transition: 0.3s all ease;
	margin-left: 20px;
`;

const SearchInput = styled.input`
	padding-left: 48px;
	border: none;
	outline: none;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: transparent;
	font-size: 16px;
	border: 1px solid transparent;

	&:focus {
		border-color: rgba(0, 0, 0, 0.3);
		border-radius: 26px;
	}
`;

const IconButton = styled.button`
	position: relative;
	width: 36px;
	height: 36px;
	border: none;
	z-index: 1;
	cursor: pointer;
	background: none;

	&:hover {
		opacity: 0.4;
		&::after {
			opacity: 1;
			transform: scale(1);
		}
	}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		border-radius: 50%;
		z-index: -1;
		background-color: #000;
		transition: 0.2s ease;
		transform: scale(0.6);
		opacity: 0;
	}
`;

const HeaderIconDiv = styled.div`
	display: flex;
	align-items: center;
	margin-top: 5px;
`;

type HeaderIconProps = {
	bg: string;
};
const HeaderIcon = styled.img<HeaderIconProps>`
	border-radius: 50%;
	width: 15px;
	height: 15px;
	background-color: ${(props) => props.bg};
	object-fit: contain;
	border: 1px solid #fff;
`;

const IconName = styled.span`
	color: #3b5998;
	font-family: 'Roboto';
	font-weight: 500;
	font-size: 12px;
`;

const RightSide = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

const BgIcon = styled.div`
	padding: 7px;
	background: #f2f4ff;
	border-radius: 50%;
`;

const ProfilePhoto = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
`;

const ChatBox = styled.div`
	display: flex;
	background-color: #fff;
	padding: 10px;
	align-items: center;
	bottom: 0;
`;

const MessageInputContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	background-color: #f5f5f5;
	border-radius: 28px;
	width: 1000px;
	height: 56px;
	margin-left: 10px;
`;

const MessageInput = styled.input`
	width: 100%;
	background-color: #f5f5f5;
	border: none;
	outline: none;
	font-size: 15px;
	margin-left: 10px;
`;

const AttachImage = styled.img`
	width: 24px;
	height: 13px;
	cursor: pointer;
`;

const AttachInput = styled.input`
	display: none;
`;

const SendImage = styled.img`
	margin-left: 10px;
	cursor: pointer;
`;

const MessageContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	background: #fafafa;
	overflow-y: auto;
`;

const MessageDiv = styled.div<{ isYours: boolean }>`
	display: flex;
	justify-content: ${(props) => (props.isYours ? 'flex-end' : 'flex-start')};
	margin: 5px 15px;
`;

const Message = styled.div<{ isYours: boolean }>`
	background: ${(props) => (props.isYours ? '#574B90' : '#EEE3F4')};
	max-width: 50%;
	color: #303030;
	padding: 35px 16px;
	font-size: 14px;
	border-radius: 12px 12px 0px 12px;
	color: ${(props) => (props.isYours ? '#fff' : '#000')};
`;

const MessageTime = styled.p`
	margin-top: 60px;
	font-size: 12px;
	color: gray;
`;

function Conversation(props: { selectChat: ContactListUser }) {
	const [user, setUser] = useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setUser(event.target.value);
	};

	const [isActive, setIsActive] = useState(false);
	const toggleSearch = () => {
		setIsActive(!isActive);
	};

	const { selectChat } = props;
	const [text, setText] = useState('');
	const [messageList, setMessageList] = useState(messagesList);
	// const onEmojiClick = (event, emoji) => {}
	const onEnterPress = (event: any) => {
		if (event.key === 'Enter') {
			const messages = [...messageList];
			messages.push({
				id: 0,
				messageType: 'TEXT',
				text,
				senderID: 0,
				addedOn: '12.02 PM',
			});
			setMessageList(messages);
			setText('');
		}
	};

	return (
		<Container>
			<ProfileHeader>
				<ProfileImage src={selectChat.profilePic} />
				<ContactInfo>
					<ProfileName>{selectChat.name}</ProfileName>

					<HeaderIconDiv>
						<HeaderIcon
							bg={find(messengerData, { name: selectChat.messenger })?.color!}
							src={find(messengerData, { name: selectChat.messenger })?.icon!}
						/>
						<IconName>{selectChat.profileText}</IconName>
					</HeaderIconDiv>
				</ContactInfo>

				<RightSide>
					<FormControl sx={{ minWidth: 250, border: 'none' }} size='small'>
						<Select
							style={{
								borderRadius: '25px',
							}}
							value={user}
							onChange={handleChange}
						>
							<MenuItem value='Dolores'>
								<ProfilePhoto src='profile/dolores abernathy.png' />
								<ProfileName
									style={{
										fontWeight: '200',
									}}
								>
									Dolores Abernathy
								</ProfileName>
							</MenuItem>
							<MenuItem value='Meave'>
								<ProfilePhoto src='/profile/photo none.jpg' />
								<ProfileName
									style={{
										fontWeight: '200',
									}}
								>
									Meave Millay
								</ProfileName>
							</MenuItem>
							<MenuItem value='Teddy'>
								<ProfilePhoto src='/profile/photo none.jpg' />
								<ProfileName
									style={{
										fontWeight: '200',
									}}
								>
									Teddy Flood
								</ProfileName>
							</MenuItem>
						</Select>
					</FormControl>

					<BgIcon>
						<IconButton>
							<CheckOutlinedIcon />
						</IconButton>
					</BgIcon>
					<SearchContainer isSearching={isActive}>
						<IconButton onClick={toggleSearch}>
							{isActive ? <CloseIcon /> : <SearchIcon />}
						</IconButton>
						<SearchInput type='text' placeholder='Search' />
					</SearchContainer>
				</RightSide>
			</ProfileHeader>

			<MessageContainer>
				{messageList.map((messageData) => (
					<MessageDiv isYours={messageData.senderID === 0}>
						<Message isYours={messageData.senderID === 0}>{messageData.text}</Message>
						<MessageTime>{messageData.addedOn}</MessageTime>
					</MessageDiv>
				))}
			</MessageContainer>
			<ChatBox>
				<AttachInput type='file' id='file' />
				<label htmlFor='file'>
					<AttachImage src={'/profile/Attach.png'} />
				</label>

				<MessageInputContainer>
					{/* <Picker onEmojiClick={onEmojiClick} /> */}

					<MessageInput
						placeholder='Type your message'
						value={text}
						onKeyDown={onEnterPress}
						onChange={(e) => setText(e.target.value)}
					/>
				</MessageInputContainer>
				<SendImage src='/profile/Send.png' />
			</ChatBox>
		</Container>
	);
}

export default Conversation;
