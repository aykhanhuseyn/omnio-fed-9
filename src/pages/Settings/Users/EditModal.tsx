import { object, string, ref } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	InputAdornment,
	IconButton,
	MenuItem,
	Select,
	FormHelperText,
	InputLabel,
} from '@mui/material';
import type { FormValues, Users } from '../../../models';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../../redux/user.slice';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import React, { useEffect } from 'react';
import { roleSelector } from '../../../redux/role.slice';
import { MenuProps } from './AddModal';

interface PropsEdit {
	handleClose: () => void;
	user: Users | null;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	selectValue: string;
}

const passwordSpecialChars = ['!', '@', '#', '$', '%', '&'];

const schema = object().shape({
	name: string().required('Name is required'),
	surname: string().required('Surname is required'),
	email: string().email('Email is not valid').required('Email is required'),
	username: string()
		.matches(/[a-z]*/, 'Username is not valid')
		.min(5, 'Username is too short')
		.max(20, 'Username is too long')
		.required('Username is required'),
	role: string()
		// .oneOf(roles, `Rolu must be one of ${roles.join(', ')}`)
		.required('Role is required'),
	tenant: string()
		// .oneOf(roles, `Rolu must be one of ${roles.join(', ')}`)
		.required('Tenant is required'),
	password: string()
		.min(8, 'Password is too short')
		.max(50, 'Password is too long')
		.test({
			name: 'passwordSpecialChars',
			message: 'Add special characters',
			test: (value = '') => {
				return [...value].some((char) => passwordSpecialChars.includes(char));
			},
		})
		.required('Password is required'),
	confirmPassword: string()
		.oneOf([ref('password'), ''], 'Passwords must match')
		.required('Confirm password is required'),
});

export const EditModal = ({ user, handleClose }: PropsEdit) => {
	const roles = useSelector(roleSelector);

	const [showPassword, setShowPassword] = React.useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
	const [role, setRole] = React.useState('');
	const [tenant, setTenant] = React.useState('');
	const dispatch = useDispatch();

	const { register, handleSubmit, formState, reset } = useForm<FormValues>({
		mode: 'onChange',
		shouldFocusError: true,
		reValidateMode: 'onChange',
		resolver: yupResolver(schema),
	});

	const onSubmit = (fromSubmitData: any) => {
		console.log('onSubmit', fromSubmitData);
		dispatch(editUser(fromSubmitData));
		setRole('');
		setTenant('');
		handleClose();
		reset();
	};

	useEffect(() => {
		if (user) {
			reset(user);
			setRole(user.role);
			setTenant(user.tenant);
		} else {
			reset();
			setRole('');
			setTenant('');
		}
	}, [user, reset]);

	return (
		<Dialog
			open={Boolean(user)}
			onClose={handleClose}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
		>
			<form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
				<DialogTitle id='alert-dialog-title'>{'Add , Edit user '}</DialogTitle>
				<DialogContent
					sx={{
						'& .MuiTextField-root': { m: 1, width: '255px' },
					}}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<TextField
							size='medium'
							id='name'
							label='Name'
							variant='outlined'
							type='text'
							{...register('name')}
							error={Boolean(formState?.errors?.name)}
							helperText={formState?.errors?.name?.message ?? ''}
						/>
						<TextField
							size='medium'
							id='surname'
							label='Surname'
							variant='outlined'
							type='text'
							{...register('surname')}
							error={Boolean(formState?.errors?.surname)}
							helperText={formState?.errors?.surname?.message ?? ''}
						/>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<TextField
							size='medium'
							id='email'
							label='Email'
							variant='outlined'
							{...register('email')}
							error={Boolean(formState?.errors?.email)}
							helperText={formState?.errors?.email?.message ?? ''}
						/>
						<TextField
							size='medium'
							id='username'
							label='Username'
							variant='outlined'
							type='text'
							{...register('username')}
							error={Boolean(formState?.errors?.username)}
							helperText={formState?.errors?.username?.message ?? ''}
						/>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						{/* <div>
							<InputLabel id='role-label'>Role</InputLabel>
							<Select
								labelId='role-label'
								{...register('role')}
								error={Boolean(formState?.errors?.role)}
								defaultValue={user?.role}
							>
								<MenuItem disabled value=''>
									<em>Placeholder</em>
								</MenuItem>
								{roles.map((role) => (
									<MenuItem key={role.id} value={role?.role}>
										{role?.role}
									</MenuItem>
								))}
							</Select>
							<FormHelperText error={Boolean(formState?.errors?.role)}>
								{formState?.errors?.role?.message}
							</FormHelperText>
						</div>

						<div>
							<InputLabel id='tenant-label'>Tenant</InputLabel>
							<Select
								labelId='tenant-label'
								{...register('tenant')}
								error={Boolean(formState?.errors?.role)}
								defaultValue={user?.tenant}
							>
								<MenuItem disabled value=''>
									<em>Placeholder</em>
								</MenuItem>
								{roles.map((role) => (
									<MenuItem key={role.id} value={role?.role}>
										{role?.role}
									</MenuItem>
								))}
							</Select>
							<FormHelperText error={Boolean(formState?.errors?.role)}>
								{formState?.errors?.role?.message}
							</FormHelperText>
						</div> */}

						<TextField
							select
							id='role'
							SelectProps={{
								MenuProps: MenuProps,
							}}
							label='Role'
							{...register('role')}
							value={role}
							onChange={(e) => {
								setRole(e.target.value);
							}}
							error={Boolean(formState?.errors?.role)}
							helperText={formState?.errors?.role?.message ?? ''}
						>
							{roles.map((role) => (
								<MenuItem key={role.id} value={role?.role}>
									{role?.role}
								</MenuItem>
							))}
						</TextField>
						<TextField
							select
							id='tenant'
							SelectProps={{
								MenuProps: MenuProps,
							}}
							label='Tenant'
							{...register('tenant')}
							value={tenant}
							onChange={(e) => {
								setTenant(e.target.value);
							}}
							error={Boolean(formState?.errors?.tenant)}
							helperText={formState?.errors?.tenant?.message ?? ''}
						>
							{roles.map((role) => (
								<MenuItem key={role.id} value={role?.role}>
									{role?.role}
								</MenuItem>
							))}
						</TextField>

						{/* <TextField
              select
              {...register("role")}
              error={Boolean(formState?.errors?.role)}
              helperText={formState?.errors?.role?.message ?? ""}
              id="demo-simple-select"
              value={selectValue}
              label="Role"
              onChange={handleChange}
            >
              {roles.map((role) => (
                <MenuItem key={role.id} value={role.role}>
                  {role.role}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              {...register("tenant")}
              error={Boolean(formState?.errors?.tenant)}
              helperText={formState?.errors?.tenant?.message ?? ""}
              id="demo-simple-select"
              value={selectValue}
              label="Tenant"
              onChange={handleChange}
            >
              {roles.map((role) => (
                <MenuItem key={role.id} value={role.role}>
                  {role.role}
                </MenuItem>
              ))}
            </TextField> */}
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<TextField
							label='Password'
							size='medium'
							variant='outlined'
							type={showPassword ? 'text' : 'password'}
							id='passwordInput'
							{...register('password')}
							error={Boolean(formState?.errors?.password)}
							helperText={formState?.errors?.password?.message ?? ''}
							InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										{' '}
										<IconButton
											onClick={() => {
												setShowPassword(!showPassword);
											}}
										>
											{showPassword ? (
												<VisibilityOutlinedIcon />
											) : (
												<VisibilityOffOutlinedIcon />
											)}
										</IconButton>
									</InputAdornment>
								),
							}}
						></TextField>

						<TextField
							id='confirmPassword'
							label='Confirm password'
							size='medium'
							variant='outlined'
							type={showConfirmPassword ? 'text' : 'password'}
							{...register('confirmPassword')}
							error={Boolean(formState?.errors?.confirmPassword)}
							helperText={formState?.errors?.confirmPassword?.message ?? ''}
							InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										{' '}
										<IconButton
											onClick={() => {
												setShowConfirmPassword(!showConfirmPassword);
											}}
										>
											{showConfirmPassword ? (
												<VisibilityOutlinedIcon />
											) : (
												<VisibilityOffOutlinedIcon />
											)}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
					</div>
				</DialogContent>
				<DialogActions sx={{ paddingRight: '30px', paddingLeft: '30px' }}>
					<Button color='inherit' onClick={handleClose}>
						Cancel
					</Button>
					<Button color='success' variant='contained' type='submit' autoFocus>
						Save
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
};
