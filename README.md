#DealCloud

### Other Resources
[Dealcloud-Python](https://github.com/holtjp/dealcloud-python)

## install
```
    npm install dealcloud-js
```

# Examples
### Create Client
```javascript
    const dealcloud = require('dealcloud-js');
    const params = {
        username: 'username@firm.com',
        password: 'password'
        url: 'https://schema.dealcloud.{com|eu}'
    };

    const client = await dealcloud.createClient(params,{});
```
## No Parameters
These methods do not require or accept any params.
### Get Currencies
```javascript
    const dealcloud = require('dealcloud-js');
    const params = {
        username: 'username@firm.com',
        password: 'password'
        url: 'https://schema.dealcloud.{com|eu}'
    };

    const client = await dealcloud.createClient(params,{});
    const currencies = await dealcloud.getCurrencies(client);

```

### Get Lists
```javascript
    const dealcloud = require('dealcloud-js');
    const params = {
        username: 'username@firm.com',
        password: 'password'
        url: 'https://schema.dealcloud.{com|eu}'
    };

    const client = await dealcloud.createClient(params, {})
    const result = await dealcloud.getLists(client);
```

### Get Fields
```javascript
    const dealcloud = require('dealcloud-js');
    const params = {
        username: 'username@firm.com',
        password: 'password'
        url: 'https://schema.dealcloud.{com|eu}'
    };

    const client = await dealcloud.createClientAsync(params, {})
    const result = await dealcloud.getFields(client);
```

## Parameters
These methods require params.

### Modified Entries
```javascript
    const dealcloud = require('dealcloud-js');
    const params = {
        username: 'username@firm.com',
        password: 'password'
        url: 'https://schema.dealcloud.{com|eu}'
    };

    const fromDate = "2018-10-26T21:32:52"; //can be any valid date format
    const client = await dealcloud.createClient(params, {});
    const result = await dealcloud.getModifiedEntries({client, entryListId, fromDate});
```

### Filtered Entries
```javascript
    function Value(arg, argType="string") {

        return {
            $attributes: {
                "$xsiType": `{http://www.w3.org/2001/XMLSchema}xsd:${argType}`,
            },
            $value: arg
        }
    }

    const filterInfo = [{
        FieldId: 58743,
        FilterOperation: "StartsWith",
        Value: Value("G")
    }]
    const entryListId = 67337; //Id parameter returned by getLists
    const srcFilters = {FilterInfo: filterInfo};
    const client = await dealcloud.createClientAsync(params)
    const result = await dealcloud.getFilteredEntries({client, entryListId, srcFilters});
```
## Chains
These methods require a parameter returned by one or more of the No Params methods

### Get Entries
```javascript
    const dealcloud = require('dealcloud-js');
    const params = {
        username: 'username@firm.com',
        password: 'password'
        url: 'https://schema.dealcloud.{com|eu}'
    };

    const entryListId = 67337; //Id parameter returned by getLists
    const client = await dealcloud.createClientAsync(params, {})
    const result = await dealcloud.getListEntries({client, entryListId});
```

### Get Records
```javascript
    const client = await dealcloud.createClientAsync(params, {})

    // Getting Lists
    const entryLists = await dealcloud.getLists(client);

    // Getting Fields
    const allfields = await dealcloud.getFields(client);

    // Random entry list
    const entryList = entryLists[Math.floor(Math.random() * entryLists.length)];

    const entries = await dealcloud.getListEntries({client, entryListId: entryList.Id});
    const entryFields = _.filter(allfields, {'EntryListId': entryList.Id})

    // If pulling against an empty entry list could get an error, 
    // this is needed only because i'm pulling from random entry lists
    if (entries == null){
        return [];
    }

    /**
     * If filtering, run this loop twice, first only for fields that you would like to filter on but for all entries
     * Filter DCPull results however you'd like
     * Run this loop again for all fields, but only for the filtered entries
     */
    entries.NamedEntry.forEach(entry => {
        //With Schema replace this with a for in or for of loop and loop through properties of schema
        entryFields.forEach(field => {
            //Get All Fields
            DCPulls.push(new DCPull(fieldId = field.Id, entryId = entry.Id))
        })
    });

    // Without Batching
    // const result = await processDCPullAsync(client, DCPulls)

    // Batching DCPulls into batching of 10k pulls, can specify alternate batch sizes
    const result = await batchDCPulls(client, DCPulls);
    return result;
```
The actual batching function
```javascript
async function batchDCPulls(client, DCPulls, batchSize = 10000) {
    const manyBatchedDCPulls = _
        .chain(DCPulls)
        .chunk(batchSize)
        .map(f => processDCPullAsync(client, f))
        .value();
        
    const manyResults = await Promise.all(manyBatchedDCPulls);
    const result = _.flatten(manyResults)
    return result;
}
```
the dcpull function
```javascript
async function processDCPullAsync(client, DCPulls) {
    const result = await dealcloud.processDCPullAsync({client, DCPulls});
    return result;
};
```
### Create Records
