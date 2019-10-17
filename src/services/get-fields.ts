import { Client } from "soap";
/**
 * Gets all of the Fields supported by DealCloud. These Fields can be used
 * with the dealcloud API to get currency conversions on the fly
 * 
 * ### Example
 * ``` js
 * import { getFields, createClient } from 'dealcloud'
 * let params = {username: '', password: '', url: ''}
 * let client = createClient(params, {})
 * getFields(client).then(console.log)
 * // => [
 *  {
 *   "EntryListId": 74595,
 *   "Id": 74598,
 *   "Name": "Body",
 *   "AllowDuplicates": true,
 *   "ChoiceValues": null,
 *   "DCPushSupported": true,
 *   "EntryLists": null,
 *   "FieldType": "Text",
 *   "SystemFieldType": "Body"
 *  }
 * ]
 * ```
 */

export async function getFields(
  client: Client
): Promise<ReadonlyArray<string>> {
  return new Promise<ReadonlyArray<string>>((resolve, reject) => {
    // tslint:disable-next-line: no-expression-statement
    client.DCDataService.CustomBinding_IDCDataService2.GetFields(
      (err, result) => (err ? reject(err) : resolve(result.GetFieldsResult.Field))
    );
  });
}
