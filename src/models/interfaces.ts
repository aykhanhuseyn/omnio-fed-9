export interface LoginUser {
	username: string;
	password: string;
	remember?: boolean;
}

type Int = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type Month = Exclude<Int, 0> | `${10 | 11 | 12}`;

type Day = Exclude<Int, 0> | `${1 | 2}${Int}` | 30 | 31;

type Year = `${19 | 20}${Int}${Int}`;

export interface User extends Omit<LoginUser, 'remember'> {
	name: string;
	surname: string;
	birthDate: `${Year}-${Month}-${Day}`;
}

const user: User = {
	name: '',
	surname: '',
	username: '',
	password: '',
	birthDate: '1999-11-31',
};
export interface FormValues{
	id:any,
	name:string,
	surname:string,
	username:string,
	password:string,
	confirmPassword:string,
	email:string,
	role:string,
	tenant:string
}