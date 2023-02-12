import { styled } from '@mui/system';
import { CSSProperties } from 'styled-components';

interface ListProps {
	gap?: CSSProperties['gap'];
	direction?: CSSProperties['flexDirection'];
	size?: CSSProperties['fontSize'];
	color?: CSSProperties['color'];
}

const StyledList = styled('ul')<ListProps>`
	display: flex;
	color: #9e9e9e;
	font-size: 14px;
	flex-direction: column;
	gap: 16px;
`;

function GeneralUserAccountKeys() {
	return (
		<StyledList style={{ color: '#9E9E9E', fontSize: '14px' }}>
			<li>Username</li>
			<li>Email</li>
			<li>Job title</li>
			<li>Tenant name</li>
		</StyledList>
	);
}
export default GeneralUserAccountKeys;
