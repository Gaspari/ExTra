export default const Expense = {
  name: 'Expense',
  properties: {
    date: 'date',
    description: {type: 'string', indexed: true},
    created_by: 'string',
    price: {type: 'int', default: 0},

    currency: {type: 'String', default: 'CZK'}
  }
}