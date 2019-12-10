import { soap } from "strong-soap"

export function createClientAsync({username, password, url}): Promise<soap.Client>{
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve, reject) => {
        // tslint:disable-next-line: no-expression-statement
        soap.createClient(`${url}/Services/v2/DCDataService.svc?singleWsdl`, (err, client)=>{
            // tslint:disable-next-line: no-if-statement
            if (err){
                // tslint:disable-next-line: no-expression-statement
                reject(err);
            }
            const wsSecurity = new soap.WSSecurity(username, password)
            // tslint:disable-next-line: no-expression-statement
            client.setSecurity(wsSecurity);
            // tslint:disable-next-line: no-expression-statement
            resolve(client);
        })
    })
}