/**
 * Gets all of the Entries supported by DealCloud. These Entries can be used
 * with the dealcloud API to get currency conversions on the fly
 *
 * ### Example
 * ``` js
 * import { getFilteredEntries, createClient } from 'dealcloud'
 * let params = {username: '', password: '', url: ''}
 * const client = await createClient(params, {});
 * let filter = {
 * 'CurrencyCode': "",
 * 'FieldId': 42173,
 * 'FilterOperation': 'Contains',
 * 'Value': "E",
 * 'ValueTo': ""
 * }
 * 
 * const result = await getFilteredEntries({
 *   client,
 *   entryListId,
 *   "srcFilters": filters
 * });
 * // => {
 *   "int": [
 *     3217853,
 *     3217850,
 *     3217865,
 *     3217857,
 *     3217871,
 *     3217859,
 *    3217855]
 *   }
 * ```
 */

export async function getFilteredEntries({
  client,
  srcFilters,
  entryListId
}): Promise<ReadonlyArray<string>> {
  return new Promise<ReadonlyArray<string>>((resolve, reject) => {
    // tslint:disable-next-line: no-expression-statement
    client.DCDataService.CustomBinding_IDCDataService2.GetFilteredEntries(
      { entryListId, srcFilters },
      (err, result) => {
        return err ? reject(err) : resolve(result.GetFilteredEntriesResult);
      }
    );
  });
}
