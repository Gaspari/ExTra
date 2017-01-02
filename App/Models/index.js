const Realm = require('realm');

import Expense from './Expense'

const schema = [
  Expense
]

export new Realm({ schema })