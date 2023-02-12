import { styled } from '@mui/system';
import { CSSProperties } from 'styled-components';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/auth.slice';
interface ListProps {
	gap?: CSSProperties['gap'];
	direction?: CSSProperties['flexDirection'];
	size?: CSSProperties['fontSize'];
	color?: CSSProperties['color'];
}
function GeneralUserAccountValues() {
	const userInfo = useSelector(userSelector);
	const StyledList = styled('ul')<ListProps>`
		display: flex;
		color: #9e9e9e;
		font-size: 14px;
		flex-direction: column;
		gap: 16px;
	`;

	return (
		<StyledList style={{ color: '#9E9E9E', fontSize: '14px' }}>
			<li>{userInfo?.username}</li>
			<li>{userInfo?.email}</li>
			<li>{userInfo?.jobTitle}</li>
			<li>{userInfo?.tenant}</li>
		</StyledList>
	);
}
export default GeneralUserAccountValues;
