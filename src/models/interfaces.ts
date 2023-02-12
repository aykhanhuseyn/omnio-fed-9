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
	email: `${string}@${string}.${
		| 'com'
		| 'net'
		| 'org'
		| 'edu.az'
		| 'gov.az'
		| 'az'}`;
	jobTitle: string;
	tenant: string;
}

export interface FormValues {
	name: string;
	surname: string;
	email: string;
	username: string;
	role: string;
	tenant: string;
	password: string;
	confirmPassword: string;
}

export interface Users extends FormValues {
	id: any;
}

export interface Roles {
	role: string;
	id: any;
}
