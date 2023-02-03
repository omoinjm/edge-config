module.exports = `
	type IRoutes {
		id: Int
		link: String
		name: String
	}

	type IFooter {
		id: Int
		link: String
		imgUrl: String
		altName: String
	}

	type ISkills {
		id: Int
		imgUrl: String
		imgName: String
	}

	type ITabProjects {
		id: Int
		tabKey: String
		tabName: String
		project: [IProjects!]
		icon: String
	}

	type IProjects {
		id: Int
		title: String
		description: String
		imgUrl: String
		live: String
		codeV: Boolean
		code: String
		stack: [IStack!]
	}

	type IStack {
		name: String!
		icon: String!
	}

	# handle user commands

	type Query {
		#will return multiple instances

		getAllRoutes: [IRoutes]
		getAllFooter: [IFooter]
		getAllSkills: [ISkills]
		getAllProjects: [ITabProjects]
	}
`;
