import { Client } from "strong-soap";
/**
 * Gets all of the currencies supported by DealCloud. These currencies can be used
 * with the dealcloud API to get currency conversions on the fly
 *
 * ### Example
 * ``` js
 * import { getCurrencies, createClient } from 'dealcloud'
 * let params = {username: '', password: '', url: ''}
 * let client = createClient(params, {})
 * getCurrencies(client).then(console.log)
 * // => [
 *  'AED', 'ARS', 'AUD', 'BHD', 'BRL', 'BWP',
 *  'CAD', 'CHF', 'CLP', 'CNY', 'COP', 'CRC',
 *  'CZK', 'DKK', 'EGP', 'EUR', 'GBP', 'HKD',
 *  'HRK', 'HUF', 'IDR', 'ILS', 'INR', 'IQD',
 *  'IRR', 'ISK', 'JPY', 'KES', 'KRW', 'KWD',
 *  'KZT', 'LBP', 'MAD', 'MUR', 'MXN', 'MYR',
 *  'NGN', 'NOK', 'NZD', 'OMR', 'PHP', 'PLN',
 *  'QAR', 'RON', 'RUB', 'SAR', 'SEK', 'SGD',
 *  'THB', 'TJS', 'TND', 'TRY', 'TWD', 'USD',
 *  'VND', 'ZAR'
 * ]
 * ```
 */

export async function getCurrencies(
  client: Client
): Promise<ReadonlyArray<string>> {
  return new Promise<ReadonlyArray<string>>((resolve, reject) => {
    // tslint:disable-next-line: no-expression-statement
    client.DCDataService.CustomBinding_IDCDataService2.GetCurrencies(
      (err, result) => (err ? reject(err) : resolve(result))
    );
  });
}
