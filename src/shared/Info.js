import Ace from '../icons/ace.png';
import Conduct from '../icons/letter-c.png';
import Monster from '../icons/monster.png';
import Shuttle from '../icons/shuttle.png';

export const personalInfo = {
	name: 'Timothy Wiliusa',
	email: 'wiliusat@oregonstate.edu',
	title: 'Full Stack, UI/UX',
	location: 'Corvallis, OR',
	weatherEmoji: '☀️',
	emojiDescription: 'sun-emoji',
	bio: 'Senior at Oregon State University',
	githubUrl: 'https://github.com/timothywilliusa',
	linkedInUrl: 'https://www.linkedin.com/in/timothy-wiliusa-13317418b/',
	instagramUrl: 'https://www.instagram.com/ti.m.o.th.y/'
};

export const experienceInfo = [
	{
		title: 'Student Associate / Tester',
		meta: 'HazAdapt, INC., April 2020 - August 2020',
		description:
			'Learn NodeJS and GenderMag. Built an app that focused on inclusive design.'
	},
	{
		title: 'Intern Junior Developer',
		meta: 'Golden Eagle, INC., April 2021 - December 2021',
		description:
			'Office Intern, handled instalations and errors, also management of files and daily records'
	},
	{
		title: 'Junior Developer',
		meta: 'Pt. Trisakti Mustika Graphika, December 2021 - March 2022',
		description:
			'Documenting ATR, learned basic card technology of the MIFARE chip '
	}
];

export const projectInfo = [
	{
		title: 'Conduct',
		icon: Conduct,
		iconAlt: 'conduct',
		description:
			'On-going task management application for companies. Assigning tasks, keeping track of work, and sending messages between users.',
		github: 'https://github.com/timothywiliusa/conduct'
	},
	{
		title: 'Monsters Rolodex',
		icon: Monster,
		iconAlt: 'monster',
		description: 'Simple React application where I learn to filter and map state objects.',
		github: 'https://github.com/timothywiliusa/monsters-rolodex'
	},
	{
		title: 'Space Shop',
		icon: Shuttle,
		iconAlt: 'spaceship',
		description:
			'With my CS 340 group, we built an e-comerce online applicaiton for virtual users to buy and sell merchendises. Using SQL tables and mariaDB.',
		github: 'https://github.com/timothywiliusa/cs340-group19-new'
	},
	{
		title: 'Aces Up Game',
		icon: Ace,
		iconAlt: 'cards',
		description: 'Aces Up game from the CS 361 class.',
		github: 'https://github.com/cs361f2019-osu/Fall2019_project-twosums'
	}
];

export const skillsInfo = [
	'MIFARE',
	'Agile',
	'SCRUM',
	'NODE',
	'JavaScript',
	'React',
	'Redux',
	'REST APIs',
	'SQL',
	'Responsive Design',
	'Git',
	'GenderMag',
	'Python'
];

export const educationInfo = [
	{
		title: 'Computer Science Major, with focus on Human-Computer Interactions',
		description: 'Oregon State University, Corvallis, OR'
	}
];
