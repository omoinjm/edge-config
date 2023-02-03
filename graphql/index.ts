import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { graphql } from 'graphql';
import { schema } from '../helpers/graph';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest
): Promise<void> {
	console.log('HTTP trigger function processed a request.');

	const result = await graphql({
		schema,
		source: req.body.query,
	});

	context.res = {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(result.data),
	};
};

export default httpTrigger;
