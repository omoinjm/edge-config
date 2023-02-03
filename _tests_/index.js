const assert = require('assert');
const { buildSchema } = require('graphql');
const schema = require('./schema');

describe('Schema', function () {
	it('should define all types and queries', function () {
		const builtSchema = buildSchema(schema);

		assert.ok(builtSchema);

		const queryType = builtSchema.getQueryType();

		assert.ok(queryType);
		assert.ok(queryType.getFields().getAllRoutes);
		assert.ok(queryType.getFields().getAllFooter);
		assert.ok(queryType.getFields().getAllSkills);
		assert.ok(queryType.getFields().getAllProjects);

		const typeMap = builtSchema.getTypeMap();

		assert.ok(typeMap.IRoutes);
		assert.ok(typeMap.IFooter);
		assert.ok(typeMap.ISkills);
		assert.ok(typeMap.ITabProjects);
		assert.ok(typeMap.IProjects);
		assert.ok(typeMap.IStack);
	});
});
