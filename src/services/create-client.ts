import * as soap from "soap"

/**
 * Creates a new SOAP client from a WSDL url. The client ha a built in WSDL cache.
 * You can use the `disableCache` option to disable it.
 * 
 * The `options` argument allows you to customize the client with the following properties:
 *  - endpoint: to override the SOAP service's host specified in the .wsdl file.
 *  - forceSoap12Headers: to set proper headers for SOAP v1.2.
 *  - normalizeNames: if your wsdl operations contains names with non identifier characters
 *  - request: to override the request module.
 * 
 * ### Example
 * ``` js
 * import {createClient} from 'dealcloud'
 * let params = {username: '', password: '', url: ''}
 * let client = createClient(params, options)
 * 
 * ```
 */
interface Params {
    readonly username: string;
    readonly password: string;
    readonly url: string;
}
export async function createClient(params: Params, options): Promise<soap.Client> {
    const url: string = `${params.url}/Services/v2/DCDataService.svc?singleWsdl`
    const DCClient: soap.Client = await soap.createClientAsync(url, options).then((client: soap.Client)=> client);
    const wsSecurity: soap.WSSecurity = new soap.WSSecurity(params.username, params.password)
    
    // tslint:disable-next-line: no-expression-statement
    DCClient.setSecurity(wsSecurity)
    return DCClient
}
