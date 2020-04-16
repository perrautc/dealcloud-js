import { Client } from "strong-soap";
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

export async function getModifiedEntries({
  client,
  fromDate,
  entryListId
}: {
  readonly client: Client;
  readonly fromDate: Date;
  readonly entryListId: number;
}): Promise<ReadonlyArray<string>> {
  return new Promise<ReadonlyArray<string>>((resolve, reject) => {
    // tslint:disable-next-line: no-expression-statement
    client.DCDataService.CustomBinding_IDCDataService2.GetEntriesModifiedSince(
      { fromDate, entryListId },
      (err, result) => {
        return err ? reject(err) : resolve(result);
      }
    );
  });
}
