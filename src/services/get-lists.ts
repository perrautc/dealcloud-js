import { Client } from "soap";

/**
 * Gets all of the Lists supported by DealCloud. These Lists can be used
 * with the dealcloud API to get currency conversions on the fly
 * @export getLists
 * @param {Client} client
 * @returns {Promise<ReadonlyArray<string>>}
 *
 *  ### Example
 * ``` js
 * import { getLists, createClient } from 'dealcloud'
 * let params = {username: '', password: '', url: ''}
 * let client = createClient(params, {})
 * getLists(client).then(console.log)
 * // => [
 *  {
 *  "EntryListId": -5,
 *  "Id": 32977,
 *   "Name": "Z Deal",
 *   "EntryListSubType": "None",
 *   "EntryListType": "Entity",
 *   "PluralName": "Z Deals",
 *   "SingularName": "Z Deal"
 * },
 * {
 *   "EntryListId": -5,
 *   "Id": 32968,
 *   "Name": "Z Property",
 *   "EntryListSubType": "None",
 *   "EntryListType": "Entity",
 *   "PluralName": "Z Properties",
 *   "SingularName": "Z Property"
 * }
 * ]
 * ```
 */

/**
 *
 *
 */
export async function getLists(client: Client): Promise<ReadonlyArray<string>> {
  return new Promise<ReadonlyArray<string>>((resolve, reject) => {
    // tslint:disable-next-line: no-expression-statement
    client.DCDataService.CustomBinding_IDCDataService2.GetEntryLists(
      (err, result) => (err ? reject(err) : resolve(result.GetEntryListsResult.EntryList))
    );
  });
}