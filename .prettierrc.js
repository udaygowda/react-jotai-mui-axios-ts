module.exports = {
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
