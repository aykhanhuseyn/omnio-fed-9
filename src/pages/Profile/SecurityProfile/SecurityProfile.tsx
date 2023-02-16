import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import SecurityPasswordView from '../../../components/SecurityPasswordView/SecurityPasswordView';
import SecurityChangePassword from '../../../components/SecurityChangePassword/SecurityChangePassword';

function SecurityProfile() {
	const StyledDiv = styled('div')`
		flex-grow: 1;
	`;
	return (
		<StyledDiv>
			<Typography
				style={{ fontSize: '26px', padding: '19px 0 19px 20px', fontWeight: 600 }}
				variant='h2'
			>
				Security and login
			</Typography>
			<SecurityPasswordView />
			<SecurityChangePassword />
		</StyledDiv>
	);
}

export default SecurityProfile;
