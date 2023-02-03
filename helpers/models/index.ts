/********************* PORTFOLIO WEBSITE *********************/

export interface IRoutes {
	id: number;
	link: string;
	name: string;
}

export interface IFooter {
	id: number;
	link: string;
	imgUrl: string;
	altName: string;
}

export interface ISkills {
	id: number;
	imgUrl: string;
	imgName: string;
}

export interface ITabProjects {
	id: number;
	tabKey: string;
	tabName: string;
	project?: IProjects[];
	icon: string;
}

interface IProjects {
	id: number;
	title: string;
	description: string;
	imgUrl: string;
	live: string;
	codeV: boolean;
	code: string;
	stack?: IStack[];
}

interface IStack {
	name: string;
	icon: string;
}

/********************* BIO LINKS *********************/

export interface ITabs {
	name: string;
	avatar: string;
	links: ILinks[];
	socials: ISocials[];
}

interface ILinks {
	href: string;
	title: string;
	icon?: string;
}

interface ISocials {
	href: string;
	title: string;
	icon?: string;
	color?: string;
}
