const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const mewItems = _.flattenDeep(items)

console.log(mewItems)