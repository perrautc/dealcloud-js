// import fs from 'fs';
// import * as _ from 'lodash';
// import path from 'path';
import { getFields } from "../services/get-fields";
import { getLists } from "../services/get-Lists";

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

export async function models({ client}) {

    const results = Promise.all([getLists(client),getFields(client)])
    return results
}
