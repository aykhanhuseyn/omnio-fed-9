import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import { CSSProperties } from 'styled-components';
import GeneralUserAccountKeys from '../GeneralUserAccountKeys/GeneralUserAccountKeys';
import GeneralUserAccountValues from '../GeneralUserAccountValues/GeneralUserAccountValues';

interface FlexProps {
	gap?: CSSProperties['gap'];
	direction?: CSSProperties['flexDirection'];
	justify?: CSSProperties['justifyContent'];
	align?: CSSProperties['alignItems'];
}
const Flex = styled('div')<FlexProps>`
	display: flex;
	gap: ${(props) => props.gap || '0'};
	flex-direction: ${(props) => props.direction || 'row'};
	align-items: ${(props) => props.align || 'stretch'};
	justify-content: ${(props) => props.justify || 'flex-start'};
`;

function GeneralUserInfo() {
	const userInfo = useSelector((state: any) => state.auth?.user);

	return (
		<Flex
			justify='space-between'
			gap='50px'
			style={{ borderRadius: '0px 0px 8px 8px' }}
		>
			<Flex direction='column' align='center' justify='center'>
				<img style={{width:'100px'}} src={userInfo?.profilePhoto} />
				<Typography
					style={{ fontSize: '16px', color: '#424242', }}

				>{userInfo?.name} {userInfo?.surname}</Typography>
				<Typography style={{ color: '#574B90', fontSize: '14px' }}>
					Supervisor
				</Typography>
			</Flex>
			<Flex gap='40px' style={{ flexGrow: '1' }}>
				<GeneralUserAccountKeys />
				<GeneralUserAccountValues />
			</Flex>
		</Flex>
	);
}
export default GeneralUserInfo;
