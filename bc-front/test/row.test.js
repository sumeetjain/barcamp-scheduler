var React = require('react')
var RowByTime = require('../app/components/row.js');
var renderer = require('react-test-renderer');

test('Row will render with no errors', () => {
  var component = renderer.create(
    <RowByTime time="9:00am" info="Star Wars Stuff" />
  ).toJSON();
  expect(component).toMatchSnapshot();
});
