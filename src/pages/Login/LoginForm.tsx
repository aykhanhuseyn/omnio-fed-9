import { useDispatch } from 'react-redux';
import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	InputLabel,
	OutlinedInput,
	TextField,
	Typography,
} from '@mui/material';
import QuestionAnswer from '@mui/icons-material/QuestionAnswer';
import { Form } from './StyledForm';
import { Header } from './StyledForm';
import { logIn } from '../../redux/auth.slice';

function LoginForm() {
	const dispatch = useDispatch();

	return (
		<>
			<img
				src='../shape_1.png'
				alt='vector'
				style={{ position: 'absolute', left: '34%', top: '16%' }}
			/>
			<Form
				height='412px'
				width='340px'
				left='50%'
				right='50%'
				position='relative'
				padding='20px'
				index='99'
				transform='translate(-50%,50%)'
				borderRadius='8px'
				color='#fff'
				onSubmit={(e) => {
					e.preventDefault();

					console.log(
						(e.target as any)[0]?.value,
						(e.target as any)[2]?.value,
						(e.target as any)[4]?.checked,
					);

					dispatch(
						logIn({
							username: (e.target as any)[0]?.value,
							password: (e.target as any)[2]?.value,
							remember: (e.target as any)[4]?.checked,
						}),
					);
				}}
			>
				<Header justify='center' align='center' padding='19px'>
					<QuestionAnswer sx={{ width: '60px', height: '69px' }} />
					<Typography variant='h4' color='text.primary' component='h2'>
						Omnio
					</Typography>
				</Header>
				<FormControl>
					<TextField
						size='small'
						variant='outlined'
						label='Username'
						name='username'
						sx={{ marginBottom: '30px', width: '268px' }}
					/>
				</FormControl>

				<div>
					<FormControl
						size='small'
						variant='outlined'
						sx={{ marginBottom: '34px', width: '268px' }}
					>
						<InputLabel>Password</InputLabel>
						<OutlinedInput name='password' label='Password' />
					</FormControl>
				</div>

				<FormGroup>
					<FormControlLabel
						control={<Checkbox />}
						name='remember'
						label='Remember me'
						sx={{ marginBottom: '20px' }}
						color='grey.darken-2'
					/>
				</FormGroup>

				<Button
					disableElevation
					type='submit'
					variant='contained'
					sx={{ width: '268px' }}
				>
					Login
				</Button>
			</Form>

			<img
				src='../shape_2.png'
				alt='vector'
				style={{ position: 'absolute', right: '30%', top: '60%' }}
			/>
		</>
	);
}
export default LoginForm;
