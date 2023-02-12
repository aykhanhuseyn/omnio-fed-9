export enum Messenger {
	WHATSAPP = 'Whatsapp',
	FACEBOOK = 'Facebook',
	INSTAGRAM = 'Instagram',
	TWITTER = 'Twitter',
	LINKEDIN = 'Linkedin',
	TELEGRAM = 'Telegram',
	SNAPCHAT = 'Snapchat',
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
		icon: '/profile/Facebook.png',
	},
];

export const contactList = [
	{
		id: 1,
		name: 'William',
		profilePic: '/profile/william.png',
		lastText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, accusamus ',
		iconPic: '/profile/Vector.png',
		lastTextTime: '01.01.2050',
		messenger: Messenger.WHATSAPP,
	},
	{
		id: 2,
		name: 'Emil@grace.com',
		profilePic: '/profile/emily grace.png',
		iconPic: '/profile/VectorMail.png',
		lastText: `Lorem Ipsum`,
		lastTextTime: '01.01.2050',
	},
	{
		id: 3,
		name: '+11417543010',
		profilePic: '/profile/logan.png',
		iconPic: '/profile/VectorWp.png',
		profileIcon: '/profile/Facebook.png',
		lastText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, accusamus?',
		lastTextTime: '01.01.2050',
	},
	{
		id: 4,
		name: 'caleb@nicholas.com',
		profilePic: '/profile/caleb nichols.png',
		iconPic: '/profile/VectorMail.png',
		lastText: 'Lorem Ipsum',
		lastTextTime: '12:30 PM',
	},
	{
		id: 5,
		name: '+12417543010',
		profilePic: '/profile/photo none.jpg',
		iconPic: '/profile/VectorWp.png',
		lastText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, accusamus?',
		lastTextTime: '01.01.2050',
	},
	{
		id: 6,
		name: 'Man in Black',
		profilePic: '/profile/man in black.png',
		iconPic: '/profile/Vector.png',
		lastText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, accusamus?',
		lastTextTime: '01.01.2050',
	},
	{
		id: 7,
		name: 'charlotte@hale.com',
		profilePic: '/profile/charlotte hale.png',
		iconPic: '/profile/VectorMail.png',
		lastText: 'Lorem Ipsum',
		lastTextTime: '01.01.2050',
	},
	{
		id: 8,
		name: 'Lucy Sanders',
		profilePic: '/profile/photo none.jpg',
		iconPic: '/profile/Vector.png',
		lastText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, accusamus?',
		lastTextTime: '01.01.2050',
	},
];

export const messagesList = [
	{
		id: 1,
		messageType: 'TEXT',
		text: 'Hey Man 😁',
		senderID: 0,
		addedOn: '12:00 PM',
	},
	{
		id: 2,
		messageType: 'TEXT',
		text: "Hey, What's up?",
		senderID: 1,
		addedOn: '12:01 PM',
	},
	{
		id: 3,
		messageType: 'TEXT',
		text: 'All Good, What about you?',
		senderID: 0,
		addedOn: '12:00 PM',
	},
	{
		id: 4,
		messageType: 'TEXT',
		text: "I'm good as well",
		senderID: 1,
		addedOn: '12:00 PM',
	},
	{
		id: 5,
		messageType: 'TEXT',
		text: 'Great 😁',
		senderID: 0,
		addedOn: '12:00 PM',
	},
	{
		id: 5,
		messageType: 'TEXT',
		text: 'Have you subscribed The Graz Dev ?',
		senderID: 1,
		addedOn: '12:00 PM',
	},
];
