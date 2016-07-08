# Mozaïk value widgets

[![NPM version][npm-image]][npm-url]

## Preview

![value](https://raw.githubusercontent.com/arildwtv/mozaik-ext-value/master/preview/preview.png)

## Value Widget Configuration

### Api Configuration

No API configuration is needed.

### Dashboard Configuration

```javascript
{
  // ...
  {
    type:               'value.value',
    title:              'Number of Likes',
    url:                'https://dl.dropboxusercontent.com/u/19253297/test.json',
    pathCurrent:        '$.current', /* optional */
    pathLastUpdated:    '$.lastUpdated', /* optional */
    pathChangeRate:     '$.changeRate', /* optional */
    prefix:             '$', /* optional */
    postfix:            'ca$h', /* optional */
    columns: 2, rows: 1,
    x: 1, y: 0
  }
}
```

### Parameters

key              | required | description
-----------------|----------|-------------------------------------------------------------------
`url`            | yes      | *The URL to fetch the value*
`title`          | yes      | *The widget title*
`prefix`         | no       | *Prefix of the value*
`postfix`        | no       | *Postfix of the value*
`pathCurrent`    | no       | *The JSON path to the 'current' value
`pathLastUpdated`| no       | *The JSON path to the 'lastUpdated' value
`pathChangeRate` | no       | *The JSON path to the 'changeRate' value
