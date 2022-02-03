# get-query-string-value

>Get particular value from url query string

## Install

```
    npm install get-query-string-value --save
```

## usage

```javascript
import queryStringValue from 'get-query-string-value'


const queryString = '?url=web&caption=lorem&version=1.0' // string

const getCaption = 'caption' // string
const getUrl = 'url' // string
const getVersion = 'version' // string

queryStringValue(queryString, getCaption)  // lorem

queryStringValue(queryString, getUrl)  // web

queryStringValue(queryString, getVersion)  // 1.0
```

```

## License

MIT (c) Güner Selamoğlu
