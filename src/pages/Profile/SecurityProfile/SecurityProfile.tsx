import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import SecurityPassword from '../../../components/SecurityPassword/SecurityPassword';

function SecurityProfile() {
	const StyledDiv = styled('div')`
		flex-grow: 1;
	`;
	return (
		<StyledDiv>
			<Typography
				style={{ fontSize: '20px', padding: '19px 0 19px 20px', fontWeight: 500 }}
				variant='h2'
			>
				Security and login
			</Typography>
			<SecurityPassword/>
		</StyledDiv>
	);
}

export default SecurityProfile;
