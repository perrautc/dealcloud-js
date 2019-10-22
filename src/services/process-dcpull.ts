/**
 * Gets all of the Fields supported by DealCloud. These Fields can be used
 * with the dealcloud API to get currency conversions on the fly
 *
 * ### Example
 * ``` js
 * import { processDCPull, createClient } from 'dealcloud'
 * let params = {username: '', password: '', url: ''}
 * let client = createClient(params, {})
 * processDCPull(client).then(console.log)
 * // => [
 *  {
 *   "EntryListId": 74595,
 *   "Id": 74598,
 *   "Name": "Body",
 *   "AllowDuplicates": true,
 *   "ChoiceValues": null,
 *   "DCPullSupported": true,
 *   "EntryLists": null,
 *   "FieldType": "Text",
 *   "SystemFieldType": "Body"
 *  }
 * ]
 * ```
 */

export async function processDCPullAsync({
  client,
  DCPulls
}): Promise<ReadonlyArray<string>> {
  const DCPullRequest = {
    fillextendeddata: true,
    requests: {
      DCPull: DCPulls
    },
    resolveReferenceUrls: true
  };

  const results = await processDCPull({ client, DCPullRequest });
  return results;
}

async function processDCPull({
  client,
  DCPullRequest
}): Promise<ReadonlyArray<string>> {
  return new Promise<ReadonlyArray<string>>((resolve, reject) => {
    // tslint:disable-next-line: no-expression-statement
    client.DCDataService.CustomBinding_IDCDataService2.ProcessDCPull(
      DCPullRequest,
      (err, result) =>
        err ? reject(err) : resolve(result.ProcessDCPullResult.DCResult)
    );
  });
}
