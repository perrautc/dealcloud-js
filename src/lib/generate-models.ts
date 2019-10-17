// import fs from 'fs';
// import * as _ from 'lodash';
// import path from 'path';
// import { getFields } from "../services/get-fields";
// import { getLists } from "../services/get-Lists";

/**
 * Gets all of the Entries supported by DealCloud. These Entries can be used
 * with the dealcloud API to get currency conversions on the fly
 *
 * ### Example
 * ``` js
 * import { getModifiedEntries, createClient } from 'dealcloud'
 * let params = {username: '', password: '', url: ''}
 * let client = createClient(params, {})
 * getModifiedEntries({client, entryListId, fromDate}).then(console.log)
 * // => [
 * {
 *   "NamedEntry": [
 *     {
 *       "EntryListId": 32977,
 *       "Id": 2407679,
 *       "Name": "Test LA 200 DealCloud Capital I"
 *     }
 *   ]
 *  }
 * ```
 */

// export async function models({ client}): Promise<ReadonlyArray<string>> {

//     const lists = await getLists(client);
//     const fields = await getFields(client);

//     // if models folder doesn't exist create it
//     const modelsfolder = path.join(process.cwd(), 'models')
    
//     fs.mkdirSync(modelsfolder)

//     // tslint:disable-next-line: no-expression-statement
//     lists.forEach(entrylist => {
//         const entryListFields = _.filter(fields, {EntryListId: entrylist.Id});
//         const name = entrylist.name.replace(/[^a-zA-Z0-9]/g, ''); 
//         // tslint:disable-next-line: no-expression-statement
//         fs.writeFile(path.join(modelsfolder. name),entryListFields, (r = > console.log('model written'));
//     });
//     return lists
// }
