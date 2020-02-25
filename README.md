#DealCloud

## install
```
    npm install dealcloud-js
```

# Examples
### Create Client
```
const dealcloud = require('dealcloud-js');
const params = {
    username: 'username@firm.com',
    password: 'password'
    url: 'https://schema.dealcloud.com'
};

const client = await dealcloud.createClient(params,{});
```

### Get Currencies
```
const dealcloud = require('dealcloud-js');
const params = {
    username: 'username@firm.com',
    password: 'password'
    url: 'https://schema.dealcloud.com'
};

const client = await dealcloud.createClient(params,{});
const currencies = await dealcloud.getCurrencies(client);

```

