// get all of the available data from json

import {
	bioLinks,
	footerLinks,
	pageLinks,
	projectTabs,
	skillImg,
} from './dataset';

const Resolvers = {
	Query: {
		getAllRoutes: () => pageLinks,
		getAllFooter: () => footerLinks,
		getAllSkills: () => skillImg,
		getAllProjects: () => projectTabs,
	},
};

export default Resolvers;
