import { Client } from "soap";
/**
 * Gets all of the Entries supported by DealCloud. These Entries can be used
 * with the dealcloud API to get currency conversions on the fly
 *
 * ### Example
 * ``` js
 * import { getListEntries, createClient } from 'dealcloud'
 * let params = {username: '', password: '', url: ''}
 * let client = createClient(params, {})
 * getListEntries(client).then(console.log)
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

export async function getListEntries(
{ client, entryListId }: { readonly client: Client; readonly entryListId: number; }): Promise<ReadonlyArray<string>> {
  return new Promise<ReadonlyArray<string>>((resolve, reject) => {
    // tslint:disable-next-line: no-expression-statement
    client.DCDataService.CustomBinding_IDCDataService2.GetListEntries(
      { entryListId },
      (err, result) => {
          return (err ? reject(err) : resolve(result));
      }
    );
  });
}
