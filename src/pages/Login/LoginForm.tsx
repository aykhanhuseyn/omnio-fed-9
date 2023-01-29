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
import { Form } from './StyledForm';
import { Header } from './StyledForm';
import QuestionAnswer from '@mui/icons-material/QuestionAnswer';

function LoginForm() {
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
				color = '#fff'
		
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
						label='Email'
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
						<OutlinedInput label='Password' />
					</FormControl>
				</div>

				<FormGroup>
					<FormControlLabel
						control={<Checkbox />}
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
