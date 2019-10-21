import * as he from "he";
import * as _ from "lodash";
import { Client } from "soap";
import { getFields } from "../services/get-fields";
import { getLists } from "../services/get-Lists";

/**
 * Gets all of the Entries supported by DealCloud. These Entries can be used
 * with the dealcloud API to get currency conversions on the fly
 *
 * ### Example
 * ``` js
 * import { getSchema, createClient } from 'dealcloud'
 * import * as fs from 'fs-extra-plus'
 * let params = {username: '', password: '', url: ''}
 * const client = await createClient(params, {});
 * const groupedFields = await dealcloud.getSchema(client);
 *
 * console.log(JSON.stringify(groupedFields, null, 2));
 * // => [
 * {
 *  "list": "Company",
 *  "fields": [
 *      {
 *   "EntryListId": 42616,
 *   "Id": 42617,
 *   "Name": "Name",
 *   "ChoiceValues": null,
 *   "DCPushSupported": true,
 *   "EntryLists": null,
 *   "FieldType": "Text",
 *   "IsRequired": true,
 *   "SystemFieldType": "Name"
 * },
 * {
 *  "EntryListId": 42616,
 *  "Id": 42652,
 *   "Name": "Agency Involved",
 *   "AllowDuplicates": true,
 *   "ChoiceValues": null,
 *   "DCPushSupported": true,
 *   "EntryLists": { "int": [42622] },
 *   "FieldType": "Reference",
 *   "IsMultiSelect": true,
 *  "IsRequired": true
 * }
 *  ]
 * }
 * ]
 * ```
 * ### Example
 * ``` js
 * import { getSchema, createClient } from 'dealcloud'
 * import * as fs from 'fs-extra-plus'
 * let params = {username: '', password: '', url: ''}
 * const client = await createClient(params, {});
 * const groupedFields = await dealcloud.getSchema(client);
 *
 * await fs.emptyDir('/data');
 *
 * groupedFields.forEach(f => {
 *   fs.outputJSON(`data/${f.list}.json`, f.fields);
 * });
 * ```
 */
export async function getSchema(
  client: Client
): Promise<ReadonlyArray<object>> {
  const results = Promise.all([getLists(client), getFields(client)]);
  const [allLists, allFields] = await results;
  const groupedFields = _.chain(allFields)
    // tslint:disable-next-line: no-string-literal
    .groupBy(x => x["EntryListId"])
    .map((value, key) => {
      const newKey =
        _.find(allLists, x => x["Id"] == key) !== undefined
          ? _.find(allLists, x => x["Id"] == key)["SingularName"]
          : key;
      return { list: he.decode(newKey).replace("?", ""), fields: value };
    })
    .value();
  return groupedFields;
}
