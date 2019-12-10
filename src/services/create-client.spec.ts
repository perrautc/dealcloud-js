import test from 'ava';
import { readJSONSync } from 'fs-extra-plus';
import * as path from 'path';
import { createClient } from "./create-client";

// tslint:disable-next-line: no-expression-statement
test('creates a client', async t => {
    const params = await readJSONSync(path.join(process.cwd(), 'test-params.json'));
	const client = await createClient(params, {});
	// tslint:disable-next-line: no-expression-statement
	t.true(client.hasOwnProperty("DCDataService"));
});