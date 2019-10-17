import { Client } from "soap";
/**
 * Gets all of the Users supported by DealCloud. These Users can be used
 * with the dealcloud API to get currency conversions on the fly
 *
 * ### Example
 * ``` js
 * import { getUsers, createClient } from 'dealcloud'
 * let params = {username: '', password: '', url: ''}
 * let client = createClient(params, {})
 * let activeOnly = true
 * getUsers(client, activeOnly).then(console.log)
 * // => [
 *      {
 * "EntryListId": -1,
 * "Id": 15426,
 * "Name": "Test User",
 * "Email": "othertest@dealcloud.com"
 * },
 * {
 * "EntryListId": -1,
 * "Id": 15427,
 * "Name": "Test User2",
 * "Email": "atestuser@dealcloud.com"
 * },
 * ]
 * ```
 */

export async function getUsers(
{ client, activeOnly }: { readonly client: Client; readonly activeOnly: boolean; }): Promise<ReadonlyArray<string>> {
  return new Promise<ReadonlyArray<string>>((resolve, reject) => {
    // tslint:disable-next-line: no-expression-statement
    client.DCDataService.CustomBinding_IDCDataService2.GetUsers(
      { activeOnly },
      (err, result) => (err ? reject(err) : resolve(result))
    );
  });
}
