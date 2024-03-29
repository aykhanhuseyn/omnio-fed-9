import Jeff from '../../public/profile/jeff.jpeg';

export enum Messenger {
	WHATSAPP = 'Whatsapp',
	FACEBOOK = 'Facebook',
	INSTAGRAM = 'Instagram',
	TWITTER = 'Twitter',
	LINKEDIN = 'Linkedin',
	TELEGRAM = 'Telegram',
	SNAPCHAT = 'Snapchat',
	EMAIL = 'Email',
}

export const messengerData = [
	{
		id: 1,
		color: '#25D366',
		name: Messenger.WHATSAPP,
		icon: '/profile/VectorWp.png',
	},
	{
		id: 2,
		color: '#3B5998',
		name: Messenger.FACEBOOK,
		icon: '/profile/Vector.png',
	},
	{
		id: 3,
		color: '#3498DB',
		name: Messenger.EMAIL,
		icon: '/profile/VectorMail.png',
	},
];

export type ContactListUser = {
	id: number;
	name: string;
	messenger: Messenger;
	profilePic: string;
	lastText: string;
	profileText: string;
	lastTextTime: string;
};

export const contactList: ContactListUser[] = [
	{
		id: 1,
		name: 'William',
		messenger: Messenger.WHATSAPP,
		profilePic: '/profile/william.png',
		lastText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, accusamus ',
		profileText: 'Westworld',
		lastTextTime: '01.01.2050',
	},
	{
		id: 2,
		name: 'Emil@grace.com',
		profilePic: '/profile/emily grace.png',
		messenger: Messenger.FACEBOOK,
		profileText: 'Westworld',
		lastText: `Lorem Ipsum`,
		lastTextTime: '01.01.2050',
	},
	{
		id: 3,
		name: '+11417543010',
		profilePic: '/profile/logan.png',
		messenger: Messenger.EMAIL,
		profileText: 'Westworld',
		lastText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, accusamus?',
		lastTextTime: '01.01.2050',
	},
	{
		id: 4,
		name: 'caleb@nicholas.com',
		profilePic: '/profile/caleb nichols.png',
		messenger: Messenger.WHATSAPP,
		profileText: 'Westworld',
		lastText: 'Lorem Ipsum',
		lastTextTime: '01.01.2050',
	},
	{
		id: 5,
		name: '+12417543010',
		profilePic: '/profile/photo none.jpg',
		messenger: Messenger.WHATSAPP,
		profileText: 'Westworld',
		lastText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, accusamus?',
		lastTextTime: '01.01.2050',
	},
	{
		id: 6,
		name: 'Man in Black',
		profilePic: '/profile/man in black.png',
		messenger: Messenger.WHATSAPP,
		profileText: 'Westworld',
		lastText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, accusamus?',
		lastTextTime: '01.01.2050',
	},
	{
		id: 7,
		name: 'charlotte@hale.com',
		profilePic: '/profile/charlotte hale.png',
		messenger: Messenger.WHATSAPP,
		profileText: 'Westworld',
		lastText: 'Lorem Ipsum',
		lastTextTime: '01.01.2050',
	},
	{
		id: 8,
		name: 'Lucy Sanders',
		profilePic: '/profile/photo none.jpg',
		messenger: Messenger.WHATSAPP,
		profileText: 'Westworld',
		lastText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, accusamus?',
		lastTextTime: '01.01.2050',
	},
];

export const messagesList = [
	{
		id: 1,
		messageType: 'TEXT',
		text:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, accusamus 😁',
		senderID: 0,
		addedOn: '12:00 PM',
	},
	{
		id: 2,
		messageType: 'TEXT',
		text: 'Lorem ipsum dolor ',
		senderID: 1,
		addedOn: '12:01 PM',
	},
	{
		id: 3,
		messageType: 'TEXT',
		text: 'Lorem ipsum dolor sit amet consectetur',
		senderID: 0,
		addedOn: '12:02 PM',
	},
	{
		id: 4,
		messageType: 'TEXT',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing',
		senderID: 1,
		addedOn: '12:03 PM',
	},
	{
		id: 5,
		messageType: 'TEXT',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing 😁',
		senderID: 0,
		addedOn: '12:10 PM',
	},
	{
		id: 5,
		messageType: 'TEXT',
		text: 'Lorem ipsum dolor sit amet consectetur ?',
		senderID: 1,
		addedOn: '12:11 PM',
	},
];
