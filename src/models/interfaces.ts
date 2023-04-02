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
	id?:string;
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
	profilePhoto?: string;
}

export interface FormValues {
	name: string;
	surname: string;
	email: string;
	username: string;
	role: string;
	tenant: string;
	password?: string;
	confirmPassword?: string;
}

export interface Users extends FormValues {
	id: string;
}

export interface Roles {
	role: string;
	id: string;
}

export interface Tenants {
	tenant: string;
	id: string;
}

export interface Data extends Users,Roles,Tenants{
	action: string;
  }
  
export interface HeadCell {
	disablePadding: boolean;
	id: keyof Data;
	label: string;
	numeric: boolean;
  }
  
export type Order = "asc" | "desc";

export interface HeadCell {
	disablePadding: boolean;
	id: keyof Data;
	label: string;
	numeric: boolean;
  }
  
