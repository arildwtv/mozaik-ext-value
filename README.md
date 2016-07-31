# Mozaïk value widgets

[![NPM version](https://badge.fury.io/js/mozaik-ext-value.svg)](https://npmjs.org/package/mozaik-ext-value)

Value widget for the [Mozaïk](https://www.npmjs.com/package/mozaik) dashboard framework.

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
    lastUpdatedFormat:  'YYYY-MM-DDThh:mm:ssTZD', /* optional */
    lastUpdatedFromNow: true, /* optional */
    prefix:             '', /* optional */
    postfix:            ' likes', /* optional */
    columns: 2, rows: 1,
    x: 1, y: 0
  }
}
```

### Parameters

key                 | required | description
--------------------|----------|-------------------------------------------------------------------
`url`               | yes      | *The URL to fetch the value*
`title`             | yes      | *The widget title*
`prefix`            | no       | *Prefix of the value*
`postfix`           | no       | *Postfix of the value*
`lastUpdatedFormat` | no       | *Format of the 'lastUpdated' value (default 'YYYY-MM-DDThh:mm:ssTZD')*
`lastUpdatedFromNow`| no       | *Whether to display the 'lastUpdated' value in "from now" format (default true)*
`pathCurrent`       | no       | *The JSON path to the 'current' value*
`pathLastUpdated`   | no       | *The JSON path to the 'lastUpdated' value*
`pathChangeRate`    | no       | *The JSON path to the 'changeRate' value*
