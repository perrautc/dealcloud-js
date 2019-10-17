import { Client } from "soap";
/**
 * Gets all of the currencies supported by DealCloud. These currencies can be used
 * with the dealcloud API to get currency conversions on the fly
 * 
 * ### Example
 * ``` js
 * import { getCurrencies, createClient } from 'dealcloud'
 * let client = createClient()
 * getCurrencies(client).then(console.log)
 * // => ['USD', 'GBP']
 * ```
 */

 export async function getCurrencies(client: Client): Promise<ReadonlyArray<string>> {
    return new Promise<ReadonlyArray<string>>((resolve, reject) => {
        // tslint:disable-next-line: no-expression-statement
        client.DCDataService.CustomBinding_IDCDataService2.GetCurrencies((err, result)=> err? reject(err): resolve(result))
    })
  }