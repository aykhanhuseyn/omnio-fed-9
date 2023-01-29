import styled from 'styled-components';
import Elon from '../../public/profile/elon.jpeg';
import Jeff from '../../public/profile/jeff.jpeg';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';


const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
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

const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
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

const OkeyIcon = styled.img`
	width: 20px;
	height: 20px;
	bakcground: transparent;
	border-radius: 50%;
	// margin: 0 30px 0px 30px;
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

function Conversation() {
	return (
		<Container>
			<ProfileHeader>
				<LeftSide>
					<ContactInfo>
						<ProfileImage src={Elon} />
						<ProfileName>William</ProfileName>
					</ContactInfo>
				</LeftSide>

				<RightSide>
					<ProfileBar>
						<ProfilePhoto src={Jeff} />
						<ProfileName
							style={{
								fontWeight: '200',
								marginRight: '10px',
								marginBottom: '5px',
							}}
						>
							Dolores Abernathy
						</ProfileName>
						<a href='#'>
							<ArrowDropDownOutlinedIcon style={{ width: '18px' }} />
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
		</Container>
	);
}

export default Conversation;
