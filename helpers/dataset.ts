import bio from './data/bio.json';
import footer from './data/footer.json';
import projects from './data/projects.json';
import routes from './data/routes.json';
import skills from './data/skills.json';
import { IFooter, IRoutes, ISkills, ITabProjects, ITabs } from './models/index';

/********************* NAVBAR *********************/
export const pageLinks: IRoutes[] = routes.pageLinks;

/********************* FOOTER *********************/
export const footerLinks: IFooter[] = footer.footerLinks;

/********************* SKILLS *********************/
export const skillImg: ISkills[] = skills.skillsImg;

/********************* PROJECTS *********************/
export const projectTabs: ITabProjects[] = projects.tabProjects;

/********************* BIO LINKS *********************/
export const bioLinks: ITabs = bio.njmbio;
